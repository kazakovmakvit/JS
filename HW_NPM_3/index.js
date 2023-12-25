'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


const updateCounterValue = function updateCounter(data) {
    fs.writeFileSync(path.join(__dirname, 'public', 'data.json'), JSON.stringify(data));
}
const counterValue = JSON.parse(fs.readFileSync('public/data.json').toString());

app.get('/', (req, res) => {
    counterValue.main = counterValue.main + 1;
    updateCounterValue(counterValue);
    res.send(`Home Page<br>Views: ${counterValue.main}<br><a href="/about">About</a>`);
});

app.get('/about', (req, res) => {
    counterValue.about = counterValue.about + 1;
    updateCounterValue(counterValue)
    res.send(`About Page<br>Views: ${counterValue.about}<br><a href="/">Main Page</a>`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
