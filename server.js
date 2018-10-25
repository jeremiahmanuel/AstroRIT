const express=require('express');

const app=express();

app.use(express.static(__dirname+'/public'))

const port=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'public/index.html');
});

app.listen(port,()=>{
    console.log(`listening at localhost:${port}`);
});
