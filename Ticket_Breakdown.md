# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Ticket 1 - ability for facilities to save their own custom ids for each agent

- time/effort estimates:- 4hr

- Implementation:-
- A function `generateCustomId` helper method to generate a unique id 
- A function `generateCustomAgentId` to store id in the database
will create a new table to store custom id for each agent in agent table. 

2. Ticket 2 - change in `getShiftsByFacility` function

- time/effort estimates:- 1hr

- Implementation:-
will change in `getShiftsByFacility` logic(query) to fetch custom agent id if present or use the interanal database id to return all Shifts worked that quarter, including some metadata about the Agent assigned to each


3. Ticket 3 - change in `generateReport` function

- time/effort estimates:- 1hr

- Implementation:-
will change in `generateReport` logic(query) to fetch custom agent id if present or use the interanal database id to genrate report


4. Ticket 4 - write unit test cases to check the behaviour

- time/effort estimates:- 1hr

- Implementation:-
write unit test cases to check the behaviour of `generateCustomId` and `generateCustomAgentId`.
