# API Documentation

## Endpoint

https://capstone-backend-production-7544.up.railway.app/api

## User

### Register

- URL : 

  - #### `/register`

- Method : 

  - #### `POST`

- Headers : 

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

- Request Body :

  - #### `name` as `String`

  - #### `username` as `String`, must be unique

  - #### `email` as `String`, must be unique, must be an email

  - #### `password` as `String`, must be at least 8 characters

  - #### `password_confirmation` as `String` must be the same as `password`

### Login

- URL :

  - #### `/login`

- Method : 

  - #### `POST`

- Headers : 

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

- Request Body :

  - #### `email` as `String`

  - #### `password` as `String`

### Get User logged in

- URL :

  - #### `/user`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

## Admin

### Register

- URL : 

  - #### `/admin/register`

- Method : 

  - #### `POST`

- Headers : 

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

- Request Body :

  - #### `name` as `String`

  - #### `username` as `String`, must be unique

  - #### `email` as `String`, must be unique, must be an email

  - #### `password` as `String`, must be at least 8 characters

  - #### `password_confirmation` as `String` must be the same as `password`

### Login

- URL :

  - #### `/admin/login`

- Method : 

  - #### `POST`

- Headers : 

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

- Request Body :

  - #### `email` as `String`

  - #### `password` as `String`

### Get User logged in

- URL :

  - #### `/admin/user`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

## Article

### Get All Articles (User)

- URL :

  - #### `/articles`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Get Article by ID (User)

- URL :

  - #### `/articles/{article_id}`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Create Article (Admin)

- URL :

  - #### `/articles`

- Method :

  - #### `POST`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `title` as `String`

  - #### `content` as `String`

  - #### `excerpt` as `String`

  - #### `category_id` as `Integer`