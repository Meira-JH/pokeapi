# Pokemon API :headphones: - UNDER DEVELOPMENT
A pokemon fan web application.


This is a full stack project. 

It consists in the development of a web-mobile-first application.

:small_orange_diamond: The **front-end** code uses ReactJS with NextJS framework. 

:small_orange_diamond: The **back-end** is an API coded in Typescript and integrated with a <a href="https://pokeapi.co/docs/v2">pokemon api</a> . 

:small_orange_diamond: Front was inspired by some independent projects.

## Tools and technologies :wrench:
  

<p align="center">
<img width="40px" src="https://cdn.iconscout.com/icon/free/png-256/nodejs-2-226035.png"/>
<img width="35px" src="https://raw.githubusercontent.com/jalbertsr/logo-badge-images/master/img/react_logo.png"/>
<img width="35px" src="http://3con14.biz/code/_data/js/intro/js-logo.png"/>
<img width="35px" src="https://github.com/MarioTerron/logo-images/blob/master/logos/jest.png"/>
<img width="35px" src="https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png"/>
</p>

<p>
<img height="22px" src="https://github.com/Meira-JH/futureEats/blob/master/futureEats/src/imgs/EnvironmentNodejs.png"/>
</p>
<p>
<img height="22px" src="https://github.com/Meira-JH/futureEats/blob/master/futureEats/src/imgs/languages.png"/>
</p>
<p>
<img height="22px" src="https://github.com/Meira-JH/futureEats/blob/master/futureEats/src/imgs/JSLibReactJS.png"/>
</p>
<p>
<img height="22px" src="https://github.com/Meira-JH/futureEats/blob/master/futureEats/src/imgs/tools.png"/>
</p>
<p>
<img height="22px" src="https://github.com/Meira-JH/futureEats/blob/master/futureEats/src/imgs/layout.png"/>
</p>
<p>
<img height="22px" src="https://github.com/Meira-JH/futureEats/blob/master/futureEats/src/imgs/jest.png"/>
</p>


## The app  :iphone:

## Running the app :running:

On your terminal, type:

```
git clone https://github.com/Meira-JH/spotenu-frontend-project
```

Install dependencies:
```
yarn install
```

Execute the application:
```
yarn dev 
```

## Code architecture :computer:

The frontend code was designed concerned with JS best practices to fit the use of NextJS tools/libs and Clean Code. In order to do that, the source folder was divided in actions, components, containers, pages and support folders (hooks, public and service).

The backend was designed to fit MVC architecture in TypeScript.

### Frontend
:small_blue_diamond: **actions**: folder containing all the files with functions for communicating the application with the Redux Store;

:small_blue_diamond: **components**: folder containing React components that will be part of a page;

:small_blue_diamond: **pages**: folder containing React components rendered through paths configured in the connected-router;

:small_blue_diamond: **reducers**: folder containing configuration, logic and structure of files that compose Redux Store.

:small_blue_diamond: **router**: folder with files that integrate the application through routes.

### Backend
:small_blue_diamond: **business**: folder containing files with business rules;
:small_blue_diamond: **controllers**: folder containing files with logic and intermediates requests between layers;
:small_blue_diamond: **data**: folder responsible for API integration and Database communication;
:small_blue_diamond: **dto**: folder containing Data Transfer Objects;
:small_blue_diamond: **middlewares**: folder containing functions responsible for important connections of the API;
:small_blue_diamond: **models**: folder containing the modelling of the data exchanged inside the API;
:small_blue_diamond: **routes**: folder containing all paths for the API integration;
:small_blue_diamond: **services**: folder containing all sort ;

## License :page_facing_up:
[MIT License](https://choosealicense.com/licenses/mit/)

