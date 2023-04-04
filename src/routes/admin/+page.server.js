import fs from 'fs'
import { google } from 'googleapis'


try {
    fs.readFile('./src/lib/secrete.json', (err, data) => {
        console.log(data);
    });
}
catch (e) {
    console.log(e)
}

const auth = new google.auth.GoogleAuth({
    keyFile: './src/lib/secrete.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
});
let client = auth.getClient()

export function load() {
    console.log(client)
}