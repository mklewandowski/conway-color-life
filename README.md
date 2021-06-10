Conway Color Life is a cellular automaton variation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), a collection of cells arranged in a grid that change over time based on a set of simple rules.
 - A living cell with less than 2 neighbors dies
 - A living cell with 2 or 3 neighbors lives
 - A living cell with more than 3 neighbors dies
 - A dead cell with 3 living neighbors becomes alive
 - With each generation that a cell survives, the cell ages
 - Cells change color as they age based on the selected color theme

Conway Color Life is hosted on a GitHub Page at https://mklewandowski.github.io/conway-color-life/index.html


## Run Locally
- clone GitHub repo
- run `yarn install`
- run `yarn start`

## Build and Deploy to GitHub Page
Before we can deploy to a GitHub page, we first do the following setup (from [https://github.com/gitname/react-gh-pages](https://github.com/gitname/react-gh-pages)):
- install `gh-pages`: `npm install gh-pages --save-dev`
- add `homepage` property to `package.json`: `"homepage": "http://mklewandowski.github.io/conway-color-life",`
- add `deploy` and `predeploy` properties to the `scripts` property of `package.json`

To deploy the current version:
- run `npm run deploy`

## Creation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
