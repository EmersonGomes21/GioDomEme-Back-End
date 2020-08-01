//request params são utilizados para buscar os dados das rotas requições que identificam um recurso ou entidade

//query params- para filtros, paginação etc
//Request body - para criar, atualizar dados etc
import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json()); // para o express poder interpretar dados em json
app.use(routes);

app.listen(3333, ()=>{
  console.log('API ONLINE');
});