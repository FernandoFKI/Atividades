
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('form', { resultado: null });
});

app.post('/verificar', (req, res) => {
  const { lado1, lado2, lado3 } = req.body;
  const a = parseFloat(lado1);
  const b = parseFloat(lado2);
  const c = parseFloat(lado3);
  let resultado = "";

  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      resultado = "Triângulo Equilátero";
    } else if (a === b || a === c || b === c) {
      resultado = "Triângulo Isósceles";
    } else {
      resultado = "Triângulo Escaleno";
    }
  } else {
    resultado = "Medidas não formam um triângulo";
  }

  res.render('form', { resultado });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
