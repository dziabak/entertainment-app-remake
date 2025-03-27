# Frontend Mentor - Entertainment Web App

## Table of contents

- [Overview](#overview)
  - [Project features](#project-features)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

**Live Site URL: [Entertainment Web App on Netlify](https://entertainment-app-gd.netlify.app)**

Welcome to my multi-page Entertainment Web App! This project, based on [Frontend Mentor - Entertainment Web App](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X) challenge, showcases my skills in working with JSON data, implementing routing, managing state, and incorporating search functionality.

In this project, I successfully created a lightweight Netflix clone that closely mirrors the provided design. Utilizing React toolset, I've transformed this challenge into a tangible demonstration of my frontend development skills, providing a comprehensive platform for users. The application incorporates Firebase database for data fetching and data mutation for the bookmarking feature.

### Project features

- **Bookmark Management:** Easily add or remove bookmarks for movies and TV series, offering users quick content curation.
- **Data fetching and mutation using Firebase:** Data is fetched and mutated using Firebase. All changes to bookmarks' state is saved in Firebase as well.
- **Dynamic Search Functionality:** Search feature across all pages (including special conditions for bookmarked content) enables seamless discovery of relevant movies and shows.
- **Effortless Navigation:** Seamless movement between Home, Movies, TV Series, and Bookmarked Shows pages for a user-friendly experience.
- **Responsive Design:** Layout adapts gracefully to diverse screen sizes for optimal viewing across devices.
- **Interactive Elements:** Hover states have been implemented for all interactive elements throughout the site.
- **E2E automated testing**: Test suites designed and programmed in Playwright to test core features.

### Links

- Live Site URL: [Entertainment Web App on Netlify](https://entertainment-app-gd.netlify.app)

## My process

### Built with

- React
- React Query
- TypeScript
- Tailwind
- Firebase
- Playwright (E2E automated testing)
- Vite and Netlify (build and deployment)

### What I learned

- **Data Fetching and State Management:** Mastering data fetching and state management proved vital for optimal user experience. Prioritizing loading indicators and error handling during data retrieval enhanced my application's resilience. Testing on slow networks provided valuable insights, driving continuous improvement for a seamless user experience.

- **Custom Hooks for Efficiency:** Embracing custom hooks streamlined my project. Utilizing them for search functionality and complex logic organization simplified component structures. This separation of concerns enhanced code clarity, maintainability, and scalability. Comfort with custom hooks empowered modular development and efficient code reuse.

- **E2E automated testing in Playwright**: This project allowed me to design, write and implement robust testing suites to verify core features of the application, including navigation, displaying data, searching functionality and simulating sending requests with new data (bookmarking).

### Continued development

- **Carousel Component Challenges:** Implementing a carousel component, a common pattern in web design, posed challenges due to time constraints and specific design requirements. Opting for a third-party solution without relying on a larger library led to workaround solutions. To ensure production readiness, future considerations may involve integrating a more robust and established carousel component from larger component library or investing time in crafting a custom one.

- **Unexplored Full-Stack Potential:** Although the challenge presented an opportunity for a full-stack application with registration and login screens, my project focuses solely on data mutation for bookmarking. Future development could explore implementing the full user workflow, incorporating registration, login, and additional pages. This expansion would provide a comprehensive and enriched user experience.

## Author

- Website - [My personal portfolio page](https://gd-portfolio.vercel.app/)
