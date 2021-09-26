# React Posts List App

A training Front End  project for creating a multi-page website. The main page displays a list of posts. I receive data from a remote service via a rest api. The posts are loaded automatically after reaching the end of the current list. Search and sorting by content is also implemented. \
This course is on the YouTube channel [Ulbi TV](https://www.youtube.com/channel/UCDzGdB9TTgFm8jRXn1tBdoA).

<a href="https://m7mark.github.io/ulbi-PostList-React/"><img src="https://user-images.githubusercontent.com/70297692/133153483-13706e04-96c6-46ac-8aa0-8279bd1f312f.png"/></a>

## Technologies used

- [React](https://reactjs.org/) single page application
- Routing done using [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
- [Hooks](https://reactjs.org/docs/hooks-intro.html)
- Rest API via [Axios](https://axios-http.com/)
- Animation done using [React Transition Group](https://reactcommunity.org/react-transition-group/) & [Intersection Observer API](https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API)
- ... \[other technologies\]

## Setup

1. Clone the repository and install the dependencies
```bash
yarn install
```
2. Start the frontend application locally
```bash
yarn start
```

## Routes

This project is using [`react-router-dom`](https://reacttraining.com/react-router/core), have a look at `src/router/index.js` which is the file that defines the routes that are available.

There are several routes to navigate to different pages of the app:

- Posts - main page.
- PostIdPage - single post page
- About & Login

### Test deployment

The `develop` branch deploys to https://m7mark.github.io/ulbi-PostList-React

---

This app was bootstraped based on the template provided by [`create-react-app`](https://github.com/facebook/create-react-app)
