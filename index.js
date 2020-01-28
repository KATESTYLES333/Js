const express = require('express');
const app = express();

app.get('/',(req, res) =>{
res.send('hell');
});

// app.listen(1488, function(){
//     console.log('well done');
// });

// const reqTime = (req, res, next)=>{
//     req.reqTime = Date.now('success');
//     next();
// };

// app.use(reqTime);

// app.get('/', (req, res)=>{
//     const resText = 'app get';
//     resText += 'Requested at: ' + req.reqTime;
//     res.send(resText);
// });

app.listen(1888);