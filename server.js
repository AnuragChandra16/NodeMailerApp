const express=require('express');
const sendEmail = require('./utils/sendemails');
const app=express();
const PORT=process.env.PORT || 9000;

//set engine
app.set('view engine', 'ejs');
//serve static assets
app.use(express.static("public"));
// pass the data from form
app.use(express.urlencoded({ extended: false }));

//route to render email from
app.get('/',(req,res)=>(
    res.render('emailform')
))
//route to send the email
app.post("/send-email",async(req,res)=>{
    const{email,message}=req.body;
    try{
        await sendEmail(email,message);
        res.render('emailform',{
            status:'success',
            message:'Email sent successfully'
        })
    }
    catch(error){
        console.log(error);
        res.render('emailform',{
            status:'failure',
            message:'Email not sent successfully'
        })
    }
});
//start
app.listen(PORT,console.log(`Server is running on ${PORT}`))