# tiva11forvue
An experimental project for evaluating Vue CLI3/TypeScript/PWA for mobile business applications (SAP B1)
## No Type Verification in Vue Templates
It was a shocking experience that the most important part of Vue, where the UI is actually constructed, in the template sections, there is no type checking at all. Type checking is applied only in the script sections. I have watched all TypeScript/Vue videos specifically for this issue, and unfortunately, my observation was right. In React JSX you will have full support for type validation. When I worked with Flow, it gave full-scope coverage. The only problem with Flow is the terrby slow type checking process. In a Vue/TS type checking is part of the compilation process and is near instantaneous, like with a real compiler. So, maybe the real solution for my requirements is to experiment with React/TS. I found a number of really promising guidelines:
- [Material UI Admin (anything/anything)](https://material-ui-admin.herokuapp.com/account/login?redirect=%2F) [A boilerplate for React using Typescript, Material UI and Redux, React Router](https://github.com/goemen/react-material-ui-typescript)
- [Material UI Guide for TypeScript](https://material-ui.com/guides/typescript/)
- [Material UI Type Definitions on NPM] (https://www.npmjs.com/package/@types/material-ui)  
- [Best Practices for Using TypeScript with React](https://medium.freecodecamp.org/effective-use-of-typescript-with-react-3a1389b6072a)
- [How to improve the build speed in React-Typescript, when using Material UI](https://dev.to/janpauldahlke/how-to-improve-material-ui-speed-in-react-typescript-1199)
- [Microsoft TypeScript React Starter with create-react-app my-app --scripts-version=react-scripts-ts](https://github.com/Microsoft/TypeScript-React-Starter)
Actually, I am happy that I don't have to jump over to Vue, not because it's not a brilliant tool, but because I've spent so much time on React and its ecosystem. 
So I'll put this project on halt now, and start a new one with React/Redux/Material-UI/TypeScript. 

## Motivation and Project Objectives
This is another episode in a series of evaluating a number of technologies, tools, toolchains, programming languages, frameworks. So far I had hands on experience on developing C#/Xamarin/Forms, native Java/Android both mobile/tablet and WearOS with Android Studio. Then I started with Flutter on a Mac, it was really brilliant, but because of its lack of support for WearOS and desktop, I (temporarily) stopped working on Flutter. Then, I started evaluating JavaScript/Web with React, Redux, Apollo GraphQL, Flow. I picked React because potentially it has the option to switch over to React Native. To my surprise, JavaScript is mature for business applications, but without a type system, it's pretty unusable for any maintainable projects; Design-1st is a must, too.
Flow integration with React is far from my expectations; the Material Design UI libraries for React are lacking, too. After learning Progressive Web Application (PWA) React Native is not really an interesting option any more. A Vue/TypeScript/PWA could be absolutely excellent. In the meantime Flutter 1.0 was announced, still it has the shortcomings. A TypeScript powered JavaScript toolchain would be perfect both for client (Vue/PWA) as well as for the server. TypeScript is directly supported in Firebase Functions, too.
So, when I watched [Vue & TypeScript Up and Running - Daniel Rosenwasser at VueConf.US](https://www.youtube.com/watch?v=wDYS6FIXkAc)
[Vue CLI 3.0 Quick Look Now With TypeScript](https://www.youtube.com/watch?v=UXZjyG87fjs) is to be watched fully.
Net Ninja really loves Vue, too; his [Vue CLI 3 Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iCKx06qSncuvEPZ7x1UnKD) doesn't cover Type Script and PWA, but quite decent. 
[Vue CLI3 Tutorial #5 - Plugins](https://www.youtube.com/watch?v=taLKQfoS87I&index=6&list=PL4cUxeGkcC9iCKx06qSncuvEPZ7x1UnKD) from this series shows how easy to use Vuetify as a plugin. This was the moment when I decided Vue must be the perfect tool for my projects: TypeScript, a decent UI framework, PWA all integrated into **Vue CLI 3**. 
He has a comprehensive tutorial on [Vuetify](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5) He as Shaun Pelling has an excellent course on Udemy: [Build Web Apps with Vue JS 2 & Firebase](https://www.udemy.com/build-web-apps-with-vuejs-firebase/). It is not TypeScript but uses quite recent version of Vue. SP is not really a professional developer, actually very few youtubers are, but absolutely an excellent instructor with a very good sense of picking the best tools for web development.
## Installation and Project Setup
See [Vue Installation](https://vuejs.org/v2/guide/installation.html#CLI)
- npm install -g @vue/cli
- vue create tiva11forvue
- vue add vuetify


### Options Used when Project was Created and Vuetify Installed
For detailed instructions see [CLI 3](https://cli.vuejs.org/guide/creating-a-project.html#vue-create)

I had to set No to "Use class-style component syntax?" to avoid a [compilation error: Unable to resolve signature of class decorator when called as an expression](https://github.com/vuejs/vue-class-component/issues/294). So, I cannot use decorators until this error is not fixed.

```
Vue CLI v3.2.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, PWA, Router, Vuex
? Use class-style component syntax? No
? Use Babel alongside TypeScript for auto-detected polyfills? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No

Successfully installed plugin: vue-cli-plugin-vuetify
? Choose a preset: Default (recommended)
```
To avoid the "ERROR in C:/Users/nemet/tiva11/tiva11forvue/src/plugins/vuetify.ts 2:21 Could not find a declaration file for module vuetify/lib" I had to modify the tsconfig.json as suggested in [No typings for importing "A La Carte" components #3943](https://github.com/vuetifyjs/vuetify/issues/3943#issuecomment-442434245) 
```
  "include": [
    ...,
    "node_modules/vuetify/types", // add this one
  ],
  "exclude": [
    "node_modules/^(?!vuetify/types).*$" // change the default exclude rule to this
  ]
```

## Project NPM Script Commands
- npm install
- Compiles and hot-reloads for development: npm run serve
- Compiles and minifies for production: npm run build
- Run your tests: npm run test
- Lints and fixes files: npm run lint
- Run your unit tests: npm run test:unit

## Sample Project for Vuetify (Vuetifyninja Branch)
This is a TypeScrip remake of [Vuetify Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5).
When Vuetify was added as a plugin, a **plugins** directory was created under src. Since this is a TS project, a vuetify.ts file was created by CLI3. The iconfont: "md" is a plugin option when Vuetify was registered with Vue.use. The names of Vuetify template components starts with v-. 
Vue uses the term **props** exactly the same way as React. The prop **class** is allowed in Vue templates, and it refers to CSS class as normal in HTML, unlike in React where you had to use className.
The **v-toolbar app** doesn't scroll up off the screen.
The [section on color](https://vuetifyjs.com/en/style/colors#introduction) on Vuetify gives very nice palettes. For texts **display-4** class is the largest on h1 element.
The MD icon names can be found on https://material.io/tools/icons/

