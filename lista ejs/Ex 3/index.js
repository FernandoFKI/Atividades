
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('form', { dados: null }));

app.post('/', (req, res) => {
  const salario = parseFloat(req.body.salario);
  let percentual = 0;

  if (salario <= 1400) percentual = 15;
  else if (salario <= 4500) percentual = 10;
  else if (salario <= 10000) percentual = 7.5;
  else percentual = 5;

  const aumento = salario * (percentual / 100);
  const novoSalario = salario + aumento;

  res.render('form', {
    dados: {
      salario: salario.toFixed(2),
      percentual,
      aumento: aumento.toFixed(2),
      novoSalario: novoSalario.toFixed(2)
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
