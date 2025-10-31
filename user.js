// const express=require('express');
// const mysql=require('mysql');
// const cors=require('cors');
// const app=express();
// app.use(express());
// app.use(cors());

// const db=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',

// })
// if(error){
//     console.log("connection");
    
// }
// else{
//     console.log("connection ok");
    
// }
// app.get('/',req,res)=>{
//     db.query('SELECT* FROM user,(err,result)')=>
//     {

        
//         if (error) {
//             console.error(selectfail)
            
//         } 
//         res.status(500).send('internal servers,error');
            
//         }
        
        
//         res.json(result)
//     }





    




const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());  // For parsing JSON requests
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jean'  // Replace with actual DB name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("Connection failed:", err);
    } else {
        console.log("Connection successful");
    }
});

// Define a route
app.get('/', (req, res) => {
    db.query('SELECT * FROM user', (err, result) => {
        if (err) {
            console.error("Query failed:", err);
            return res.status(500).send('Internal server error');
        }

        res.json(result);
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

