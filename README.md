# Starbucks Clone

- *Starbucks ☕️ Web Application Clone using React, React-Router, Firebase, Redux, Material-UI, React-hook-forms (for simple form validation), react-awesome-reveal, react-google-maps and the Framer Motion API.*

---

## Quick Links

[Demo](#demo)

- [Live Site Demo](#live-site-demo)
- [Project Screenshots](#project-screenshots)

[Tech Stack](#tech-stack)

[Implementation Hightlights](#Implementation-Highlights)

- [User Stories](#user-stories)

[Getting Started](#getting-started)

- [Prerequisites](#prerequisites)

  - [Tools & Versions](#tools-&-versions)

- [Runing Project](#running-project)

- [Building Application](#building-application)

[Deployment](#deployment)

[Author](#author)


---

## Demo

### Live Site Demo

Demo: [Link](https://starbucks-clone-cd780.web.app/)

### Project Screenshots

- Home Page
![HomePage](https://user-images.githubusercontent.com/37274588/126140352-2b00b0a7-90c6-4eef-b831-3bfad187be77.JPG)
![HomePage1](https://user-images.githubusercontent.com/37274588/126140364-3a098457-890e-41e5-8c85-dedea90e43eb.JPG)
![HomePage2](https://user-images.githubusercontent.com/37274588/126140375-bb411e8e-4458-4a39-8b68-5d6a5ed5f111.JPG)
![HomePage3](https://user-images.githubusercontent.com/37274588/126140383-8dbbc073-c7b4-4ec0-9938-0dca9de5db40.JPG)
![HomePage4](https://user-images.githubusercontent.com/37274588/126140397-092a5311-06ab-4117-ae0f-7ed2dad63841.JPG)

- Sign Up Page
![SignUp](https://user-images.githubusercontent.com/37274588/126140681-a7654b10-ba35-4e7e-9f18-e8a6e588dd68.JPG)

- Login Page
![Login](https://user-images.githubusercontent.com/37274588/126140706-e8f4bf1a-65e3-40b1-8b4c-e6e29f5b555e.JPG)

- Menu Page
![Menu](https://user-images.githubusercontent.com/37274588/126140734-a0cc5508-5c9f-4a73-8604-076b34067d06.JPG)
![Menu2](https://user-images.githubusercontent.com/37274588/126140752-648c468c-3e60-4d07-8aad-9aa06f7607d9.JPG)

- Featured Page
![Featured](https://user-images.githubusercontent.com/37274588/126140788-d2056bc0-fac0-484d-9635-e3f76b6d3367.JPG)
![Featured2](https://user-images.githubusercontent.com/37274588/126140799-b352aa69-0355-494f-ba56-62c726001628.JPG)

- Rewards Page
![Rewards](https://user-images.githubusercontent.com/37274588/126140840-dbb8e003-4fa7-4f8a-94ca-0b300d85cd33.JPG)
![Rewards2](https://user-images.githubusercontent.com/37274588/126140843-79ab35d2-3287-41b3-b276-0b56548a259b.JPG)
![Rewards3](https://user-images.githubusercontent.com/37274588/126140845-210cf1f1-c08f-498b-bf80-1697c2fbded5.JPG)
![TabList](https://user-images.githubusercontent.com/37274588/126141004-d774b6e3-2685-4c79-b614-8ae6b81d9a70.JPG)
![Rewards4](https://user-images.githubusercontent.com/37274588/126140847-c519f17d-b451-40c0-88f6-d0808b6cd4d2.JPG)
![Rewards5](https://user-images.githubusercontent.com/37274588/126140848-0fe5b5dd-57df-4d09-9164-6cb8e85c2dba.JPG)

- Today's Spl Page
![TodaySpl](https://user-images.githubusercontent.com/37274588/126140904-581bad24-bd0e-40d2-9e1a-3914323cc668.JPG)
![TodaySpl2](https://user-images.githubusercontent.com/37274588/126140909-362ced34-609a-4a6a-814f-3dc2283860d1.JPG)
![TodaySpl3](https://user-images.githubusercontent.com/37274588/126140911-8440df99-a867-489e-9456-6d349ff2902d.JPG)

- Gift Cards Page
![GiftCards](https://user-images.githubusercontent.com/37274588/126141076-54fee5b5-0b2b-4b3d-853a-ce55e8f46890.JPG)
![GiftCards2](https://user-images.githubusercontent.com/37274588/126141082-43560136-953d-4774-8a74-c30d781dc024.JPG)

- Footer Component
![Footer](https://user-images.githubusercontent.com/37274588/126141166-f9fc5164-c000-4dfe-9b93-3b7166406961.JPG)

- Map Component
![MapsComponent](https://user-images.githubusercontent.com/37274588/126141207-dde22099-d1aa-422a-8620-68b315373e32.JPG)
![MapsPlaceHolder](https://user-images.githubusercontent.com/37274588/126141213-e3d34607-1775-4d53-8b34-fbeb988873bd.JPG)

---

## Tech Stack

- [React](https://github.com/facebook/react) 
- [Redux](https://github.com/reduxjs/redux)
  - web client & client data management
- [Node.js](https://github.com/nodejs)
  - Web server & services in service oriented architecure
- [Firebase](https://www.framer.com/motion/)
  - Firebase helps you build and run successful apps 
- [Framer-Motion](https://firebase.google.com/)
  - A production-ready motion library for React. 
- [Material Ui](https://material-ui.com/)
  - React components for faster and easier web development. Build your own design system, or start with Material Design. 
- [React-Awesome-Reveal](https://github.com/morellodev/react-awesome-reveal)
  - React Awesome Reveal is a library for React apps written in TypeScript that adds reveal animations using the Intersection Observer API to detect when the elements appear in the viewport. 
  - Animations are internally provided by Emotion and implemented as CSS Animations to benefit from hardware acceleration.
- [React-Hook-Form](https://react-hook-form.com/)
  - Performant, flexible and extensible forms with easy-to-use validation.
- [React-Elastic-Carousel](https://github.com/sag1v/react-elastic-carousel)
  - A flexible and responsive carousel component for react
- [React-Google-Maps](https://github.com/JustFly1984/react-google-maps-api)
  - google-map-react is a component written over a small set of the Google Maps API.
  - It allows you to render any React component on the Google Map.
- [use-places-autocomplete](https://github.com/wellyshen/use-places-autocomplete)
  - This is a React hook for Google Maps Places Autocomplete, which helps you build a UI component with the feature of place autocomplete easily! 
  - By leveraging the power of Google Maps Places API, you can provide a great UX (user experience) for user interacts with your search bar or form etc.
---

## Implementation Highlights

- single page application web client with React & Redux & context
- home page with navigation bar, featured component, info component, footer component are displayed.
- if the user is logged in , order now button will display , insted of sign up and login buttons.
- firebase for user's database and authentication.
- menu pages comprises of all products, featured and today's spl. all products includes drinks, food, at home coffee and merchandise.
- featured menu page includes attractive foods, info about foods and drinks and spl discount items.
- today's spl menu page includes three drinks which is special for today, with attractive background color change and info about the drinks.
- rewards pages exactly looks like starbucks original application with tablist and form component.
- gift cards pages includes attractive gift cards made up of carousel component.
- find a store page includes google maps component with starbucks coffee icon as map icons, which can be used to search places within the range using use-places-autocomplete(right now in trial api)

### User Stories

- users can register and log in to their account
- attractive home page where users can able to register themselves for new account
- users can able to sign in and sign out from the application
- landing page has collections of menu items, featured items and today's spl items.
- users can able to browse through variety of information and delicious food items and coffee drinks in the featured page.
- users can able to view the details of the today's special drinks, when hovered on to each drink.
- users can able to view the attractive rewards options and its details in the rewards page(same as in Starbucks- original).
- users can able to slide through different gift cards available in the page.
- users can able to see the locations of starbucks company in the Find A Store page.

## Getting Started

### Prerequisites

**!important** 
- firebase.prod.js is required for setting up firebase environment for authentication, variables for this project  
 an example of firebase.prod.js file is located at src/lib directory.
 

#### Tools & Versions

| Tools                     | Versions |
| --------------------------| -------- |
| react                     | 7.0.2    |
| npm                       | 6.1.0    |
| firebase                  | 8.6.8    |
| material-ui               | 4.11.4   |
| framer-motion             | 4.1.17   |
| react-awesome-reveal      | 3.8.1    |  
| react-elastic-carousel    | 3.8.1    |
| react-router-dom          | 5.2.0    |
| @react-google-maps/api    | 2.2.0    | 
| react-hook-form           | 6.14.2   |
| react-redux               | 7.2.4    |
| use-media                 | 1.4.0    |
| use-place-autocomplete    | 1.9.3    |


### Running Project

- install dependencies

```terminal
npm install
```
- start the project

```terminal
npm start
```
Application will be serving on http://localhost:3000


### Building Application

- Build

```terminal
npm run build
```
Application will be built on build folder
---

## Deployment

- refer firebase docs for deployment

```terminal
firebase login
```
Firebase will ask for your login details

- deploy to firebase

```terminal
firebase deploy
```

---

## Author

- Prem Balaji B

---

## License

- Licencesed under PremBalaji B

---
