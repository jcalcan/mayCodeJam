# Codify fitness App: Back End

This back-end project is focused on creating a server for the Codify fitness App application.
The project is the back-end server to the Codify fitness App app. Every route was created along with its controller wich handles the request and response as well as error handling. The server connects to the mongoDB configured to add users and clothingItems using the custom built API endpoints. Eslint was used to correct code errors and syntax. The server utilizes express.js framework with NODE JS for database and middleware User Authorization.

## Running the Project

http://localhost:3000

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

## Installing MongoDB

for windows - https://www.mongodb.com/try/download/community

for mac
Run these commands (-->) to install MongoDB using Homebrew:

--> brew tap mongodb/brew

--> brew update

--> brew install mongodb-community@7.0

## command to start the MongoDB background service for Mac

--> brew services start mongodb-community@7.0

Linux

Installation instructions vary depending on your distribution. You can find the recommended packages and instructions here. https://www.mongodb.com/docs/manual/administration/install-on-linux/#recommended
