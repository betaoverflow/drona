<p align='center'>
<img src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1635952594/achieve_hmzdar.png" height='150' />
<h1 align='center'>Drona</h1>
</p>

## Inspiration 💡
- In most developing countries, which account to over 85% of the world, the ratio of CS students versus the number of computers available is highly skewed and most students are still learning programming via pen-and-paper.
- 4 out of 5 people have access to smartphones versus only 2 out of 5 having access to computers. This results in 95% of students starting coding properly when they enter university level.
- An average computer science teacher in developing countries spends more than 60% of the time checking the code or correcting papers handwritten by the students due to lack of computer
- 71% of parents in the United States are concerned with the amount of time their children spend in front of computer screens, which ultimately results in 60 million people who have computer vision syndrome
- 18 out of 25 students miss out on opportunities because of lack of information which results in frustration, anxiety, and stress.


## What is it? ⛹️‍♂️




[![Starware](https://img.shields.io/badge/⭐-Starware-f5a91a?labelColor=black)](https://github.com/zepfietje/starware)

Drona is Starware.  
This means you're free to use the project, as long as you star its GitHub repository.  
Your appreciation makes us grow and glow up. ⭐


## Prerequisites 👨‍💻

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local 💻

Clone the project in localhost
```bash
git clone https://github.com/betaoverflow/drona.git
```
Install all the npm packages. Go into the web folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application in development mode type the following command

```bash
yarn dev
```

The Application Runs on **localhost:3000**

### To spin up the backend server

Navigate to the main project folder in a seperate terminal. Then install all npm packages
```bash
npm install 
```

If you don't have nodemon globally installed on your system, install it so the server can autorefresh 
```bash
npm install -g nodemon
```

Now it's time to spin up the backend server. Run the lines
```bash
npm run dev
```
If you get an error immediately, don't worry. The final step is to connect to the MongoDB database.

Note: The Server Runs on **localhost:8080**

## Connecting to the Database
Spin up your cluster in MongoDB and replace your connection with URI in `.env`
If you face any problems, refer to the [MongoDB](https://www.mongodb.com/blog/postquick-start-nodejs-mongodb--how-to-get-connected-to-your-database) website.


## Connecting to the Database if you haven't used MongoDB Atlas before
Install the MongoDB Node.js Driver with the following command:
```bash
npm install mongodb
```

Set up a [MongoDB Atlas Database](https://www.youtube.com/watch?v=rPqRyYJmx2g) by following this short MongoDB setup video till the *3:20* mark. Stop after that mark!

On your Cluster home page, select CONNECT > Connect your application. 
1. Select Node.js in the drop down for your driver, and select the latest version. 
1. Then, copy the connecting string (URI).
1. Paste this string as the value of mongoURI inside `.env` of this project.

Replace the `<password>` section of the string with your Database Access password. Viola, your server should now successfuly connect to MongoDB!
## How we built it 🧑‍💻


## Challenges we ran into 🥺


## Accomplishments that we're proud of 😎





## Built With 💕



## What's next for Drona 🔥






