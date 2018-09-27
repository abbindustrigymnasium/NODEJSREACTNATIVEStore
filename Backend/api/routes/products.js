const express = require('express');
const  router = express();
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "store"
});
con.connect(function(err) {
    if (err) throw err;
    else
    console.log("funkar");

});

router.get('/', (req, res, next) => {


    con.query("SELECT * FROM products", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.status(200).json({
        message: 'Getter',
        result: result});
    });

 	
});





router.post('/', (req, res, next) => { //  '/'= indexfilen i localhost/products/   req = request , res= resultat , next = det som ska hända senare 
    const product={ //skapar ett objekt.
        name: req.body.name,
        price: req.body.price
    }

    if(req.body.name==null){ //om det inte finns något namn i bodyn så vet vi att det är [] ivägen för innehållet därav är måsste vi veta det och ändra produktens namn och pris
        //Förklaring till raden ovan, är det bra direkt så är koden {name: "Exempel", price: "13"} är den inte bra så är den [{name: "Exempel", price: "13"}] alltså är det en lista med ett objekt i.
    product.name= req.body[0].name; //Vi tar första objektet(enda på det sättet vi lagt upp koden nu) och använder dess namn
    product.price= req.body[0].price; //Samma med pris
    }
    console.log(req.body); //Här skriver jag ut req.body för att se skillnaden på den mellan en postman request och en html.
    var createProduct = function(){ //Skapar funktionen
        return new Promise(function(resolve,reject){ //Skapar löftet
            //[[ value]] , [[ [product.name,product.price]]] 
            var Theproduct = [product.name,product.price];
            con.query('INSERT INTO products (name, price) VALUES ?',[[Theproduct]], function(err,result) {
      
              if(err){                
                  return reject(err);
              }else{              
                  return resolve(Theproduct);
              }
      
          }); // query
        }); // Promise
      } // getDepartments

      createProduct().then( Theproduct => {
        res.status(200).json({ //Här kan man som jag gjort lägga till en status 200, OBS tänk på att 201 kommer
            message: "Success, new product created",// nästan aldrig köras då, så bästa är att ändra till 201 i din frontEnd eller 201 här i backend.
        Product: Theproduct //I detta exempel skickar 200 bara produkten medans 201 skickar meddelandet med.
    });
        res.status(201).json({  message: "Success, new product created",
                                Product: Theproduct
                            });
    }).catch(err => {
        res.status(500).json({
            error: err,
            message:"HEJ"
        });
    });
});


router.get('/:productName', (req, res, next) => {
 
                    //req.body.name Skillnad = body tar det från kroppen medans params tar det från sökfältet
    const Name = req.params.productName;
 
    var getProduct = function(){
        return new Promise(function(resolve,reject){
            con.query("SELECT * FROM products  WHERE `name` = ?", [Name], function (err, result, fields) {
      
              if(err){                
                  return reject(err);
              }else{              
                  return resolve(result);
              }
      
          }); // query
        }); // Promise
      } // getDepartments

    getProduct().then( result => {
        if(result.length!=0)
        res.status(200).json(result);
        else
        res.status(404).json({message: 'No such value exist'});

    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
    
});

router.patch('/:productName', (req, res, next) => {



    var UpdateProduct = function(){
        return new Promise(function(resolve,reject){
            
            const product={
                name: req.body.name,
                price: req.body.price
            }
            con.query("UPDATE `products` SET `price`= ? WHERE `name` =  ?",[product.price , product.name], function (err, result, fields) {
      
              if(err){                
                  return reject(err);
              }else{              
                  return resolve(result);
              }
      
          }); // query
        }); // Promise
      } // getDepartments

      UpdateProduct().then( result => {
        if (result.affectedRows>=1) {
            res.status(200).json(result);
        }
        else
        res.status(200).json({message: "Update imposible, object does not exist to begin with"}); 
       }).catch(err => {
      res.status(500).json({
          error: err
      });
  });
  
});

router.delete('/:productName', (req, res, next) => {


    var RemoveProduct = function(){
        return new Promise(function(resolve,reject){
            const Name = req.params.productName;
            con.query("DELETE FROM products WHERE `name` = ?", [Name], function (err, result, fields) {
      
              if(err){                
                  return reject(err);
              }else{              
                  return resolve(result);
              }
      
          }); // query
        }); // Promise
      } // getDepartments


      
      RemoveProduct().then( result => {
          if (result.affectedRows>=1) {
              res.status(200).json(result);
          }
          else
          res.status(200).json({message: "Remove imposible, object does not exist to begin with"}); 
         }).catch(err => {
        res.status(500).json({
            error: err
        });
    });

/*    con.query('DELETE FROM posts WHERE title = "wrong"', function (error, results, fields) {
        if (error) throw error;
        console.log('deleted ' + results.affectedRows + ' rows');
      })

    res.status(200).json({
        message: 'Deleteed'
    })*/
});

module.exports= router;



   // con.query("SELECT * FROM products  WHERE `name` = ?", [id], function (err, result, fields) {
   /*   if (err)
      {
        res.status_(500).json({
            error: err
        });
      }
      console.log(result);

   if (id === "special") {
       res.status(200).json({
           message: 'You discovered',
           id: id
       })
   }
   else
   {
    console.log(result.length);
       if(result.length==0)
       res.send('No such value exist');
       else{
       res.json(result);*/
      /*res.status(200).json({
        message: 'You Passed ID '+id,
        result: result
    })*/
    //   }

   //}

    //})