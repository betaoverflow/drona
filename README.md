<p align='center'>
<img src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1635952594/achieve_hmzdar.png" height='150' />
<h1 align='center'>Drona</h1>
</p>

![DRONA COVER 1](https://user-images.githubusercontent.com/67703407/142220333-fdbd52ab-f248-4bc3-a2e9-5d6ef5dc230f.png)


## Inspiration 💡
- In most developing countries, which account to over 85% of the world, the ratio of CS students versus the number of computers available is highly skewed and most students are still learning programming via pen-and-paper.
- 4 out of 5 people have access to smartphones versus only 2 out of 5 having access to computers. This results in 95% of students starting coding properly when they enter university level.
- An average computer science teacher in developing countries spends more than 60% of the time checking the code or correcting papers handwritten by the students due to lack of computer
- 71% of parents in the United States are concerned with the amount of time their children spend in front of computer screens, which ultimately results in 60 million people who have computer vision syndrome
- 18 out of 25 students miss out on opportunities because of lack of information which results in frustration, anxiety, and stress.


## What is it? ⛹️‍♂️
Drona has 3 software subsystems.
1. A codegrabber which helps users run their code written in their notebook. Users just needs to click a picture of the code they have written , the Max OCR model extracts the text and then user can edit in the theme based code editor and ultimately run it to get the output. 
2. An application where users can get regular notifications on opportunities like internships, placements, scholarships and so on. This way the user will never miss a single deadline due to a lack of awareness.
3. A question bank powered by crowdsourcing to give users more centric questions for practice. Even teachers spend more than 40% of their time preparing questions for several assignments and tests they can even pull up questions from the poll. The entire community can contribute by adding their favourite questions and can help others become better coders.


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
Install all the packages. Go into the web folder and type the following command to install all packages

```bash
yarn
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
We used Next.js in the frontend of web application and React Native for mobile application along with Node.js in the backend with MongoDB as our database. Next, we used the IBM Watson API for scanning the image and retrieving the handwritten text. The handwritten text will be displayed in a code editor with full syntax highlighting which was made using the MERN stack. For the second subsystem, we created a form which adds data to the database. Then we retrieved the data through axios and display the questions that are approved by the admin in a special private route. For the third subsystem, we made API calls to the opportunities database which was tested using IBM API Connect. The push notifications for the opportunities were made using Firebase. We also deployed our OCR backend using IBM Cloud.

## Challenges we ran into 🥺


## Accomplishments that we're proud of 😎
The biggest accomplishment for us was that we learned so many new things in the entire journey. Being a group of javascript developers, we tried our hands on typescript and react native this time. We learnt how to use Next.js and implement it with TypeScript and SCSS. Moreover, we created a progressive web app with offline support as well. As we wanted to read the handwritten text, we found out about OCR for text extraction. We researched on it and finally decided to try out the MAX Optical Character Recognition created by IBM which was something very new for us. We were able to overcome all the challenges and were able to create a completely functional prototype the way we had envisioned. It was tiring, but fun as well. We are most proud of the fact that this product will be able to help many students and teachers across the globe.

## Built With 💕
- [ ] MAX Optical Character Recognition by IBM
- [ ] IBM API Connect
- [ ] IBM Cloud
- [ ] React Native
- [ ] Reactjs
- [ ] Nextjs 
- [ ] Nodejs
- [ ] Javascript
- [ ] Express
- [ ] Typescript
- [ ] MongoDB
- [ ] Mongoose
- [ ] Cloudinary
- [ ] Scss
- [ ] Vercel
- [ ] Heroku


## What's next for Drona 🔥
Apart from the code scanner and compiler , neural search question bank and opputunities we plan to work on several features to generate revenue from the application 
- Virtual Classroom: Creating an AR/VR application for a variety of courses with modules with animated models to make learning fun! 
- Neural search network: Use cloud-native neural search framework to give user-centric questions 
- Mentor Support: Chat with mentors and get resume reviews from excelling professionals in your field. 
- Automated opportunities: Receive notifications and emails for opportunities that are right for you and never miss a deadline again! 
- Curated Learning Content: Top courses in a fun interactive way to help you learn better with only your smartphone 
- Learner's community: Huge community to interact with and ask your doubts regarding everything! Network and make connections as well





