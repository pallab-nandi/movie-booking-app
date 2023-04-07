<div align="center"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQD-FYPDH2Q6X81XGcUJ6-Oy-a-17ziURVMW77gmBymlxzakmCAappYekdxtr7yPFRuukkb_NNaD3pOcI_NJoqxt0qchl9c-z2xJ7xFTnk_G5LWnZ0N3F_pEiO3AhhBQMxn3OVKx0R8ze0UcdJNYAilqyP5y6HIkIvccgja2Gt0em8w7UVBe25FUeaPA/s200/movie-booking-application.png"></div>
<br>
<h1 align="center">Movie Booking Application</h1>
<p align="center">
    <strong><u>Description</u></strong>
    <br>A Project on Movie Booking Back-End System<br>
    <b>Project Title : </b>Movie Booking Application<br>
    <b>Project by : </b><a href="https://github.com/pallab-nandi">Pallab Nandi</a>
</p>
<br/>

# About
A BackEnd application for movie booking system built on MVC(Model-View-Controller) architecture. The technologies uses on this application are - <b>NodeJS</b>, <b>ExpressJS</b>, <b>bcryptJS</b>, <b>Mongoose</b> and <b>JWT</b>. This application uses <b>MongoDB</b> technology to interact with DataBase. Important key features this application contains are :-

<br>

- User SignUp and LogIn feature.
- Movie Booking System.
- Payment System.
- Movies, Theatres and Users CRUD operation for Admin only.
- uses <b>JWT</b> and <b>bcryptJS</b> for Authorization and Authentication.
- Email Notification service on user registration, updation and theatre creation and updation.

<br><br>

# API Documentation


## Movies



### 1. getAllMovies


Fetch all movies list from the database.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/movie
```



### 2. getMoviesById


Fetch specific movie details as per the movie_id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/movie/642e7e9d2b6ddbed9f378183
```



### 3. addMovies


Add a new movie to the database


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/movie
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MTM5NiwiZXhwIjoxNjgwODU3Nzk2fQ.2oRjf06XIpJh1QxAiLMolDl6xFPjmZXVXn-GkRu51EU |  |



***Body:***

```js        
{
    "name": "Avengers",
    "description": "Comedy Action Superpower",
    "casts": ["Robert Downey Jr", "Scarlet Johnson"],
    "director": "Anthony Russo",
    "trailerUrl": "http://avengers/trailers/1",
    "posterUrl": "http://avengers/posters/1",
    "language": "Hindi",
    "releaseDate": "18-03-2019",
    "releaseSatus": "RELEASED"
}
```



### 4. updateMovie


Update specific movie detail according to movie_id


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/movie/642e89672a860b95a8348c82
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MTM5NiwiZXhwIjoxNjgwODU3Nzk2fQ.2oRjf06XIpJh1QxAiLMolDl6xFPjmZXVXn-GkRu51EU |  |



***Body:***

```js        
{
    "name" : "Black Adam",
    "trailerUrl": "http://blackadam/trailers/1",
    "posterUrl": "http://blackadam/posters/1"
}
```



### 5. deleteMovie


Delete specific movie data from database as per movie_id


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/movie/642e89672a860b95a8348c82
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MTM5NiwiZXhwIjoxNjgwODU3Nzk2fQ.2oRjf06XIpJh1QxAiLMolDl6xFPjmZXVXn-GkRu51EU |  |



### 6. deleteMovie_byQuery


Delete specific movie data from database as per API Query


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/movie
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MTM5NiwiZXhwIjoxNjgwODU3Nzk2fQ.2oRjf06XIpJh1QxAiLMolDl6xFPjmZXVXn-GkRu51EU |  |



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| name | Shazam! |  |



## Theatres



### 1. getAllTheatres


Fetch all theatre available in the database


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/theatre
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



### 2. getTheatresById


Fectch theatre details according as Theatre_Id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/theatre/642e8e2f3e5a3ee4f239e186
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



### 3. addTheatres


Add new theatre to database


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/theatre
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



***Body:***

```js        
{
        "name" : "PVR" ,
        "city" : "Bangalore",
        "description" : "Top class theatre" ,
        "pinCode" : 569004,
        "movies" : [
            "642e7e9d2b6ddbed9f37817e",
            "642e7e9d2b6ddbed9f37817f"
        ],
        "ownerId" : "642e7e9e2b6ddbed9f37819a"
    }
```



