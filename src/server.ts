//request params são utilizados para buscar os dados das rotas requições que identificam um recurso ou entidade

//query params- para filtros, paginação etc
//Request body - para criar, atualizar dados etc
import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();
app.use(express.json()); // para o express poder interpretar dados em json
app.use(routes);
app.use('/uploads/img_products', express.static(path.resolve(__dirname,'..', 'uploads', 'img_products')))

app.listen(3333, ()=>{
  console.log('API ONLINE');
});