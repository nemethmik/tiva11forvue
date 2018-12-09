# tiva11forvue
An experimental project for evaluating Vue CLI3/TypeScript/PWA for mobile business applications (SAP B1)
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
See [CLI 3](https://cli.vuejs.org/guide/creating-a-project.html#vue-create)
```
Vue CLI v3.2.1
? Target directory C:\Users\nemet\tiva11\tiva11forvue already exists. Pick an action: Merge
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, PWA, Router, Vuex, Linter, Unit
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript for auto-detected polyfills? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: TSLint
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Pick a unit testing solution: Mocha
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No

Successfully installed plugin: vue-cli-plugin-vuetify
? Choose a preset: Configure (advanced)
? Use a pre-made template? (will replace App.vue and HelloWorld.vue) Yes
? Use custom theme? No
? Use custom properties (CSS variables)? No
? Select icon font Material Icons
? Use fonts as a dependency (for Electron or offline)? No
? Use a-la-carte components? Yes
? Select locale English
```
### Files Updated and Changed after Adding Vuetify
.browserslistrc
     babel.config.js
     package-lock.json
     package.json
     postcss.config.js
     public/favicon.ico
     public/img/icons/android-chrome-192x192.png
     public/img/icons/android-chrome-512x512.png
     public/img/icons/apple-touch-icon-120x120.png
     public/img/icons/apple-touch-icon-152x152.png
     public/img/icons/apple-touch-icon-180x180.png
     public/img/icons/apple-touch-icon-60x60.png
     public/img/icons/apple-touch-icon-76x76.png
     public/img/icons/apple-touch-icon.png
     public/img/icons/favicon-16x16.png
     public/img/icons/favicon-32x32.png
     public/img/icons/msapplication-icon-144x144.png
     public/img/icons/mstile-150x150.png
     public/img/icons/safari-pinned-tab.svg
     public/index.html
     public/manifest.json
     public/robots.txt
     src/App.vue
     src/assets/logo.png
     src/assets/logo.svg
     src/components/HelloWorld.vue
     src/main.ts
     src/plugins/vuetify.ts
     src/registerServiceWorker.ts
     src/router.ts
     src/shims-tsx.d.ts
     src/shims-vue.d.ts
     src/store.ts
     src/views/About.vue
     src/views/Home.vue
     tests/unit/example.spec.ts
     tsconfig.json
     tslint.json
     .gitignore
     README.md

## Project NPM Script Commands
- npm install
- Compiles and hot-reloads for development: npm run serve
- Compiles and minifies for production: npm run build
- Run your tests: npm run test
- Lints and fixes files: npm run lint
- Run your unit tests: npm run test:unit


