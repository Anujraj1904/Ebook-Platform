# API Documentation

## Endpoint: `/api/users/register`

### Description

This endpoint is used to register a new user.

### Method

`POST`

### Request Body

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (required)
- `email`: A string with a minimum length of 5 characters and must be a valid email (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

- **Status Code**: `201 Created`
- **Response Body**: A JSON object containing the user details and a JWT token.

Example:

```json
{
  "user": {
    "_id": "60c72b2f9b1d4c3a4c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Validation Errors

- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing the validation errors.

Example:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "firstname must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

## Endpoint: `/api/users/login`

### Description

This endpoint is used to log in an existing user.

### Method

`POST`

### Request Body

The request body should be a JSON object containing the following fields:

- `email`: A string with a minimum length of 5 characters and must be a valid email (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the user details and a JWT token.

Example:

```json
{
  "user": {
    "_id": "60c72b2f9b1d4c3a4c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing the authentication error message.

Example:

```json
{
  "message": "Invalid email or password"
}
```

## Endpoint: `/api/users/profile`

### Description

This endpoint is used to get the profile of the logged-in user.

### Method

`GET`

### Headers

- `Authorization`: Bearer token (required)

### Responses

#### Success

- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the user details.

Example:

```json
{
  "_id": "60c72b2f9b1d4c3a4c8e4b8a",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing the authentication error message.

Example:

```json
{
  "message": "Access Denied"
}
```

## Endpoint: `/api/users/logout`

### Description

This endpoint is used to log out the logged-in user.

### Method

`GET`

### Headers

- `Authorization`: Bearer token (required)

### Responses

#### Success

- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the logout success message.

Example:

```json
{
  "message": "Logout successfully"
}
```

#### Authentication Errors

- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing the authentication error message.

Example:

```json
{
  "message": "Access Denied"
}
```
