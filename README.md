### What is the purpuse of this repo?

This repo shows a basic architecture of a React app.
I am aware that there are many ways to design and structure and app, but I think the one portrayed here is some of the cleanest.

### How should the content of this app should be approached?

This is a very simple and dumb app. There are two main features, a counter and a todos creator.

Additionally and just for fun, I took the time to implement some minor web3 functionality. I was just trying to get an overall understanding of how a basic dApp might work.

The main focus should be on the way I decided to **structure the application**, rather than on functionality.

### What technologies are being used?

This is a React app create with create-react-app.
As far as I am concern, a modern React app should use both **Typescript and Scss**.

In the React ecosystem there are many useful libraries but here I am only using **react-router-dom** and **material-ui** (more about this one later).

I could have used **Redux** and its complementary libraries **redux-thunk, etc** but since I am focusing on architecture here it would be a bit overkill a too much boilerplate.

Lastly, I would like to point out the use of **storybook** that would allow us to share components accross different applications.

### The looks

I am using **material-ui** but could have used **bootstrap** or any other component based library. I haven't because I think that with Material there's a perfect balance between functionality, customization and design, perfect for business oriented applications.

## The architecture

I have chosen to tackle three of the main problems I have seen with big applications or scaling smaller ones

Single responsability principle: I think that a clear distinction should be made between functional components (those that contain the business logic) and presentational components (those that will render data in the client). Ideally, API calls and other data based operations should be handled by **contexts** or **reducers** (maybe **React Query** ??), a **page** should be the one handling the business logic, its **children** should render the data passed via props.

<img alt="Single responsability" class="cf mi mj" src="https://miro.medium.com/max/1400/1*UY-BQhUAfNciHI1iAHfwXg.png" width="700" height="395">

Smaller components are more readable and easier to debug. Smaller problems(components) are easier to handle than bigger ones. As the application grows it migth be interesting to think of microservices (**Docker**) to avoid too much dependencies.

Component reusability. A button should always behave like a button and a red button is no different (in terms of functionality) to a green one.

## Folder structure

By default a component/page folder should always include a .tsx file, its test file and its scss/css file.

Additionally, in order to maintain scallability I have decided to include the corresponding story files in the same folder.
