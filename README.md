# Pokemon API :unicorn: - UNDER DEVELOPMENT
A pokemon fan web application.


<i>This is a full stack project.</i> 

It consists in the development of a web-mobile-first application.

:small_orange_diamond: The **frontend** code uses ReactJS with NextJS framework. 

:small_orange_diamond: The **backend** is an API coded in Typescript and integrated with a <a href="https://pokeapi.co/docs/v2">pokemon api</a> . 

:small_orange_diamond: Front was inspired by some independent projects and, although it contains mostly original code, it has some components and logics from <a href='https://github.com/marcelinosandroni/pokedex'> this repository </a> .

## Project planning :bookmark_tabs:

This web project is being followed through a <a href='https://trello.com/b/MSUP1AiW/pokemon-api'> Trello board </a>, in a Kanban style.


## Tools and technologies :wrench:

<p align="center">
<img width="40px" src="https://cdn.iconscout.com/icon/free/png-256/nodejs-2-226035.png"/>
<img width="35px" src="https://raw.githubusercontent.com/jalbertsr/logo-badge-images/master/img/react_logo.png"/>
<img width="35px" src="http://3con14.biz/code/_data/js/intro/js-logo.png"/>
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
<img height="22px" src="https://github.com/Meira-JH/futureEats/blob/master/futureEats/src/imgs/layout.png"/>
</p>


## Running the app :running:

In this repository there is both front and backend.

To get the repository on your machine, on your terminal, type:
```
git clone https://github.com/Meira-JH/pokeapi-fullstack
```

### the frontend:
1. Go inside the frontend folder (cd frontend)
2. Install dependencies:
```
yarn install
```

3. Inside the folder create a .env file containing the following variable:
```
LOCAL_HOST=http://localhost:4000
```

This is necessary to direct the frontend requests to the port configured locally.

3. Execute the application:
```
yarn dev 
```

### the backend:
1. Go inside the backend folder (cd backend)
2. Install dependencies:
```
yarn install
```

3. Inside the folder create a .env file containing the following variable:
```
BCRYPT_COST=3
REFRESH_TOKEN_EXPIRES_IN=3000
JWT_KEY=pokemon-api-project
ACCESS_TOKEN_EXPIRES_IN=1d
QUERY_LIMIT_FETCH_POKEMONS=20
QUERY_OFFSET_FETCH_POKEMONS=0
```

3. Execute the application:
```
yarn dev 
```



## Code architecture :computer:

The backend was designed to fit MVC architecture in TypeScript, using Express framework.

The frontend code was designed concerned with JS best practices to fit the use of NextJS tools/libs and Clean Code.

Integration between front and back is intermediated by axios.

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

