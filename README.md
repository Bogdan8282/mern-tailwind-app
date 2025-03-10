To copy this repository run:

```
git clone https://github.com/Bogdan8282/mern-app
```

Then create .env file in your root directory and define variables like in this example:

```
NODE_ENV=production
PORT=5000
MONGO_URI=your_uri
JWT_SECRET=your_secret
CORS_ORIGIN=http://localhost:5000,http://localhost:5173
VITE_API_URL=http://localhost:5000/api
```

You can use the following commands to configure the project:

`install-all` - install all packages

`dev` - run app in development mode

`prod` - run app in production mode

`c-dev` - run only frontend in development mode

`s-dev` - run only backend in development mode
