
## Description
This is a project created to give an easy to use example of how to use a `NodeJS server` as a backend to a `React native` front end. We use mysql databases on a local xampp webserver to storage the data.
In the example we have a online shop with products, price and name. You are able to insert, remove, update products in the react app. If you try the app and dont like the interface, bare in mind it is designed and tested on a ipad and therefore optimized for such devices.

## What it is

* **React native**: A React native app whre you can add,remove,update and watch products(name and price) 
* **NodeJs**: A backend which handles the requests regarding the products, started on a order route but it is not relevant.
* **PHPMYADMIN Database**: A sql file which i have had run o an phpmyadmin database, it contains a product tabell with name and price as columns
* **HTML Site**: A easy site with html and javascript that can be used to very easily test your backend and its connections.
* **Documentation**: The most important code is commentated in either English, Swedish or Swenglish
### Instructions
Everywhere when i have used  my ip adress 10.20.22... etc change it to your own with ipconfig and take the ipv4 adress.
## Backend
### NODE JS
To run open the folder in terminal, write nodemon and it will run on localhost:3000
If this do not work then run npm install.

### MYSQL
Import the store.sql file to your database.

## Frontend
### React Native
To run open the folder in terminal, write npm start and it will run on your computers ip adress.
If this do not work then run npm install
:+1:

# FAQ:
## Backend
### Jag vill ha flera parametrar in från params(urlfältet) hur gör man det? 
Du gör bara ett & mellan dem.
Exempel:
```
router.get('/:age&:name', (req, res, next) => {
 
    //req.body.name Skillnad = body tar det från kroppen medans params tar det från sökfältet
const Age = req.params.age;
const Name=  req.params.name;
const Lenght= req.body.lenght;
});
```
### Jag får "Error: Can't set headers after they are sent.", varför?
Du skickar tillbaka två res.status(); , vill man ha att det antingen kan vara res.status(200).json(result); eller res.status(201.json(result); så får man lägga det i en ifsats. Så se till att bara returnerna en status i din then.

