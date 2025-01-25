
# Rick and Morty

This app was created to explore the current status of the characters from the Rick & Morty show. It utilizes a public API to fetch information about the characters' situations. The API can be found at [rickandmortyapi.com](https://rickandmortyapi.com/). For detailed information, please refer to the Docs section on the website.

## 📸 Screenshot

![Screenshot 1](https://i.imgur.com/Ic1dtvp.png)


## ✨ Features

- You can filter your search for characters by:
- Character name.
- Alive characters.
- Deceased characters.
- Each character is labeled with their species, last known location, and first appearance.
- There's an option to display all characters by clicking a specific button.
- Characters are loaded dynamically as you scroll down the page, using infinite scroll.

👀 The application has been deployed using GitHub Pages and can be viewer by [clicking here](https://JCJetz.github.io/Ejercicios_y_proyectos_Bootcamp/proyectos/rick_and_morty/)


## 🛠️ Technologies Used

- React 18.1.0
- Bootstrap for styling the interface.
- CSS for custom styles.
- `react-infinite-scroll-component` for implementing infinite scroll.

## 🔑 Key Code Features

1. **Character State Management**: The `useState` hook is used to create a variable called `characters` with a corresponding setter function `setCharacters` to manage its state. The initial state of `characters` is an empty array.

2. **API Call with `useEffect`**: The `useEffect` hook is used to make an API call when the application mounts for the first time. The API call is executed in the `fetchCharacters` function, and the results are stored in the `characters` state using `setCharacters`.

3. **Infinite Scroll**: The `InfiniteScroll` component from the `react-infinite-scroll-component` library is used to load characters as the user scrolls down the page. The `reFetch` function is triggered to load more data, fetching the next set of characters from the API. The `Characters` component is rendered inside `InfiniteScroll` to display the characters as they are loaded.

4. **Character Filtering**: Various functions are used to filter characters based on different categories. The `filterAlive` and `filterDead` functions filter by alive and deceased characters, respectively, while the `showAll` and `filterByName` functions display all characters or filter by name, respectively. The `filteredchars` state is used to store the filtered characters.

5. **Navigation Bar**: The `Navbar` component is used to display a navigation bar at the top of the page with buttons for filtering alive, deceased characters, and showing all characters.

6. **Conditional Rendering**: The ternary operator is used to render the `Characters` component with filtered characters if any are available; otherwise, all characters are displayed.


## 🚧 Installation

Follow these steps to install and run the application locally:

1. Clone the repository using the following command:

   ```
   git clone https://github.com/your_username/rick_and_morty.git
   ```

2. Navigate to the project folder:

   ```
   cd rick_and_morty
   ```

3. Install the necessary dependencies:

   ```
   npm install
   ```

4. Start the application:

   ```
   npm start
   ```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
For more information, see the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

It will copy all the configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) right into your project, giving you full control over them. All commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don’t have to use `eject`. The curated feature set is suitable for small and medium deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn't be as useful if you couldn’t customize it when needed.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

Moved to: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

Moved to: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

Moved to: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

Moved to: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

Moved to: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

Moved to: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



