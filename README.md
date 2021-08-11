# Node Hatchio Dev Log

i. Project Requirments
ii. Change Log

---

## The Entire Dev Team

| Student Name |       Student Email       | GitHub Username |
| :----------: | :-----------------------: | :-------------: |
|   member1    |   mlee38@mail.sfsu.edu    |  rolandlee0308  |
|   member2    | jgonzalez34@mail.sfsu.edu |    Hilarioo     |
|   member3    |  asingh26@mail.sfsu.edu   |   singhaaron    |
|   member4    |  lsolomon3@mail.sfsu.edu  |   LyraSolomon   |

## Change Logs

#### Urgent TODO

#### TODO

- add variability to date creations on default time
- nonfunctional requirement for maximum 100 users

#### Unresolved Issues

- instead of window.location.reload() we should be able to refire the useEffect to cause a state change w/o having to reload
- apply button should only be accessible when student users are logged in

#### Currently Working

- PUT requests for student users to edit their information (remaining: experience,project,schools) :: Aaron
- Improved Professor Review System :: Lyra

#### Tuesday, May 4, 2021 :: Aaron

- hard reset for database tables when accessing backend interface

#### Sunday, May 2, 2021 :: Aaron

- Merge roland branch to milestone03
- aws-deployment of latest

#### Friday and Saturday, May 1, 2021 :: Aaron

-apply and hire

#### Thursday, April 29, 2021 :: Aaron

- First User bug fix for employer | students
- Experience insertion for students

#### Monday, April 26, 2021 :: Aaron

- Notifications page for students when receiving professor ratings. done with seen/unseen TODO: add buttons for deleting notifications

#### Friday, April 23, 2021 :: Aaron

- Home page (commented out search jobs with title footer) also we already have search at seach-jobs
- Adding functionality to Job search page 'View' and but 'Apply' functionality is (in progress)
- Button Formatting w/ bootstrap
- Editi About Me for Profile Page

#### Thursday, April 22, 2021 :: Aaron

- Transfered roalnd's branch code for hasing firs time users in database // to work around the issue of default users, i used an efficient solution because it works for the time being
- I re-added the ec2 instance because /routes can't be accessed without the url

#### Wenesday, April 21, 2021 :: Aaron

- Error handling and removed warning for refreshing the full view public profile pages
- Added Student Experience and GET request to send corresponding table
- Models/ Dir structure to align w/ GET POST PUT

#### Tuesday, April 20, 2021 :: Aaron

- I needed to upload the build/ folder (8.3mb) to more efficiently deploy onto aws which has been a hassle
- changes after jose's push , refresh only after inserts for student profile are succesful with response code 200
- check condition for first time users

#### Tuesday, April 20, 2021 :: Lyra

- Fix SQL injection vulnerabilities where the purpose of the function was understandable
- Fix email verification functionality
- Prevent passwords from being leaked to the users
- Programmatically determine whether the server is AWS or a debug environment

#### Monday, April 19, 2021 :: Aaron

- Tested everything from scratch, every thing functions as expected
- Deployed onto aws

#### Sunday, April 18, 2021 :: Aaron

- Fixed Profile Page Rendering
- POST | Pop UP Forms for Student Profile Page | Education | Projects
- Added protection for backend routes try{}catch()

#### Saturday, April 17, 2021 :: Aaron

- POST handling with Job Form Submission Complete // but pretty poor css but works
- Fixed Student Ratings Query for Student Cards
- Cleaner Database Populate

#### Friday, April 16, 2021 :: Aaron

- Updated ES6 asyn/await API fetch
- Added code signatures
- Added onto Revamped Student Cards w/ PopUp Rate Functionality for Professors & Redirect to View Full Student Profile Page
- Dashboard.js w/ Jose's revamped Profile Components for Employers | Professors | Students
- Currently working on P1 Functions & ~~Merging Jose's Push on branch page/StudentPofile~~ done
- Old logs for History Table for one of the milestone documents

#### Tuesday, April 13, 2021 :: Aaron

- Started adding brief descriptions in the beginning of backend/routes in order to create more consistency and help in screenshot code for milestone 04 review page
- Fixed a issue w/ dashboard.js where Type_User was not being checked as "undefined" or "null"
- Possibly fixed an issue with fetch fired in useEffect for StudentsSearch.js, the problem w/ fetch is that the response isn't returned instantly, so map will return an error if there's nothing in the dbStudents useState, so to work around it to have a empty object that will refresh once the response is returned

#### Monday, April 12, 2021 :: Aaron

- ~~Remember to hit `Sign Out` when you first launch the application <- still working on debugging this>~~ Fixed
- Remember to `npm run node_hatchio_init` im still in process of redesigning db but the previous error shouldnt occur anymore
- Implemented visible only rate page for professor to rate student

#### Saturday , March 31,2021 :: Aaron

- Redesigned User Tables to match sign up page

#### Friday , March 31,2021 ::Aaron

- Corresponding database with information needed and being used on figma
- reset database
- up to date repo with features/u
- folder seperations with api calls and server.js

#### Wenesday, March 31,2021 :: Aaron

- Tested Image loading of student profiles
- if you run sql , it will auto-populate the tables and reset every table
- Meet with Jose for clarifications and brainstorming how to implement Figma's layout

#### Tuesday, March 30,2021 :: Aaron

- Done json response with proper formating ish
- Fixed job listings db schema
- Populated students and job listings with 3 entries on job listings and 4 on students

#### Monday, March 29, 2021 :: Aaron

- Worked a little bit on ratings page
- can fetch from backend but, i'm trouble iterating through the students

#### Sunday, March 28, 2021 :: Aaron

- React Application and Express Server w/ concurrently
- SetUp JobsListings Filters and Changed Queries

#### Saturday, March 27, 2021 :: Aaron

- dir seperation with backend and frontend to increase simplicity,organization,and pm2 adjustment instead of using npm run dev
- mysql-scripts to set up local environment database
- server.js removed old queries to adapt to new database design
- backend user interface to visualize and confirm json response when front-end makes a fetch
- additional navigationb bars to more effectively split tasks?

---
