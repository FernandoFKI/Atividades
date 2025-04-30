const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/resultado', (req, res) => {
    const numero = parseInt(req.body.numero);
    let dia;

    switch (numero) {
        case 1: dia = "Domingo"; break;
        case 2: dia = "Segunda"; break;
        case 3: dia = "Terça"; break;
        case 4: dia = "Quarta"; break;
        case 5: dia = "Quinta"; break;
        case 6: dia = "Sexta"; break;
        case 7: dia = "Sábado"; break;
        default: dia = "Valor negado!";
    }

    res.render('resultado', { numero, dia });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});