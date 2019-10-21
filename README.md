BUMP's Back-End Technical Challenge
===

# About BUMP

Our mission at BUMP is to make all commerce social.

On BUMP users can build up their public profiles, follow & message anyone on the platform, list items they want to sell and buy products from other sellers.

Plus, we're working on introducing even more epic social features that allow kids to hang out and build their online identity with us which in turn drives transactions - we're a marketplace fuelled by a social network.

We're growing fast too. Last year we went through Y Combinator and we've just announced a $7.5M Series A round of funding following a $2M Seed Round in 2018 from leading names in venture capital including Kleiner Perkins, e.ventures and Y Combinator to redefine social shopping.

# Your mission

Welcome to BUMP! Your mission, should you choose to accept it, is to carve out 2 hours and build API functionality that enables front-end clients to:
* get a list of gifs from [Giphy API](https://developers.giphy.com/docs/)
* update the user with its preferred gif as avatar
* ability to search users (users) by either username or name

> **Hey this is important!**
> We hope you can spend about 90 minutes on this project. If you can finish faster -- great! If not, limit yourself and don't spend much longer than 90 minutes MAX.

# Installation instructions
* Clone the repo `git clone git@github.com:SoBump/BackEndTakeHomeChallenge.git`
* Install dependencies `npm install`
* Install ts-node `npm i -g ts-node`
* Run server `npm run dev` (this runs on port 3000, to update the port check server.ts)
* Have fun :)

# Your Tasks

* Your scope is to create an API that front-end clients can use
* A client should be able to show a list of avatar gifs to the user and let the user pick one
* Next step is to enable clients to allow the user create a listing (only title / name of product). Once a couple of products have been added, offer the ability to search for listings by title.
* Be creative with this. We want to see a functional API. When in doubt, make an executive decision. If you finish early, feel free to polish it up.
* Use the trending API to fetch a list of gifs from [Giphy API](https://developers.giphy.com/docs/). API Key: `YQD46PNuiExynupQ46HOzJqctivOHt16`
* Once finished, create a private repo and add `grigorecezar` or 'cezar@sobump.com' to it. Alternatively send your repo zipped to cezar@sobump.com
* Tests would be nice but are not required for the purpose of this exercise. Just focus on getting it done in under 2 hours. If you finish early, feel free to write some unit tests.

> **Use any language you would like**
> We've provided some boilerplate code in Typescript but feel free to use any language you would like.

# Some tips

* We've provided a lot of code for you to get up and running fast! We encourage you to use it if you think it will help, but feel free to roll your own solution if you like.
* Use any languages, frameworks, or libraries you like. Pick something you are comfortable with.

> **What are we keeping an eye for**
> Clean code that works. RESTful implementation. Decision making. OOP understanding.

# Mini BUMP API

Some boilerplate code has already been provided

## Get all users
List all users that the app has

    GET /users

## Create a new user
Create a user using its name

    POST /users
    body: {
        name: "Tyrion Lannister",
        username: "wineforall",
    }
