The purpose of this app is to demo some basic Auth0 functionality for a fictional business called Travel0

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Getting Started](#getting-started)

## Background

The goals for this repository are:

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





