const nodemailer=require("nodemailer");
const sendEmail=async(to,messageContent)=>{
    try{
        //create transporter
        const transporter=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:{
                user:'rohithurrah@gmail.com',
                pass:'fmjz reeh ffvd jcmd'
            }
        });

        //messsage obj
        const message={
            to,
            subject:"New Message from Nodemailer App",
            html:`<h3>You have received a new message from Nodemailer App</h3>
            <p>${messageContent}</p>`
        };

        //send the email
        const info=await transporter.sendMail(message);
        console.log("Email sent successfully");

    }catch(error){
        console.log(error);

    }
};

module.exports=sendEmail;