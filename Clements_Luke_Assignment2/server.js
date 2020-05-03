var express = require('express'); // creates 'express' variable that set to run express
var app = express(); // creates 'app' variable that set to start up express
var myParser = require("body-parser");

const queryString = require('query-string');
var stringifiedFormData;

// Uses function to check if string is a non-negative integer
function isNonNegInt(q, return_errors = false) {
    errors = []; // assume no errors at first
    if (q == '')
        q = 0; // handle blank inputs as if they are 0
    if (Number(q) != q)
        errors.push('<font color="red">Not a number!</font>'); // Check if string is a number value
    if (q < 0)
        errors.push('<font color="red">Negative value!</font>'); // Check if it is non-negative
    if (parseInt(q) != q)
        errors.push('<font color="red">Not an integer!</font>'); // Check that it is an integer
    return return_errors ? errors : (errors.length == 0);
}

// Initializes express
app.all('*', function (request, response, next) {
    console.log(request.method + ' to ' + request.path);
    // Logs request method and path to the console;
    next();
});

data = require('./public/product_data.js');

app.use(myParser.urlencoded({ extended: true }));

app.post("/purchase", function (req, res) {
    // generate invoice if quantites are valid otherwise send back to product page
    stringifiedFormData = queryString.stringify(req.body);
    //Here redirecting it to the login page
    res.redirect('./login.html');
    // posts data from the process form, action being 'process_purchase'
    // validate quanities from purchase page
    /*var hasvalidquanities = true;
    if (hasvalidquanities)
        res.redirect('./invoice.html?'+ stringified);
    else
        res.redirect('./product_page.html?'+ stringified);
     */
});

app.post("/login", function (req, res) {
    if ((req.body.username == "itm352") && (req.body.password == "grader"))
        res.redirect('./invoice.html?'+ stringifiedFormData);
    else {
        var stringified = queryString.stringify(req.body);
        res.redirect('./login.html?'+ stringified + '&LogError');
    }
});

app.post("/register", function (req, res) {
    var stringifye = queryString.stringify(req.body);
    var str = req.body.email.toString();
    var nam=req.body.username.toString();
	var emailAccount = str.split('@')[1];
    if (req.body.password === req.body.confirmpsw)
    {
		if(nam=="itm352")
        res.redirect('./register.html?'+ stringifye + '&errors=Username already exists&usererrors= Username already exists');
        if((emailAccount == "gmail.com") || (emailAccount == "yahoo.com") || (emailAccount == "outlook.com" || (emailAccount == "hotmail.com") || (emailAccount == "hawaii.edu")))
            res.redirect('./invoice.html?'+ stringifiedFormData);
        else
            res.redirect('./register.html?'+ stringifye + '&errors=Email ID&emailerrors=Email address is nvalid');
    }
    else
    {
        if((emailAccount == "gmail.com") || (emailAccount == "yahoo.com") || (emailAccount == "outlook.com" || (emailAccount == "hotmail.com") || (emailAccount == "hawaii.edu")))
            res.redirect('./register.html?'+ stringifye + '&errors=Passwords do not match&passerrors=Passwords do not match' +
            '&confirmerrors=Passwords do not match');
    else
        res.redirect('./register.html?'+ stringifye + '&errors=Password, Confirm Password and Email ID&passerrors=' +
            'Passwords did not match&confirmerrors=Passwords did not match&emailerrors=Email address is invalid');
}
});

app.use(express.static('./public')); // sets up middleware, uses express and pulls files from public folder

app.listen(8080, () => console.log('server listening on port 8080')); // server listens on port 8080, outputs message logged in console
