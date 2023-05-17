const express = require('express');
const app = express();




app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/about.html');
 res.sendFile(__dirname + '/index.html');
 
});




app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});