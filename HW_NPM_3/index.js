const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
port = 3000;


app.use(express.json());

app.get('/users', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
    res.send({data});
});

app.post('/users', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
    data.push({id:data.length + 1, ...req.body});
    fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data));
    res.send({data});
});

app.put('/users/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
    const index = data.findIndex(user => user.id === parseInt(req.params.id));
    data[index] = {id: req.params.id, ...req.body};
    fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data));
    res.send({data});
});

app.delete('/users/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
    const index = data.findIndex(user => user.id === parseInt(req.params.id));
    data.splice(index, 1);
    fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data));
    res.send({data});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
