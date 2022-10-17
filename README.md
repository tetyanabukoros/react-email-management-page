[DEMO](https://tetyanabukoros.github.io/react-email-management-page/)

[Figma layout](https://www.figma.com/file/rbuTofx7iw1WCyQiCQHM5R/testCollaba-(1)?node-id=0%3A1)


Here you see the Email management page


This page has 3 categories of letters:

> General notices;

> Notices on the Sites;

> Telegram notifications.

Each of the sections has its own settings, some of them are more flexible, for example, “Personal messages” in addition to the on / off mode also has a sending frequency setting:

> Instantly;

> 1 per day;

> Disable.

![image](https://user-images.githubusercontent.com/94980714/196033470-3fd1bf0e-7e81-456f-abbe-9cf9c9db890b.png)


Site notifications have subcategories. These subcategories include a list of topics (the one with crosses). They can be removed with a cross.

![image](https://user-images.githubusercontent.com/94980714/196033604-75996f96-7281-4cef-b5f1-b3fb4bb62f42.png)


The detail button opens the modal

![image](https://user-images.githubusercontent.com/94980714/196033638-7074789a-1639-4688-8dcb-65b32108ade3.png)

At the bottom, the “Default” button returns the checkboxes enabled everywhere and “Instant” is set in the frequency selects


When you click on the “Save” button, the “Are you sure?” modal should pop up. with "Yes" and "No" options.

![image](https://user-images.githubusercontent.com/94980714/196033760-b57c97b8-a454-4be7-a0e9-61f49a7d7d63.png)


In case of clicking on “Yes” - notify the user of success

![image](https://user-images.githubusercontent.com/94980714/196033793-1ac9b1ef-5c1e-401f-a684-d26ecaf83732.png)

Instructions how to run application locally:

Use 14 version of node.js:

nvm use 14

Clone the repository to your local machine, open terminal and clone repo with command bellow:

git clone https://github.com/tetyanabukoros/react-email-management-page.git

Open project in terminal:

cd react-email-management

Set up project and install necessary packages:

npm install

Add command to terminal:

npm start

Open application in your browser http://localhost:3000/

