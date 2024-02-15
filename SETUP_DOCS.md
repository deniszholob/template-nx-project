# Set up with NX

Generate new NX Project

- `npx create-nx-workspace@latest`

Install Storybook

- `npm install -D @nx/storybook`
- `npx nx g @nx/angular:storybook-configuration template-nx-project --tsConfiguration=true`
- `npx nx g @nx/angular:stories --project=template-nx-project`

Install eslint plugins

- `npm i --save-dev              eslint-plugin-simple-import-sort eslint-plugin-unused-imports prettier-plugin-organize-attributes prettier-plugin-tailwindcs eslint-plugin-storybook`
- `npm i --save-dev --save-exact eslint-plugin-simple-import-sort eslint-plugin-unused-imports prettier-plugin-organize-attributes`

Firebase

- `npm install firebase-tools --save-dev`
- https://firebase.google.com/docs/cli

NG Service Worker

- `ng add @angular/pwa --project  grocerry-list`
- `npm i @angular/pwa && npx nx g @angular/pwa:ng-add`
- `npm i --save-dev http-server`

- https://angular.io/guide/service-worker-intro
- https://angular.io/guide/service-worker-getting-started

## npm

- NX
  - `npx create-nx-workspace@latest template-nx-project`
  - https://nx.dev/getting-started/installation
  - https://nx.dev/angular-standalone-tutorial/1-code-generation#angular-standalone-tutorial---part-1:-code-generation
- Jest: Included in NX
  - `npm install ng-mocks --save-dev`
- Storybook
  - https://nx.dev/packages/storybook/documents/overview
  - https://nx.dev/packages/storybook/documents/overview-angular
  - https://nx.dev/recipes/storybook/one-storybook-for-all
- Storybook Compodoc: https://nx.dev/packages/storybook/documents/angular-storybook-compodoc
- Eslint: Included in NX
- Prettier + Husky + lint-staged:
  - Prettier included in NX
  - Git Hooks: https://prettier.io/docs/en/install.html#git-hooks
- Tailwind
  - https://nx.dev/recipes/other/using-tailwind-css-with-angular-projects#using-tailwind-css-with-angular-projects
  - https://blog.nrwl.io/set-up-tailwind-css-with-angular-in-an-nx-workspace-6f039a0f4479
  - https://nx.dev/packages/angular/generators/setup-tailwind
- Tailwind prettier class sorter: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
- Additional Packages

```sh
eslint-config-prettier?
eslint-plugin-simple-import-sort
eslint-plugin-storybook
eslint-plugin-unused-imports
prettier-plugin-organize-attributes
```

## Add vscode plugins to recommendations

- .editorconfig
- toggle
- angular files generator
- angular stuff

## structure

- global styles
- storybook config
- storybook lib if libs structure, top level if not
- components lib/dir
- layout lib/dir
- pages lib/dir - if more than one
- utilities lib/dir

# Alt: With Angular CLI

- https://github.com/angular/angular-cli/wiki/new
- `ng new my-app-name --commit=false --skip-install=true --skip-git=true --minimal=true --style=scss --strict=true --routing=true`
