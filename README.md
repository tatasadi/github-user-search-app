# GitHub user search app

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6).

## Table of contents

- [GitHub user search app](#github-user-search-app)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
  - [The challenge](#the-challenge)
    - [Expected behaviour](#expected-behaviour)
    - [Screenshots](#screenshots)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Code Quality with](#code-quality-with)
    - [Implementation time](#implementation-time)
  - [Author](#author)

## Overview

## The challenge

The challenge is to build out this GitHub user search app using the [GitHub users API](https://docs.github.com/en/rest/reference/users#get-a-user) and get it looking as close to the design as possible.

The users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

The GitHub users API endpoint is `https://api.github.com/users/:username`. So, if you wanted to search for the Octocat profile, you'd be able to make a request to `https://api.github.com/users/octocat`.

### Expected behaviour

- On first load, show the profile information for Octocat.
- Display an error message (as shown in the design) if no user is found when a new search is made.
- If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
- If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
- If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
- Website, twitter, and company information should all be links to those resources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.

### Screenshots

![](./preview.jpg)

### Links

- Solution URL:
  [https://github.com/tatasadi/github-user-search-app](https://github.com/tatasadi/github-user-search-app)
- Live Site URL:
  [https://github-user-search-app-ta.vercel.app](https://github-user-search-app-ta.vercel.app)

## My process

### Built with

![](https://img.shields.io/badge/HTML5-fff?style=for-the-badge&logo=HTML5&logoColor=fff&color=E34F26)
![](https://img.shields.io/badge/CSS3-fff?style=for-the-badge&logo=CSS3&logoColor=fff&color=29a4d9)
![](https://img.shields.io/badge/TypeScript-fff?style=for-the-badge&logo=TypeScript&logoColor=fff&color=2f74c0)
![](https://img.shields.io/badge/git-fff?style=for-the-badge&logo=git&logoColor=fff&color=e94e31)
![](https://img.shields.io/badge/React-fff?style=for-the-badge&logo=React&logoColor=000&color=5ed3f3)
![](https://img.shields.io/badge/Next.JS-fff?style=for-the-badge&logo=next.js&logoColor=fff&color=000)
![](https://img.shields.io/badge/tailwindcss-fff?style=for-the-badge&logo=tailwindcss&logoColor=fff&color=15b8c5)
![](https://img.shields.io/badge/React%20Icons-fff?style=for-the-badge&logo=react&logoColor=fff&color=e92a6b)
![](https://img.shields.io/badge/Zod-fff?style=for-the-badge&logo=zod&logoColor=fff&color=3068b7)
![](https://img.shields.io/badge/React%20Query-fff?style=for-the-badge&logo=react-query&logoColor=fff&color=f73f51)
![](https://img.shields.io/badge/Storybook-fff?style=for-the-badge&logo=storybook&logoColor=fff&color=ff4785)

### Code Quality with

![](https://img.shields.io/badge/eslint-fff?style=for-the-badge&logo=eslint&logoColor=fff&color=4930bd)
![](https://img.shields.io/badge/prettier-fff?style=for-the-badge&logo=prettier&logoColor=000&color=f3ae42)

### Implementation time

This challenge was completed over a span of 6 hours.

## Author

- Website - [Ehsan Tatasadi](https://ehsan.tatasadi.com)
- Frontend Mentor - [@tatasadi](https://www.frontendmentor.io/profile/tatasadi)
- GitHub - [@tatasadi](https://github.com/tatasadi)
- Linkedin -
  [Ehsan Tatasadi](https://www.linkedin.com/in/ehsan-tatasadi-2161a433)
- Twitter - [@etatasadi](https://twitter.com/etatasadi)
