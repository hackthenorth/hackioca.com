# Hackioca by Hack the North
![cover photo](https://i.imgur.com/VeMTQda.png)
[![Netlify Status](https://api.netlify.com/api/v1/badges/6dba1582-bac7-41e7-bfea-4ca0548f8bd3/deploy-status)](https://app.netlify.com/sites/hackioca/deploys)

### Introduction

[Hackioca](https://hackioca.com) was built as an April Fools' 2019 joke by Hack the North. Feel free to poke around or open an issue to ask a question!

### Notable features

- Interactive "Build-your-own-boba" hero section (change flavors and toppings on cup)
- Background color and graphics change based on the flavor and topping selected
- Smooth page scrolling with navbar and footer links
- About, schedule, judges, workshops, activities, sponsors, prizes and FAQ sections

### How it was built

- [React](https://reactjs.org/) to build simple yet powerful UI components
- [Create React App](https://facebook.github.io/create-react-app/) to bootstrap and build the app
- [Netlify](https://www.netlify.com/) to serve live pull request branch previews and host [hackioca.com](https://hackioca.com)
- [TypeScript](https://www.typescriptlang.org/) to write typesafe code
- [Styled Components](https://www.styled-components.com/) to style our React components
- [North](https://www.npmjs.com/package/@hackthenorth/north) to test-run our in-development, re-usable, themeable component library (open source coming soon!)

### Playing around locally

1. Install git, node and npm

2. Clone the repo and navigate into it
```
$ git clone https://github.com/hackathon/hackioca.com.git
$ cd hackioca.com
```

3. Install dependencies
```
$ npm install
```

4. Start the dev server
```
$ npm start
```

5. It should open automatically, but if not access the site at: http://localhost:3000/
