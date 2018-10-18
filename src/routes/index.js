const path = require('path');

module.exports = (app) => {

  app.get("/", (req, res) => {
    console.log("this is working");
    return res.status(200).sendFile(path.join(__dirname, '../view/home.html'));
  });

  app.post('/', (req, res)=>{
   console.log("email: "+req.body.email+" and password: "+req.body.password);
   res.status(200).send("details logged in the server console");
  });

}
