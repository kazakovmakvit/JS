'use strict';

const http = require('http');
const dateCountRouts = {
    '/': 0,
    '/about': 0,
    '404': 0
}
const serverLocal = http.createServer((req, res) => {

    if (req.url === '/') {
        dateCountRouts['/']++;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<h1>Главная страница</h1>');
        res.write('<a href="/about">Гиперссылка на страницу "О сайте"</a>');
        res.write(`<p>Количество просмотров: ${dateCountRouts['/']}</p>`);
        res.end();
    } else if (req.url === '/about') {
        dateCountRouts['/about']++;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<h1>Страница "О сайте"</h1>');
        res.write('<a href="/">Гиперссылка на главную страницу</a><br>');
        res.write(`<p>Количество просмотров: ${dateCountRouts['/about']}</p>`);
        res.write('<a href="/somelink">Гиперссылка на несуществующую страницу</a>');
        res.end();
    } else {
        dateCountRouts['404']++;
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<h1>404 Not Found</h1>');
        res.write(`<p>Количество просмотров: ${dateCountRouts['404']}</p>`);
        res.write('<a href="/">Гиперссылка на главную страницу</a>');
        res.end();
    }
});
serverLocal.listen(3000);