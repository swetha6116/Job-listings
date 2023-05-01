# Job-listings

Created a customised job listings board for a company. Applicants can mark a job that they are interested in. Recruiters can manage the job listings and view interested applicants.

Features:
There are primarily two different types of users - recruiter and applicant.
Applicants can view all the job listings and mark his interest for each job role.
Recruiter can create, edit and archive a job listing.
Recruiter can view interested applciants of a job.
The job listings gets colour coded when they are created (the listing which are due in more than 21 days is green, less than 14 days is yellow and less than 3 days is be red and the jobs which are past the deadline is grey.
Recruiter can darg and drop to rearrange the order of the job listings

Technologies used:
HTML
CSS 
JS
Node.js
express
MongoDB
Passport.js

Design Decisions:
Decided to use MongoDB to create user models - recruiter and applicant to manage fucntionalities particular to them.
Created two collections for user and job. Used an array as an attribute of a job to store the names of interested applicants for a job role.
Used passport.js for the login/sign up module because its clean authentication strategies.
Added a grey color on top of the requirements specified so that an applicant knows its past the dealine.
Provided button for edit, archive within the job card for the recruiter for easy access.
Used a index to identify the active and archived job listings.
 
Scalability Concerns:
If the recruiters decide they need a record of all the job listings right from the start then there will a huge amount of listings in the database after years, then to retrieve the active jobs becomes a concern

To solve this we can create two different tables for the active jobs and unactive job listings

There will be a huge number of applicants applying for a job hence we can provide a way to categorize them based on their experience, education etc



Check out the video below for a run through of the applciation.

https://user-images.githubusercontent.com/89096691/235421124-cc35c381-a453-4156-856d-5f359fd95dbb.mp4

