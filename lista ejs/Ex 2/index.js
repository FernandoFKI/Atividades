
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('form', { resultado: null }));

app.post('/', (req, res) => {
  const numero = parseInt(req.body.numero);
  const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const resultado = (numero >= 1 && numero <= 7) ? dias[numero - 1] : "Valor inválido!";
  res.render('form', { resultado });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
