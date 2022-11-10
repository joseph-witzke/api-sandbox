# mabl Integrations Sandbox

## ☝️ Proposal...

**What problem does your project solve?**
- This project aims to provide a sandbox for users to practice working with the mabl Jenkins integration, developing a beter understanding of how an APIs work, as well as a better understanding of CI/CD. 

**What is the mission statement?**
- Provide a low-stakes enviornment for mabl employees and customers to practice mabl integrations, specifically CI/CD.   

## 💡 Features

**What features are required for your minimum viable product?**
- Jenkins, with mabl Jenkins plugin
- REST API that performs all CRUD operations
- Database for storage of requests
- Client page for learning about API requests

**What features may you wish to put in a future release?**
- This project is essentially a continuous works in progress. Tentaivley, we envision multiple versions that will be expanded on
- V1 is to have a mabl Jenkins plugin configured, so that when a new build is pushed, Jenkins will trigger mabl tests
- V2 is to explore enhancements with the API, adding a client page, and incorperating Docker so there is no longer a need to install all the requried softward on the local machine
- V3 is to expand upon the user's ability to quickly experiment with these integrations -- i.e. machine and person agnostic. 
- V4 add other mabl integrations: Github Actions, Bamboo, etc. 

**What do the top 3 similar apps do for their users?**
- mabl Sanbox 
- mabl University

## 🛠 Frameworks - Libraries

**What 3rd party frameworks/libraries are you considering using?**
- Jenkins
- mabl Jenkins plugin
- Docker
- React
- Axios
- ReactDOM
- React-router-dom
- Yup
- Cors
- Express
- Knex
- Postgres OR MongoDB
- Jest
- Nodemon

## 🎯 Target Audience

**Who is your target audience? Be specific.**
- mabl employees across all business sectors, but focusing on Support, CSMs, Sales, and Onboarding
- mabl users, both current and prospective

## 🔑 Prototype Key Feature(s)

**How long do you think it will take to implement these features?**
- Considering this is a side project (i.e. main focus is on monitoring the queue and assisting customers), it is difficult to specifiy a deadline. It's also important to consider that there will be a need to invest time into first learning Docker before we can proceeed. With all these considerations and unknown, I believe it's best to give a conservative timeline of 6-8 weeks. 

**Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?**
- As outlined above, this project will be broken down into variouse versions -- V1, V2, etc. The future of the project will also be shaped by the needs and feedback of our users.  