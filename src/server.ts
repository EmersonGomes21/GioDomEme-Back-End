import express from 'express';
const app = express();

app.get('users', ()=>{
  console.log('Listagem de usúarios');
}); 

app.listen(3333, ()=>{
  console.log('API ONLINE');
});