# API Documentation

## Endpoint

https://capstone-backend-production-7544.up.railway.app/api

## Profile

### Update Profile

- URL : 
  
  - #### `/user/update`

- Method :

  - #### `PUT`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `name` as `String`

  - #### `username` as `String`, must be unique

  - #### `email` as `String`, must be unique, must be an email

  - #### `phone_number` as `String`, must be unique

  - #### `bank_account_number` as `String`, must be unique

### Change Password

- URL : 
  
  - #### `/user/change-password`

- Method :

  - #### `PUT`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `old_password` as `String`

  - #### `password` as `String`, must be at least 8 characters

  - #### `password_confirmation` as `String`, must be the same as `password`

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

  - #### `phone_number` as `String`, must be unique

  - #### `bank_account_number` as `String`, must be unique

  - #### `password` as `String`, must be at least 8 characters

  - #### `password_confirmation` as `String`, must be the same as `password`

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

### Get Data Admin

- URL :

  - #### `/admin/data`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Logout

- URL :

  - #### `/logout`

- Method :

  - #### `POST`

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

  - #### `phone_number` as `String`, must be unique

  - #### `bank_account_number` as `String`, must be unique

  - #### `password` as `String`, must be at least 8 characters

  - #### `password_confirmation` as `String`, must be the same as `password`

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
  
### Logout

- URL :

  - #### `/admin/logout`

- Method :

  - #### `POST`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

## Category

### Get All Categories

- URL :

  - #### `/categories`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

### Get Category by ID (Admin)

- URL :

  - #### `/categories/{category_id}`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Create Category (Admin)

- URL :

  - #### `/categories`

- Method :

  - #### `POST`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `name` as `String`

### Update Category (Admin)

- URL :

  - #### `/categories/{category_id}`

- Method :

  - #### `PUT`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `name` as `String`

### Delete Category (Admin)

- URL :

  - #### `/categories/{category_id}`

- Method :

  - #### `DELETE`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

## Destination

### Get All Destinations

- URL :

  - #### `/destinations`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

### Get Destination by ID

- URL :

  - #### `/destinations/{destination_id}`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

### Create Destination (Admin)

- URL :

  - #### `/destinations`

- Method :

  - #### `POST`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `name` as `String`

  - #### `open_time` as `String` (HH:MM:SS)
  
  - #### `close_time` as `String` (HH:MM:SS)

  - #### `price` as `Integer`
  
  - #### `rating` as `Double`
  
  - #### `location` as `String`

  - #### `description` as `String`

### Update Destination (Admin)

- URL :

  - #### `/destinations/{destination_id}`

- Method :

  - #### `PUT`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `name` as `String`

  - #### `open_time` as `String` (HH:MM:SS)
  
  - #### `close_time` as `String` (HH:MM:SS)

  - #### `price` as `Integer`
  
  - #### `rating` as `Double`
  
  - #### `location` as `String`

  - #### `description` as `String`

### Delete Destination (Admin)

- URL :

  - #### `/destinations/{destination_id}`

- Method :

  - #### `DELETE`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

## Destination Gallery

### Get All Destination Galleries (Admin)

- URL :

  - #### `/destination_galleries`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Get Destination Gallery by ID (Admin)

- URL :

  - #### `/destination_galleries/{destination_gallery_id}`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Create Destination Gallery (Admin)

- URL :

  - #### `/galleries/{destination_id}`

- Method :

  - #### `PUT`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `image` as `String`

  - ### `destination_id` as `Integer`

### Delete Destination Gallery (Admin)

- URL :

  - #### `/destination_galleries/{destination_gallery_id}`

- Method :

  - #### `DELETE`

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

### Get Article by ID (User)

- URL :

  - #### `/articles/{article_id}`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

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

  - #### `excerpt` as `String`

  - #### `content` as `String`

  - #### `category_id` as `Integer`

### Update Article (Admin)

- URL :

  - #### `/articles/{article_id}`

- Method :

  - #### `PUT`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `title` as `String`

  - #### `excerpt` as `String`

  - #### `content` as `String`

  - #### `category_id` as `Integer`

### Delete Article (Admin)

- URL :

  - #### `/articles/{article_id}`

- Method :

  - #### `DELETE`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

## Article Gallery

### Get All Article Galleries (Admin)

- URL :

  - #### `/article_galleries`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Get Article Gallery by ID (Admin)

- URL :

  - #### `/article_galleries/{article_gallery_id}`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Create Article Gallery (Admin)

- URL :

  - #### `/article_galleries`

- Method :

  - #### `POST`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `image` as `String`

  - ### `article_id` as `Integer`

### Delete Article Gallery (Admin)

- URL :

  - #### `/article_galleries/{article_gallery_id}`

- Method :

  - #### `DELETE`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

## Transaction

### Get All Transactions by User Logged In

- URL :

  - #### `/user/transactions`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Get All Transactions (Admin)

- URL :

  - #### `/transactions`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Get Transaction by ID (Admin)

- URL :

  - #### `/transactions/{transaction_id}`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Create Transaction (User)

- URL :

  - #### `/orders/{destination_id}`

- Method :

  - #### `PUT`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `quantity` as `Integer`

### Update Transaction (Admin)

- URL :

  - #### `/transactions/{transaction_id}`

- Method :

  - #### `PUT`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `transaction_status` as `Integer`

## Article Comment

### Get Article Comments by Article ID

- URL :

  - #### `/comments/{article_id}`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Get All Article Comments (Admin)

- URL :

  - #### `/comments`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Get Article Comment by ID (Admin)

- URL :

  - #### `/comments/{comment_id}`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Create Article Comment

- URL :

  - #### `/comments/{article_id}`

- Method :

  - #### `PUT`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

- Request Body :

  - #### `content` as `String`

### Delete Article Comment (Admin)

- URL :

  - #### `/comments/{comment_id}`

- Method :

  - #### `DELETE`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

## Wishlist

### Create Wishlist

- URL :

  - #### `/wishlists/{destination_id}`

- Method :

  - #### `PUT`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Check Wishlist

- URL :

  - #### `/wishlists/{destination_id}`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`

### Get All Wishlists by User Logged In

- URL :

  - #### `/user/wishlists`

- Method :

  - #### `GET`

- Headers :

  - #### `Content-Type` : `application/json`

  - #### `Accept` : `application/json`

  - #### `Authorization` : `Bearer <accessToken>`