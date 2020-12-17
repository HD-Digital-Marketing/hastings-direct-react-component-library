# react-component-library

**You must create a test with every component that is built**

### First time install
1. First pull down the repo `git clone https://github.com/HD-Digital-Marketing/hastings-direct-react-component-library.git`
2. Checkout the development branch
3. Create a new feature branch `feature/your-new-branch`
4. Open terminal and run `npm install`

### Creating a component
1. Create a new directory within the `components/atoms | components/molecules` directory. Using the name of the component as the folder name.
2. Create a new js file within the new folder
3. The naming convention should be the same as the current components. Using a capital letter on the first character `atoms/button/Button` or `molecules/panel/Panel`.
4. Create a new SCSS file within the folder - using the same name again.
5. Follow the documentation on [reactjs.org](https://reactjs.org/) for more information on building React components.

### Creating a test
1. Create a new js file within the component directory `components/atoms/button/`
2. The name of the file should include the `.test` name. `Button.test.js`
3. Follow the documentation on the [Jest website](https://jestjs.io/docs/en/tutorial-react) for more information on how to test React using Jest.

### Running a test
To run Jest locally
```shell script
npm run test
```

### Versioning
To keep versioning synced across the design system and component library we should always look to follow the same versioning. The minor version should correlate with how many components we have. For example, if we had 16 components then the version number should be `1.16.x`

When creating a new component update the minor version and push to git
```shell script
npm version minor
# 1.0.3 -> 1.2.0
```
When updating a component or fixing a component update the patch version and push to git
```shell script
npm version patch
# 1.0.3 -> 1.0.4
```

### Global SCSS
This should be added to the `src/scss` directory and webpack configured to output a global stylesheet. 