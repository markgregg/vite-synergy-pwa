<p align="center">
  <br>
  <img width="400" src="./public/logo.png" alt="logo of viterts repository">
  <br>
  <br>
</p>

# Vite Synergy PWA

## Features

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/) - more strict
- [React Router](https://reactrouter.com/) - with lazy-loading / code-splitting use case
- [Redux Toolkit](https://redux-toolkit.js.org/) - self-explanatory 
- [redux-persist](https://github.com/rt2zz/redux-persist) - persist state across page changes
- [Jest](https://jestjs.io/) with [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint](https://tailwindcss.com/) - Linting
- [Prettier](https://prettier.io/) - with editor configuration [file](./.vscode/settings.json)
- [SASS](https://sass-lang.com/) with [CSS Modules](https://github.com/css-modules/css-modules)
- [Synergy](https://github.com/markgregg/pwa-synergy-api) - Naive PWA framework
- [Umami](https://umami.is/docs/) - Open source Analytics


## Installation

```bash
npx degit markgregg/vite-synergy-pwa my-synergy-pwa
cd my-synergy-pwa
yarn # If you don't have yarn installed, run: npm install -g yarn
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Rename `name` and `author` fields in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] update manifest file in `public`
- [ ] Change the icon and logo in `public`
- [ ] Change the title in `index.html`
- [ ] Remove example components
- [ ] Modify the readme for your app

## Available Scripts

In the project directory, you can run:

##### `yarn dev`

##### `yarn build`

##### `yarn preview`

##### `yarn lint`

##### `yarn lint:fix`

##### `yarn format`

##### `yarn prepare`

##### `yarn test`

## Development

### Folder Structure

Folder structure should look like this;

```
src/
├── App.test.tsx
├── App.tsx
├── index.tsx
├── setupTests.ts
├── test-utils.ts
├── vite-env.d.ts
├── assets
│   └── %icon%.svg
├── components
│   ├── partials
│   │   └── %ModuleName%
│   │       ├── %ParticalName%.tsx
│   │       ├── %ParticalName%.test.tsx
│   │       └── %ParticalName%.scss
│   └── shareds
│       └── %ParticalName%
│           ├── %ParticalName%.tsx
│           ├── %ParticalName%.test.tsx
│           └── %ParticalName%.scss
├── Configuration
│   ├── request.ts
├── store
│   ├── slices
│   │   ├── %module-name%.slice.ts
│   │   └── %module-name%.slice.ts
│   ├── hooks.ts
│   └── index.ts
└── types
    ├── global.scss
    └── vendors.scss

```

### State Management

Redux, a state management library, was used for state management in the project. It is divided into redux slices to avoid complexity, ensure maintainability, and divide into domains. Use store (redux) for your global states, states that you will use at many different points, states that you will access and manage remotely.

Go to the `src/store/slices` folder. Open or create the slice file of the module whose state you will manage. If you have created a new slice, you must define it in the `src/store/index.ts` file.

### Style Management

For global styling operations, there are global sass files under the `src/styles` folder. The `vendors.scss` you will use to add your dependencies and `global.scss` for your global styles are located here. You can also create global sass files here that you want to import in other sass files like `shareds.scss` or `variables.scss`.

Components own style files should be located next to the `%componentname%.tsx` file like as `src/routes/Episode/List/List.scss`

### Linter / Eslint

The project has a strong linter configuration to ensure consistency and maintainability. It generally follows the airbnb and prettier configuration.

### Component Structure

All components in the project are created as functional component. Continuity should be ensured by not using class components unless needed.

