# Hack the North 2023 Frontend Challenge

I'm Tong Yin and this is my Hack the North 2023 Frontend Challenge submission.

To view the project visit: https://tongyinn.github.io/without-auth0-htn-frontend-challenge-2023/

### Getting Started

Git clone the repository using `git clone https://github.com/TongYinn/htn-frontend-challenge-2023.git`

Open the cloned folder in the code editor of your choice (i.e VsCode) and cd into project's root directory

Install all required dependencies by running `npm install`.

Run `npm start` to start the application in your browser

Feel free to log in by using the following:
email: htn.2023.frontend.challenge@gmail.com
password: password1!1

## Project Write-up

### Structure and Design

While devising my project’s structure, the main emphasis was placed on ensuring scalability and extensibility while simultaneously making sure that the codebase is easily maintainable.

To start off, App.js was built with various routes in mind. One route was the main route while the other was a callback route, which is accessed when a user logs in. The goal when designing this file was to ensure that it was kept relatively simple and straightforward with minimal bloating as it is a top-level component.

Next, Auth0 was employed as it has a proprietary login page that aids in determining what to display based on if the user is logged in or not, seamlessly aligning with the differentiation between private and public events.

The Events.js file is responsible for displaying all of the events and fetching data from the Hack the North API. On top of this, it is responsible for calling the reusable component, EventCard.js, that functions as a template event card for all events.

Finally, the NavBar.js allows users to easily login and creates a call to action for users to the login page, created by Auth0.

### Tools and Technologies

#### Auth0

I chose to use Auth0 as I understood the need for an authentication system given the requirements for users to be able to login to see private events. I found that Auth0 is a highly flexible and dynamic solution for authentication that reduces the need for in-depth cybersecurity experience. Additionally, it is proven to be compatible with React with a pre-existing SDK.

#### React

I chose React as it is a highly supported front-end framework that has developed a large supportive community of developers. This means that I am able to leverage this existing network for any assistance/support needed with high level documentation on the internet for a variety of use cases. On top of this, given the nature of this project involving various event cards and sections, I was able to leverage the component-based nature of React to expedite development and maintain scalability.

#### Chakra UI

Chakra UI is an extremely flexible and customizable component library that supports React. Every component is customizable and provides a robust library of components and stylings to employ.

#### Axios

I elected to use Axios as my fetching library as it is relatively straightforward to use and can leverage interceptors. The interceptors allowed me to run code before the request/response has even started.

### Problems

One primary issue I came across in the build process was styling the web app. Initially, I tried building out my own stylized components but it came across as unprofessional from a visual and UI standpoint. I opted to leverage ChakraUI and their pre-built components library to expedite this work and ultimately resulting in a more finished and polished look.

Another issue came across while I was implementing Auth0. This is because I was primarily using version 2 of Auth0 while a lot of documentation and tutorials I was reading into were leveraging version 1. I worked around this by implementing browser routes to bridge the gap between my codebase and the existing documentation.

The final issue I ran into was setting up related events. I found it difficult to pull the name and the private / public URLs for the events from the EventID. This resulted in th eventcard component only taking in one event and not the other related events as well. I ended up creating a function that creates a related events array that gets passed into each eventcard component to mend this.

## Proud Areas of Code
