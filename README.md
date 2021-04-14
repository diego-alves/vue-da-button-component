# Vue DA Button Component

This repo has an Vue Single Page Component, created using the [this](https://github.com/team-innovation/vue-sfc-rollup) rollup.

## How this project was created.

1. Install [vue-sfc-rollup](https://www.npmjs.com/package/vue-sfc-rollup) globally

```shell
npm yarn global add vue-sfc-rollup
```

2. Initiate sfc project 

```shell
sfc-init
```

3. Run, Build, Publish

```shell
# Fill in prompts
cd path/to/my-component-or-lib
yarn install

# Do dev stuff
yarn serve

# Run build process
yarn build

# Publish
yarn login
yarn publish
```

## How to use this component

1. Install the component with npm or yarn

```shell
npm i vue-da-button-component
```

2. Import on your .vue component

```vue
<template>
<!-- use the component on template -->
<CustomButton text="Click me!!!" /> 
</template>

<script>
// import the lib here
import CustomButton from 'vue-da-button-component'

export default {
  name: 'App',
  components: { // register component
    CustomButton
  }
}
</script>
```