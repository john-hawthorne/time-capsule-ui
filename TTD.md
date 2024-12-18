[ ] Implement ability to edit time for existing task. (<= needs research [53:24], found a solution [33:46], next step -> start and stop time?, more work [1:20:36]), [20:54], Added Time Widgets [34:20], Styled and Resolved errors [56:22], Initializing time for existing task [54:28], display start and end time for existing task [25:00], saving edited time[50:14], saving edited time[22:00], mtime [34:50], add date as an option[49:21] merge to main and fixes[1:10:16]
[ ] Select tasks from schedule within Stopwatch page(tasks from today’s schedule)  
[ ] Figure out how to deploy the app  
[X] Create models for task type, task, and task schedule   
[X] Create services for API access  
[X] Disable ”Go!” after stopping for the time being  
[X] Stop clock after clicking cancel  
[X] Prompt before closing window  
[X] Might need to swap out stopwatch function  
[ ] How do we name the action methods?  
[ ] Fix update dialog for stopwatch page  
[X] Difference between constructor and ngOnit  
- constructor = property initialization  
- ngOnit = beyond property initialization

[ ] Rename scheduler model
[ ] Am I using the correct classes for styling?  
[ ] Weird issue with modal  
[ ] Add Angular Route Guards  
-Should I use route guards to prevent access to pages if the user hasn't logged in?  
[ ] Add login/logout capability (research needed)  
[X] Move backend tasks to TTD within backend project
[ ] Stop stopwatch if user submits new task without stopping stopwatch
[X] Add row for total elapsed time  
[X] Add ability to delete[50:37]
[ ] Click Task from Scheduler and Pop Up Stopwatch with Task Name prefilled(move to Stopwatch page maybe?)
[X] Deploy (CLI) [2:27:18], Deploy (environments) [35:18]

- What is this? -
models, disabling, and canceling[1:24:24]  
confirmation for closing window[1:08:27]  
rewrite stopwatch[56:53]  
Create services for API access [43:40] todo: stopwatch

[X] Add Manual Task
[ ] Add a completed checkbox to Scheduler grid
- [ ] Need to update TimeSlot data model
- [ ] Add checkboxes to the Scheduler UI
- [ ] Update TimeSlot data model within UI
- [ ] Update database with new field
[ ] Add notes to stopwatch grid
- [ ] Add notes column to tasks data model
-- [ ] UI
-- [ ] API
-- [ ] Database
[X] Add Task Type 
- [X] plus sign next to task types on Stopwatch page
- [X] add task type modal (save and cancel buttons)
- [X] Create component for task type? (dropdown and add button)
[ ] Group the tasks together in a box?
[ ] Different color for the types of buttons
[X] Modify scheduler to update when a new date is selected
[ ] Delete schedule 
[X] Disable schedule date
[ ] Rename AddModal
[-] Add Task Type within Add Task Modal (only one modal displays? doesn't look like there can be two modals displayed at the same time?)
[X] Improve task type component styling 
[X] Update Task type after adding task
[X] Update Task Type after adding manual task
[X] Update Task type after updating task
[X] Bugs
- [X] Task Type dropdown not updating after changing tasks' task type
- [X] After adding a task, the task type doesn't display in the grid when all is selected in the task type dropdown
- [X] - Update the task type drop down? Or leave it? Set it to all after adding a task
- [X] Add Manual Task is broken
