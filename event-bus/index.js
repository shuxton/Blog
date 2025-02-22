const express=require('express');
const bodyParser=require('body-parser')
const axios=require('axios')
const cors=require('cors');
const app=express();

app.use(bodyParser.json());
app.use(cors())

const events=[];

app.get('/posts',(req,res)=>{
res.send(posts);
});

app.post('/events',(req,res)=>{
const event=req.body;

events.push(event)

axios.post('http://posts-clustership-srv:4000/events',event);
axios.post('http://comments-srv:4001/events',event);
axios.post('http://query-srv:4002/events',event);
axios.post('http://moderation-srv:4003/events',event);

res.send({status:'OK'});

});

app.get('/events',(req,res)=>{
    res.send(events);
})

app.listen(4005,()=>{
    console.log("Listening on 4005");
});