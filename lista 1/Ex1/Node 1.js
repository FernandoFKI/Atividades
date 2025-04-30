const express = require('express'); 
const app = express(); const port = 3000;


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));



function classificarNadador(idade){
 
    
if (idade >= 5 && idade <= 7)return 'Infantil A';
if (idade >= 8 && idade <= 10) return 'Infantil B';
if (idade >= 11 && idade <= 13) return 'Juvenil A';
if (idade >= 14 && idade <= 17) return 'Juvenil B'; 
if (idade >= 18) return 'Sênior'; 
return 'Fora da faixa etária';

}


app.get('/', (req, res) => { res.render('index', { categoria: null });

});
// Rota para processar o formulário

app.post('/classificar', (req, res) => { const idade = parseInt(req.body.idade, 10); 
const categoria = classificarNadador(idade);

res.render('index', { categoria });

});


 

