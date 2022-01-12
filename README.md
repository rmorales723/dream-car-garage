# dream-car-garage

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run json-server`

Runs the json data server.

### Project Description

Short description about the project This project lists and shows my collection of cars.

### landing-page

Here is a screenshot of the landing page:


![landing-page](https://user-images.githubusercontent.com/72527380/148711138-acdbcd6e-6d1e-42fb-a7ac-d61f76b6fcf2.png)


We have a Landing page react component that has a Link to the cars-container-page where all the cars are listed in the UI.


### cars-container-page

Here is a screenshot of the cars-container-page:


![cars-container-page](https://user-images.githubusercontent.com/72527380/148711146-11ff974d-9c49-4c9b-872f-87d22f28784b.png)

We have a CarsContainerPage react component that makes a fetch request (GET /cars) call to fetch all the cars data that are present in the database, and then displays each car in the UI. 


### form-container-page

Here is a screenshot of the car-form-container-page:


![form-container-page](https://user-images.githubusercontent.com/72527380/148711152-c3c1148b-69a3-4dd3-b0c9-10ea02bc2c9e.png)

We have a FormContainer react component that posts the user typed data for the car being created from the frontend to the backend.
