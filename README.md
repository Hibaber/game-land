Game Land (still a work in progress...)

It's an application built with React, Typescript and Ckakra UI. See demo here: https://game-lland-q2qb6ve38-hibaber.vercel.app/

It feches video games from RAWG API. https://rawg.io/apidocs

You can filter the games by genre and sort them by the console device or order them by name, release date...etc.


The second part of the game i will be working on will include routing with React Router for viewing each game's details , managing data and caching with React Query, state management with Zustand and infinite scrolling to load all the games

Getting Started

To get started, follow these steps:

Clone this repository to your local machine.

Run npm install to install the required dependencies.

Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.

Add the API key to src/services/api-client.ts

Run npm run dev to start the web server.
