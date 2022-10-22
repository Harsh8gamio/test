const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  function generateHash(data){
    return crypto.createHash("sha3-512").update(data).digest("hex")
  }

  function inValidPartitionKeyCase(){
    const data = JSON.stringify(event);
    candidate = generateHash(data)
  }
  
  // check for events validity
  if (event) {
    event.partitionKey ? candidate = event.partitionKey: inValidPartitionKeyCase();
  }
  
  // check for candidate validity
  if (candidate) {
    if(typeof candidate !== "string") candidate = JSON.stringify(candidate);
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  // check for candidate length
  if (candidate.length > MAX_PARTITION_KEY_LENGTH)
    candidate = generateHash(candidate);

  return candidate;
};