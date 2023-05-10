# Job-listings

Created a customised job listings board for a company. Applicants can mark a job that they are interested in. Recruiters can manage the job listings and view interested applicants.

Features:
1. There are primarily two different types of users - recruiter and applicant.
2. Applicants can view all the job listings and mark his interest for each job role.
3. Recruiter can create, edit and archive a job listing.
4. Recruiter can view interested applciants of a job.
5. The job listings gets colour coded when they are created (the listing which are due in more than 21 days is green, less than 14 days is yellow and less than 3 days is be red and the jobs which are past the deadline is grey.
6. Recruiter can darg and drop to rearrange the order of the job listings

Technologies used:
1. HTML
2. CSS 
3. JS
4. Node.js
5. express
6. MongoDB
7. Passport.js

Design Decisions:

1. Decided to use MongoDB to create user models - recruiter and applicant to manage fucntionalities particular to them.
2. Created two collections for user and job. Used an array as an attribute of a job to store the names of interested applicants for a job role.
3. Used passport.js for the login/sign up module because its clean authentication strategies.
4. Added a grey color on top of the requirements specified so that an applicant knows its past the dealine.
5. Provided button for edit, archive within the job card for the recruiter for easy access.
6. Used a index to identify the active and archived job listings.

Schema:

1. Created two collections for users and jobs. 
2. Stored info like title, description, contact as separate feilds in jobs
3. Used a boolean to indicate if the job is active or not.
4. Used an array as a feild of the jobs collection to store the names of interested applicants for a job role.
5. In users collection, an enum was defined to indicate if the user is a recruiter or an applicant along with name and email.

 
Scalability Concerns:

If the recruiters decide they need a record of all the job listings right from the start then there will a huge amount of listings in the database after years, then to retrieve the active jobs becomes a concern

To solve this we can create two different tables for the active jobs and unactive job listings

There will be a huge number of applicants applying for a job hence we can provide a way to categorize them based on their experience, education etc

To run this application

1. Clone the repo
2. Install node.js
3. Install mongoDB and mongo shell
4. Install the dependencies
5. Run seed.js to seed intial data into the database
6. run the applciation in localhost 3000
```
$ git clone https://example.com
$ cd ../path/to/the/file
$ npm install
$ npm init -y
$ npm install express express-session
$ npm install passport passport-local passport-local-mongoose
$ npm install method-override
$ node seed.js
$ nodemon index.js
```
Check out the video below for a run through of the applciation.

https://user-images.githubusercontent.com/89096691/235421124-cc35c381-a453-4156-856d-5f359fd95dbb.mp4

