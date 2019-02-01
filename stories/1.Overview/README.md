# Getting started with Avecomponents 🚀

Trunx is an UI lib collection of React components built on [Material-UI](https://material-ui.com), [React-dates](http://airbnb.io/react-dates) and [StyledComponets](https://www.styled-components.com/). Gitlab repo here: https://gitlab... .

### 🛠 Installation

Use yarn to install Avecomponents package. Please note react >= 16.3.0 e react-dom >= 16.3.0 is required as a peer dependency.

```sh
$ yarn add @lksilva/cleancomponents
```

Avecomponents was designed with the Roboto font in mind. So be sure to follow these instructions. For instance, via Google Web Fonts:

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">


### :smile: Usage

```js
import { Button } from "avecomponents";
render() {
  return (
    <Button>Button</Button>
  );
}
```

### 👨‍💻 Running in dev

We are using Storybook, that is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

```sh
$ yarn storybook
```