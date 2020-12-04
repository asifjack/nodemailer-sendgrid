// const sgMail =  require("@sendgrid/mail");


const key = "put key here";


// sgMail.setApiKey(key);


// const msg = {
//     to:"mdasifwr@gmail.com",
//     from:"asifsohaji@gmail.com",
//     subject:"test send grid",
//     text:"hi hello",
//     html:"<strong>put in strong</strong>"
// }
// sgMail.send(msg)
// .then(response=>{console.log("message send")
// console.log(response);})
// .catch(error=>console.log(error))


const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const transport = nodemailer.createTransport(nodemailerSendgrid({
    apiKey:key
}))

transport.sendMail({
    from:'asifsohaji@gmail.com',
    to:'mdasifwr@gmail.com',
    subject:'Hello World From nodemailer and sendgrid',
    html:'<h1>Good Nice</h1>'

})
.then(response=>console.log(response))
.catch(error=>console.log(error))



























