
## Table of Contents

- [Background](#background)
- [Local Setup & Run](#local-setup--run)
- [Key Files](#key-files)

## Background

This is basic Next.js web app created for the purposes of a mock demonstration. The app contains basic Auth0 authentication
and features required for the demo.

Features included:
- Basic Username & Password signup & login
- Oauth 2.0 Login (Google only)
- Account linking prompt
- Email verification required error
- Basic User Profile
- Logout Function

Hosted version of this app can be found [here](https://cruise0-demo.vercel.app/)

## Local Setup & Run

This project requires [node](http://nodejs.org) version `18.4.0` and [npm](https://npmjs.com) version `8.12.1`.\
Go check them out if you don't have them locally installed.


```bash
git clone https://github.com/amcd-dev/cruise0-demo.git # Clone repo to local directory

cd cruise0-demo # CD into the new directory

cp .env.sample .env.local # Please edit .env.local to add the appropriate secrets from the Auth0 app settings page

npm install # Install dependencies listed in package.json

npm run dev # Start the development server, env.local will be loaded into the environment by Next.js
```
Open [http://localhost:3000](http://localhost:3000) in a browser. *Due to configured Auth0 application settings this must be port 3000

## Key Files

`/pages/index.js` - Enter point for the app & contains login link

`/pages/dashboard.js` - Mock dashboard accessible after authentication

`/pages/profile.js` - Mock profile page listing the authenticated user's email

`/components/navbar.js` - Nav bar containing logout link

`/pages/api/auth/[...auth0].js` - Auth0 API route & method import





