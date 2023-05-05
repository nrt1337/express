const express = require("express");
const app = express();
const restAPI = require('./router/rest');
const HOST = "127.0.0.1";
const PORT = 8000;


app.use(express.static('public'));
app.use("/v1", restAPI);

app.listen(PORT, HOST, () => {
  console.log(`Сервер запущен http://${HOST}:${PORT}`);
});

app.use((req, res) => {
	res.status(404).send('Данная страница не найдена!');
});

app.use((err, req, res) => {
	res.status(500).send('Ошибка сервера')
});