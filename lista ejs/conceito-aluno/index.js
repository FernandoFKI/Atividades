
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('form', { resultado: null }));

app.post('/', (req, res) => {
  const nota1 = parseFloat(req.body.nota1);
  const nota2 = parseFloat(req.body.nota2);
  const media = (nota1 + nota2) / 2;

  let conceito = '';
  if (media > 9.0 && media <= 10.0) conceito = 'A';
  else if (media > 7.5) conceito = 'B';
  else if (media > 6.0) conceito = 'C';
  else if (media > 4.0) conceito = 'D';
  else conceito = 'E';

  res.render('form', {
    resultado: {
      nota1: nota1.toFixed(2),
      nota2: nota2.toFixed(2),
      media: media.toFixed(2),
      conceito
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
