import express from 'express'

const app = express();

const articleInfo = [
    {name:'learn-react',upvotes:0},
    {name:'learn-node',upvotes:0},
    {name:'mongodb',upvotes:0},
]

app.use(express.json())

// app.get('/hello', function(req,res){
//     res.send('Hello from GET endpoint!')
// })

// app.get('/hello/:name', function(req,res){
//     res.send('Hello, ' + req.params.name)
// })

// app.post('/hello',function(req,res){
//     res.send('Hello, '+ req.body.name + ' from POST endpoint!')
// })

app.post('/api/articles/:name/upvote', (req,res)=>{
    const article = articleInfo.find(a => a.name === req.params.name)
    article.upvotes+=1

    res.send('Hooray! The article ' + req.params.name + ' now has ' + article.upvotes + ' upvotes now')
})


app.listen(8000, function(){
    console.log('Server is listening on port 8000')
})

