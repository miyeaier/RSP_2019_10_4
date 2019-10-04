# Rock-Paper-Scissors web application
* Created by Miyesier Kaerman 
* Deployed with Netlify
* Tested with npm

## how the code works
The code gets input from player and compare with computer choice 

## Logic of the game
Rock vs Paper -> Paper wins  
Rock vs Scissors -> Rock wins  
Rock vs Rock -> Tie

## Dependencies
Vanilla JavaScript  
NodeJS  
Chai  
e2e_training_wheels  

## SetUp
* Initialize npm
* Install packages through running the following command in your terminal:
```
npm i e2e_training_wheels --save-dev
```
* Use the automatic setup with:
```
node ./node_modules/e2e_training_wheels/dist/install.js
```
```
npm link
```
* Passing tests if everything is set up properly after running:
```
npm run test
```

## License
MIT-license

## User Stories
```
As a programmer  
In order to produce good quality code  
I want to work in a test driven way and test my code  
```
```
As a user  
To be able to play the rock-paper-scissor game  
I need to go to  the  RSP website  
```
```
As a user  
In order to play the game  
I need to choose between Rock, Paper or Scissors  

```

```
As a user  
If I play paper and the computer plays rock  
I should win 
```
```
As a user  
If I play rock and the computer plays rock  
I should tie 
```
```
As a user  
If I play Scissors and the computer plays rock  
I should lose 
```
```
As a user  
After my input made
I should see who won  
```
```
As a user  
If  my input not follow the game rule
I should see input not correct
```