# Here's a Kana!
Here's a Kana is designed for anyone learning the Japanese syllabries (_kana_ かな). There are flashcards for the _hiragana_ (ひらがな) and _katakana_ (カタカナ).  Reviews are conducted based on the supermemo SM-2 spaced-repition algorithm. After each card, a rating of 0 - 5 is given based on how easy it was to recall the reading for each card. The reptition of cards is based on the number of times reviewed and the ratings given. 

This project was completed as part of a two day sprint.

## Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Auth0](https://img.shields.io/badge/-Auth0-c9cace?logo=auth0&logoColor=black&style=for-the-badge)
![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=black&style=for-the-badge)
![Node](https://img.shields.io/badge/-Node-9ACD32?logo=node.js&logoColor=white&style=for-the-badge)
![Nodemon](https://img.shields.io/badge/-Nodemon-76D04B?logo=nodemon&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/express-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## Features
### Sample Deck
Until the user is logged in, they are presented with a guided sample deck that does not record scores.
![Sample Deck](https://user-images.githubusercontent.com/98896929/187709645-3ef1ee21-e8b5-4eed-aaba-db4aea5be7bf.gif)

### Card Gallery
The card gallery will show all cards for the current review
![Card Gallery](https://user-images.githubusercontent.com/98896929/187711156-09e4e1d8-11d8-4e62-8904-ac3ba8b860e3.gif)


### Personal Deck
Once signed up and logged in, the user will be presented with only their cards that are up for review.
![Personal Deck](https://user-images.githubusercontent.com/98896929/187710439-bda8c985-c074-481d-b493-77447cd37f84.gif)

## Getting Started
### Setup
1. Install dependencies
```
npm install
```
2. Build the database
```
npm run build-db
```
3. Seed the sample deck
```
npm run seed-db
```
4. Run the development server
```
npm run server-dev
```
5. Create webpack bundle
```
npm run client
```
6. Go to http://localhost:3000

### Environment Variables
This project expects the following environment variables
```
//SERVER DETAILS
PORT='3000'

//DATABASE DETAILS
PGHOST = 'localhost'
PGUSER = 'myUser'
PGPASSWORD = 'myPassword'
PGDATABASE = 'kanaapi'
PGPORT = 5432

//AUTH-0
ISSUER_BASE_URL = https://my_base_url.us.auth0.com
BASE_URL= http://localhost:3000/
CLIENT_ID = clientIDfromAuth0
SECRET = secretFromAuth0
