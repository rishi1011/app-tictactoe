# Tic Tac Toe 
A simple tic tac toe game, created from react. The game entails two players, X and O, who take turns to mark spaces in a 3x3 grid. The player who succeeds in placing their marks in a diagonal, horizontal or vertical row is the winner.

# Table of Contents
1. Running locally
2. Tech stack
3. Mockups

# Running locally
1. Clone the repo
2. cd app-tictactoe
3. npm start

# Tech stack
1. react.js
2. github pages

# Mockups
1. Initial state
<img width="1792" alt="Screenshot 2021-07-29 at 11 33 29 PM" src="https://user-images.githubusercontent.com/47945265/127542701-357bc63a-7576-4371-a552-60195ef1cada.png">

2. Final result
<img width="1792" alt="Screenshot 2021-07-29 at 9 35 00 PM" src="https://user-images.githubusercontent.com/47945265/127526310-a4a3fac9-3a99-4fe6-9795-357c025891ef.png">
<img width="1792" alt="Screenshot 2021-07-29 at 11 29 14 PM" src="https://user-images.githubusercontent.com/47945265/127542076-86cd9870-c952-48d4-a3da-ed01a683f4bc.png">
<img width="1792" alt="Screenshot 2021-07-29 at 11 30 54 PM" src="https://user-images.githubusercontent.com/47945265/127542319-4797a2c7-e6dd-481f-9e57-d1c11bddd525.png">

3. After reset
<img width="1792" alt="Screenshot 2021-07-30 at 4 11 55 PM" src="https://user-images.githubusercontent.com/47945265/127641699-9df6e42e-af6a-4396-922c-1681148b2988.png">

4. Travel history:
The list of elements under moves represent your travel history. Clicking the button will take you to your respective move. This also ensures that if we “go back in time” and then make a new move from that point, we throw away all the “future” history that would now become incorrect.

<img width="1792" alt="Screenshot 2021-07-29 at 11 37 06 PM" src="https://user-images.githubusercontent.com/47945265/127543187-6e753a8d-d31d-4b6a-998f-6aa424e8e6c5.png">
<img width="1792" alt="Screenshot 2021-07-29 at 11 37 37 PM" src="https://user-images.githubusercontent.com/47945265/127543259-5c70d3b8-be45-4e7b-b265-345fa7e7e14e.png">
<img width="1792" alt="Screenshot 2021-07-29 at 11 38 27 PM" src="https://user-images.githubusercontent.com/47945265/127543406-5bafba8e-39e4-44f5-961b-b9af849048ae.png">
New move from step 3, "O", location [2][0],
<img width="1792" alt="Screenshot 2021-07-29 at 11 38 55 PM" src="https://user-images.githubusercontent.com/47945265/127543481-11d2b506-0ff0-4268-b338-3080e2f81de1.png">

5. Descending sort:
The toggle button sorts the moves list descending when its enabled.
<img width="1792" alt="Screenshot 2021-07-29 at 11 42 15 PM" src="https://user-images.githubusercontent.com/47945265/127543947-8f3b61a4-d0ed-4a39-9509-d58f850efcef.png">



# Design
![Screenshot 2021-07-29 at 11 56 40 PM](https://user-images.githubusercontent.com/47945265/127546108-fc7c30f9-befd-4af2-ada0-124e7103b09a.png)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
