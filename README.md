# Tech Test for Viva Leisure

## The Task:

### Create a basic application for a superhero enthusiast, that can perform following functions:

1. Allow a user to search for their favourite superhero.
2. Select the superhero and see his/her image and power stats.
3. Edit the power stats
4. Save the image and stats to be viewed later.

## Setup/Instruction

### **FE: (Super-hero)**

1. Run `npm install` in your terminal
2. Run `npm start` in your terminal
3. You can view the site at `http://localhost:3000/`

### **BE: (Graphql-superhero)**

1. You need `AWS_ACCESS_KEY_ID` `AWS_SECRET_ACCESS_KEY` `AWS_DEFAULT_REGION` from your AWS dynamoDB and put those values in .env file
2. Run `npm install` in your terminal
3. Run `npm start` in your terminal
4. You can access the server at `http://localhost:4000/`

## Assumptions

- Thought graphql was optional, and thus I set up the server as express.js however, I changed the server to graphql
- The API provided did not work due to SSL error, spent quite a lot of time to fix the error. After a while, I found a different working link (changed the baseURL slightly)
- Did not have much details on design specs, therefore, I used React and Bootstrap to create a simple search application

## Challenges

- Learning graphql and connecting it to AWS dynamodb in a short time frame was a challenge, though I learned a lot from completing this task
- Planning the whole flow and architecture of frontend and backend was difficult. Because, even though I had experience in both frontend and backend at previous job, I never really had to choose a stack and/or plan the whole application design.
- Controlling multiple inputs in React using single state, for user to edit the powerstats and be able to display that updated value, encountered many issues. This required re-designing/re-arranging the components and the state.
- Switching from Express.js to Graphql wasted my time and thus I felt quite pressured to finish this task in time
- Graphql working differently to normal REST, for example, I had to make POST request to read data which was unintuitive
- Inconsistency of datatype and key names between Graphql backend and superhero API caused many issues which took a while to debug
  - powerStat values stored in graphql schema as Int, but it was string type in the superhero API
  - superhero API had image stored as "image.url" so the frontend was referring to it as "image.url" but I stored this as "img" in my graphql schema.
- In the frontend (Modal) where the Modal maps the superhero data fetched from the API, the .map() did not seem to recognise my unique key in the \<li\> despite trying many ways of giving unique key values. I suspect this is occuring because the data I map is asychronosly fetched
