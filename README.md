# a*Me*liorate
(This app is in Progress)


## Proposal
a*Me*liorate is an app for those who want to optimize their lives. Track certain statistics over time and see how they influence you using intuitive visualization tools. 

As a general example, notice that on Monday you had 6 cups of water and pasta for lunch and dinner which made you feel bad on Tuesday. Whereas on Thursday you exercised, had 12 cups of water, and had plenty healthy foods, and as a result felt great on Friday. 


## Description
a*Me*liorate is a work in progress MVC progressive web app that lets users to track daily personal statistics and visualize them over time to understand the effects of various influences on their wellbeing. I'm using Node.JS and Express as the Controller layer and GraphQL through Apollo to access and serve data. Rather than a traditional RESTful API, this setup optimizes dataflows by only interacting with the specific data that the client application is requesting, so that requests to the server are reduced and the application can scale better. 

For the Model layer I'm using PostgreSQL with the Node.JS ORM Knex.JS in order to parameterize SQL queries and prevent SQL injections. The app will also be taking advantage of AWS Cognito for user authentication and authorization to prevent a user from accessing pages they’re not supposed to access, like editing another user’s profile. AWS Lambda will be utilized for running certain functions to reduce the request load on the Express server. 

The View layer/frontend is built using React for component-based UI rendering since it's a lightweight, easily customizable library that only re-renders certain parts of the app if they've changed from the previously stored version (comparing the diff), Redux as the central state store, and Jest for unit testing. I'm aiming to build the project as a progressive web app which will allow it to be accessed both from the web and as a native app with offline capabilities. 

I chose to develop the application in TypeScript in order to prevent runtime type errors that can happen with data interaction in dynamic languages like JavaScript where types are easily changed. I set up both frontend and backend in Docker to ensure consistency in terms of development environments so that any developer on any system can pick up the project and start developing with minimal setup and no dependency issues. I'm using CircleCI for continuous integration so that every change to the code will be tested whenever it's uploaded to GitHub.


## Getting Started
Deployed version coming soon!
_____________

To run the app locally (make sure to install Docker and Docker-Compose):

1. Clone and download the repo.
1. Navigate to the project folder.
1. run "**npm install**" and then "**docker-compose up --build**" in both frontend and backend subdirectories.
1. The app should be running on **http://localhost:3000** and the server on **http://localhost:8080**.



## Technologies and Tools

Node.js, TypeScript, React, Redux, Express, GraphQL, Apollo, PostgreSQL, Knex, Docker, CircleCI


## Models
User Schema

| ID    | First Name  | Last Name   | Email  | Join Date  |
|:------|:------------|:------------|:-------|:-----------|
Primary Key| String   |  String     | String | Timestamp  |

Stats Schema

|User_ID|Entry Date|Weight|Water Intake|Sleep Amount|Sleep Quality|Exercise Type|Exercise Length|Exercise Intensity|Overall Feeling|
|:------|:---------|:-----|:-----------|:-----------|:------------|:------------|:--------------|:-----------------|:--------------|
|Foreign Key|Timestamp|Integer|Integer | Integer    | Integer     | String      | Integer       | Integer          | Integer       |
