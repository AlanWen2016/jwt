let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method.toLowerCase() === 'options'){
        return res.end();
    }
    next();
})
app.use(bodyParser.json());
let secret = 'secret';
app.get('/test',(req,res)=>{
    res.send({
        code:1,
        data:'just a test'
    })
})
app.post('/login',(req,res)=>{
   let {username} = req.body;
   if(username === 'admin'){ // 如果访问的是admin 种植cookie
        res.json({
            code:0,
            username:'admin',
            token:jwt.sign({username:'admin'},secret,{
                expiresIn:20
            })
        })
   }else{
       res.json({
           code:1,
           data:'用户名不存在'
       })
   }
});
app.get('/validate',(req,res)=>{
    let token = req.headers.authorization;
    jwt.verify(token,secret,(err,decode)=>{ // 验证token的可靠性
        if(err){
            return res.json({
                code:1,
                data:'token失效了'
            })
        }else{
            res.json({
                username:decode.username,
                code:0, // 延长token的过期时间
                token:jwt.sign({username:'admin'},secret,{
                    expiresIn:20
                })
            })
        }
    });
});


app.get('/',(req,res)=>{
    res.send('Current page')
})
app.listen(3000);
