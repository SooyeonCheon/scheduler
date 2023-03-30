# Interview Scheduler

## Project Description

Interview Scheduler is a SPA (Single Page Application) for tracking students interviews built with the latest tools and techniques for optimized user experience. The App utilizes React built-in and custom hooks and allows users to add, edit and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. For quality assurance, the project follows best practices of TDD (Test Driven Development), where individual Components are tested in isolation as well as End-to-End testing is performed.

## Screenshots

By selecting a weekday on the left panel, a user can see booked appointments and available slots for each day.
A user can book an interview in an empty appointment slot.
A user can edit the details of an existing interview.

A user is presented with a confirmation when they attempt to cancel an interview.

## Setup

Install dependencies with `npm install`.

Dependencies:
  - axios
  - classnames
  - normalize.css
  - react
  - react-dom
  - react-scripts
  - babel/core
  - storybook/addon-actions
  - storybook/addon-backgrounds
  - storybook/addon-links
  - storybook/addons
  - storybook/react
  - testing-library/jest-dom
  - testing-library/react
  - testing-library/react-hooks
  -  babel-loader
  -  prop-types
  -  react-test-renderer
  -  sass

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
