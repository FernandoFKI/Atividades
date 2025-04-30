
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('form', { resultado: null }));

app.post('/', (req, res) => {
  const idade = parseInt(req.body.idade);
  let resultado = "";

  if (idade >= 5 && idade <= 7) resultado = "Infantil A";
  else if (idade >= 8 && idade <= 10) resultado = "Infantil B";
  else if (idade >= 11 && idade <= 13) resultado = "Juvenil A";
  else if (idade >= 14 && idade <= 17) resultado = "Juvenil B";
  else if (idade >= 18) resultado = "Sênior";
  else resultado = "Idade fora das categorias";

  res.render('form', { resultado });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
