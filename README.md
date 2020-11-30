# 1. Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1.1 — Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 1.2 — Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# 2. Infrastructure

## 2.1 — Initial Infra Runbook

This section contains steps to get vernacuLearn infrastructure set up from scratch in a new or existing AWS account.

### 2.1.1 – Create an AWS account or log into an existing one
We'll be creating resources in an AWS account, so a user with VPC/EC2/S3 privileges will be required.
[Create an account](https://portal.aws.amazon.com/billing/signup#/start) or 
[Sign in](https://console.aws.amazon.com/) to the console using your existing credentials.

### 2.1.2 – Create VPC
Once signed into the AWS console, select VPC from the "Services" menu. Take note of the default region in the upper-right menu as this runbook is for a single region. Choose a region you feel will best suit your users.

1. Under the left-side navigation, click "Your VPCs".

2. Click "Create VPC" and 




### 2.1.3 – Create a subnet
Our datacenter resources we'll be 

### 2.1.4 – Create an Internet Gateway
Resources in need of internet

### 2.1.5 – Ensure the subnet can reach the gateway

### 2.1.6 – Create an t2.micro on-demand Instance (virtual machine)

### 2.1.7 – Ensure SSH security group allow ONLY your IP

### 2.1.8 – SSH into the ec2 instance

### 2.1.9 – Install NGINX via `apt` package manager

### 2.1.10 – Install CertBot if you are setting up HTTPS for a domain

### 2.1.11 – Clone application repository onto EC2 instance

### 2.1.12 - Fill out .env file on EC2 instance

### 2.1.13 - Create user `node` and only run 


## 2.2 Maintenance


# 3. Development Roadmap

## Define the `card` schema
The main object in vernacuLearn is a `card`, representing a flashcard in a deck. Each card should have a unique ID, a name, definition, categories, etc. While the schema may change over time, try to have some universal info in place.

Examples used across many schemas:

- `id`
- `date_created`
- `date_modified`
- `owner_id`
- `group_id`
- `status` `ENUM('draft', 'published', 'private', 'disabled')`

## Create initial CRUD API for `card` records


