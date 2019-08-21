const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;


const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./routes/api-routes.js")(app);


db.sequelize.sync({ force: true }).then(function () {
    db.Customers.create({
        customer_name: 'Gordan Ramsey',
    });
    db.Burgers.create({
        burger_name: 'The Regular Burger and Cheese',
        CustomerId: 1,
    });
    db.Burgers.create({
        burger_name: 'Bacon Burger',
        CustomerId: 1,
    });
    app.listen(PORT, function () {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});