# FACG3-Book

## What
FACG3-Book is a web application that serves the user to post information to a local database and retrieve that information at anytime, even after the page is refreshed or browser closed. Since it is stored to a local db.

## How
To build a similar application we needed first to create a diagram to represent the initial file structure

![pic](https://scontent.fjrs2-1.fna.fbcdn.net/v/t1.0-9/24993395_476957992705663_3246126245086496846_n.jpg?oh=1068779193f2bc6984493de6a6730332&oe=5ACD7A14)

The application works as follows
### User stories
1. The user enters a name of publisher and a post
2. The user can view the posts whenever is needed

## Analysis 
Case Post
1. The system sends a post request from the front-end to the back-end with the data containing the name and the post contents
2. On the back-end side the system writes to the database using sql

Case View
1. The system sends a get request from the front-end to the back-end
2. and the backend transfers the user to the wall page
3. select the table containing the related information
4. display it properly on the front-end wall page


![Heroku app link!](https://facg3-book.herokuapp.com/)
run locally on port 6060
