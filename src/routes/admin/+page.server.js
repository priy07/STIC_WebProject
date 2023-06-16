
// import { google } from 'googleapis'
// import nodemailer from 'nodemailer'


// const auth = new google.auth.GoogleAuth({
//     keyFile: './src/lib/secrete.json',
//     scopes: 'https://www.googleapis.com/auth/spreadsheets',
// });
// let client = auth.getClient()

// const googleSheets = google.sheets({ version: 'v4', auth: client })

// let spreadsheetId = '1Z63tCBZAq6h60fH45IUb6ejgec4iE0DbvSYQTvKxAS8'



// export async function load() {
//     let metadata = await googleSheets.spreadsheets.values.get({
//         auth,
//         spreadsheetId,
//         range: "A:C",
//         valueRenderOption: "FORMATTED_VALUE"
//     })
//     let mails_ = metadata.data.values

//     let mails = mails_.map((arr) => {
//         return arr[2]
//     })
//     console.log(mails)
//     return { mail: metadata.data.values }
// }


// async function getMails() {
//     let metadata = await googleSheets.spreadsheets.values.get({
//         auth,
//         spreadsheetId,
//         range: "A:C",
//         valueRenderOption: "FORMATTED_VALUE"
//     })
//     return metadata.data.values
// }


// async function mail() {
//     let testAccount = await nodemailer.createTestAccount();
//     let resp = await getMails()
//     let mails = resp.map((arr) => {
//         return arr[2]
//     })
//     let transporter = nodemailer.createTransport({
//         service: "gmail",
//         host: "smtp.gmail.com",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: "tiwaary10@gmail.com", // generated ethereal user
//             pass: "frofmwncouprccer", // generated ethereal password
//         },
//     });


//     let info = await transporter.sendMail({
//         from: 'tiwaary10@gmail.com', // sender address
//         to: mails, // list of receivers
//         subject: "Hello ✔",
//         html: "<b>Hello world?</b>", // html body
//     });

//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//     // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// mail().catch(console.error);