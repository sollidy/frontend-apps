# React Social-Net App

A training Front End project for creating a multi-page website. The main page displays a list of posts. I receive data from a remote service via a rest api. The posts are loaded automatically after reaching the end of the current list. Search and sorting by content is also implemented.
This course is on the YouTube channel [Ulbi TV](https://www.youtube.com/channel/UCDzGdB9TTgFm8jRXn1tBdoA).

![Example site](https://user-images.githubusercontent.com/70297692/134815918-95a4c872-7fb3-4b67-b71f-92dfae931bb4.png)

## Technologies used

- [Vue3](https://v3.vuejs.org/) codebase
- Routing done using [Vue router](https://next.router.vuejs.org/)
- [Composition API](https://composition-api.vuejs.org/)
- API via [Axios](https://axios-http.com/)
- Store: [VueX](https://vuex.vuejs.org/)
- [Intersection Observer API](https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API)

## Setup

1. Clone the repository and install the dependencies
```bash
yarn install
```
2. Start the frontend application locally
```bash
yarn serve
```

## Routes

This project is using [`Vue router`](https://next.router.vuejs.org/).

There are several routes to navigate to different pages of the app:

- Posts - native Vue single component.
- Store - single component with VueX
- Composition - single component with Composition API
- About - some additional info


---

This app was bootstraped based on the template provided by [`vue create`](https://cli.vuejs.org/guide/creating-a-project.html#vue-create)