### 4. updateTheatre


Update specific theatre detail in the database according as theatre_id


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/theatre/642e8cf3ec0b41224b987ad2
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



***Body:***

```js        
{
    "name" : "PVR 2"
}
```



### 5. deleteTheatre


Delete specific theatre from the database according as theatre_id


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/theatre/642e8cf3ec0b41224b987ad2
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



### 6. deleteTheatre_OnQuery


Delete specific theatre from the database according as API Query


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/theatre
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| name | PVR |  |
| city | Bangalore |  |



### 7. updateTheatreMovie


Insert or Delete specific movie in the specific theatre as per theatre_id


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/theatre/642e8cf3ec0b41224b987ad2/movies
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



***Body:***

```js        
{
    "movieIds" : ["642e7e9d2b6ddbed9f378183"],
    "insert" : true
}
```



### 8. RunningMovies


Check wether a specific movie is running in specific theatre or not.


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/theatre/642e8cf3ec0b41224b987ad2/movie/642e7e9d2b6ddbed9f378183
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



## Booking



### 1. getAllBookings


Fetch all booking according as user authentication


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/booking
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



### 2. getBookingByID


Fetch specific booking details according as booking_id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/booking/642e938802d7a9cc60d7e5de
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



### 3. addBooking


Add a new booking


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/booking
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



***Body:***

```js        
{
    "theatreId" : "642e808eb1b9eb875010778d",
    "movieId" : "642e7e9d2b6ddbed9f37817d",
    "timing" : "15-04-2023::12:30",
    "noOfSeats" : 5
}
```



### 4. updateBooking


Update a specific booking details as per booking _id


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/booking/642e938802d7a9cc60d7e5de
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



***Body:***

```js        
{
    "timing" : "16-04-2023::12:00",
    "noOfSeats" : 6
}
```



## Payment



### 1. getAllPayments


Fetch all payment details


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/payment
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



### 2. getPaymentByID


Fetch specific payment details as per payment_id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/payment/642e96602e2953461f9f3a67
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



### 3. addPayment


Add a new payment specific to a booking_id


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/payment
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



***Body:***

```js        
{
    "bookingId" : "642e96b92e2953461f9f3a6d",
    "amount" : 1000
}
```



## User



### 1. fetchAllUsers


Fetch all user details from the database


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/user
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



### 2. getUserById


Fetch a specific user details as per user_id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/user/642e8f1d3e5a3ee4f239e190
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



### 3. addUser


Add a new user to the database


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/user
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



***Body:***

```js        
{
    "name": "nilou",
    "email":"pallabnandi6@outlook.com",
    "password":"test1234",
    "userId": "nilou",
    "userType": "CUSTOMER"
}
```



### 4. updateProfile


Update a specific user details


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/user/nilou
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



***Body:***

```js        
{
    "userId" : "nilou",
    "password" : "test20"
} 
```



### 5. updateUserPassword


Update specific user password


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/user/nilou/updatePassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



***Body:***

```js        
{
    "password" : "test123"
}
```



### 6. deleteUser


Delete a specific user as per user_id


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/user/642e8f1d3e5a3ee4f239e190
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



### 7. deleteUser_OnQuery


Delete specific user as per API Query


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/api/v1/user
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| x-access-token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3ZTllMmI2ZGRiZWQ5ZjM3ODE5NyIsInVzZXJJZCI6ImFkbWluIiwidXNlclN0YXR1cyI6IkFQUFJPVkVEIiwidXNlclR5cGUiOiJBRE1JTiIsImlhdCI6MTY4MDc3MjE1MiwiZXhwIjoxNjgwODU4NTUyfQ.qtr--r-LL2rIQatc61_Lu_tva9gxWTVMakBdiEFS1Mw |  |



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| name | aman |  |
| userId | aman123 |  |



## Auth



### 1. signup


Sign Up for new user


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/signup
```



***Body:***

```js        
{
    "name": "Miko",
    "email":"npallab25@gmail.com",
    "password":"test123",
    "userId": "miko",
    "userType": "CUSTOMER"
}
```



### 2. signIn


SignIn for exisiting user


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/signin
```



***Body:***

```js        
{
    "userId" : "admin",
    "password" : "admin123"
}
```



<br><br>

# Project Version

The current version of the application is `v1.0.0`