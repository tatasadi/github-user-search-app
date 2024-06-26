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
  - [Project Highlights](#project-highlights)
    - [Theming with `next-themes`](#theming-with-next-themes)
    - [Secure API Calls with Server Actions](#secure-api-calls-with-server-actions)
    - [Data Fetching with React Query](#data-fetching-with-react-query)
    - [Form Handling with React-Hook-Form](#form-handling-with-react-hook-form)
    - [UI Component Library Integration](#ui-component-library-integration)
    - [Accessibility and User Experience](#accessibility-and-user-experience)
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
![](https://img.shields.io/badge/React%20hook%20form-fff?style=for-the-badge&logo=react-hook-form&logoColor=fff&color=ec5990)
![](https://img.shields.io/badge/React%20Query-fff?style=for-the-badge&logo=react-query&logoColor=fff&color=f73f51)

### Code Quality with

![](https://img.shields.io/badge/eslint-fff?style=for-the-badge&logo=eslint&logoColor=fff&color=4930bd)
![](https://img.shields.io/badge/prettier-fff?style=for-the-badge&logo=prettier&logoColor=000&color=f3ae42)

### Implementation time

This challenge was completed over a span of 7 hours.

## Project Highlights

This project showcases a modern web application built with **Next.js**, integrating several advanced features and best practices in web development. Below are the key highlights and technologies used:

### Theming with `next-themes`

- **Dynamic Theming**: Implemented dynamic theming capabilities using `next-themes`, allowing users to switch between light and dark modes seamlessly. This integration enhances user experience and accessibility by respecting system preferences and providing theme toggle options.

### Secure API Calls with Server Actions

- **Server-Side Authentication**: Utilized Next.js server actions to securely call the GitHub API, ensuring sensitive credentials (access tokens) are managed server-side and never exposed to the client. This approach uses environment variables to safely store and access API tokens.
- **Enhanced Security and Performance**: By handling API requests on the server, the application enhances overall security and leverages server-side rendering for improved performance.

### Data Fetching with React Query

- **State Management for Fetching**: Integrated React Query to manage the fetching, caching, and updating of server state. This includes:
  - **Loading States**: React Query’s loading states are used to provide real-time feedback to the user, improving the interactive experience.
  - **Error Handling**: Systematic error handling strategies to gracefully manage and display errors to users when API calls fail.
  - **Data Management**: Efficient data synchronization and UI state updates without extensive boilerplate.

### Form Handling with React-Hook-Form

- **Efficient Form Management**: Leveraged `react-hook-form` to handle forms, which simplifies form validation and submission while reducing re-renders and improving performance.
- **Validation**: Built-in validation mechanisms to ensure data integrity before submitting user input to the server.

### UI Component Library Integration

- **Reusable UI Components**: Utilized Shadcn’s UI component library, which builds on top of Radix UI. This choice promotes accessibility and flexibility, providing robust components like buttons, inputs, and skeletons.
- **Skeleton Loading Screens**: Implemented skeleton screens during data loading phases to enhance perceived performance and keep users informed about the loading state.

### Accessibility and User Experience

- **Radix UI Foundation**: The use of Radix UI components ensures that accessibility is a core feature, with components adhering to WAI-ARIA standards.
- **Responsive and Interactive UI**: Designed a responsive layout that adjusts to various device screens and provides interactive feedback based on user actions.

## Author

- Website - [Ehsan Tatasadi](https://ehsan.tatasadi.com)
- Frontend Mentor - [@tatasadi](https://www.frontendmentor.io/profile/tatasadi)
- GitHub - [@tatasadi](https://github.com/tatasadi)
- Linkedin -
  [Ehsan Tatasadi](https://www.linkedin.com/in/ehsan-tatasadi-2161a433)
- Twitter - [@etatasadi](https://twitter.com/etatasadi)
