# React Native App

## Requirements

- NodeJS 12.0.0 and above: [https://nodejs.org/en/](https://nodejs.org/en/).
- Yarn: [https://yarnpkg.com/](https://yarnpkg.com/).

## Dependencies

- Navigation: [React Navigation V6](https://reactnavigation.org/).
- State management: [Redux Toolkit](https://redux-toolkit.js.org/).

## Run project

- Clone project & install dependencies:

    ```bash
    git clone https://github.com/robinhuy/react-native-app.git
    cd react-native-app
    yarn install
    npx pod-install
    ```

- Config environment variables:

    ```bash
    cp .env.production .env.development
    ```

    Change value of `.env.development`

- Run ios:

    ```bash
    yarn ios
    ```

- Run android:

    ```bash
    yarn android
    ```

## Project structure

Source code in folder `app`.

- **assets**: Static files like fonts, images, ...
- **components**: Global re-usable Components.
- **models**: Data types.
- **screens**: Screen Components. Screen can have local components to split code.
- **navigation**: Navigation configuration.
- **services**: Connect APIs.
- **store**: Global state management.
- **utils**: Helper variables, functions.

Environment variables in `.env` file, using [react-native-config](https://github.com/luggit/react-native-config).

## VS Code Extensions

- Prettier - Code formatter
- ESLint
- TODO Highlight

## Code convention

- File + folder name using `snake-case`.
- Component name using `PascalCase`. Primary file is `index.tsx` & `styles.ts`. If component have child components, create sub folder for each child.
