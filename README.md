<html>
<h1> GioDomEme-Back-End </h1> 
<h2> Backend do projeto dashboard  para gerenciar os processos adm do posto de combustível  Integral, no Paraguay. </h2>
  <h2> Entidades    | Rotas feitas</h2>
  <h3> Products     | create, index e show </h3>                
  <h3> Clients      | create, index e show </h3>              
  <h3> Users        | create, index e show </h3>            
  <h3> Providers    | create, index e show </h3>            
  
  <h2> Como rodar o projeto. </h2>
  
   <h2> Instale todas as dependências com <b> npm install</b> </h2>
    <h3> O Banco de dados mysql3 foi utilizado justamente por ser mais simples no momento do desenvolvimento e não precisar instalar softwares extremanente pesados para que possamos visualizar nosso banco de dados. </h3>
    <h2> Para "padronizar" as query's utilizou-se o <a href="http://knexjs.org/"> KNEX.js </a>, fazendo possível escrever os comandos sql em javascript, comandos estes que serão compativeis com o Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle e outros. <h2> 
  <h3> Aliás, não é necessário instalar o Knex pelo site oficial, o <b> npm install </b> já resolve </h3>
  
  </br>
  
  <h2> No terminal do Projeto</h2>
    <p> Caso queira visualizar as tabelas criadas, instale a extensão <b>SQlite<b/> no VSCode </p>
  <p> Selecione o arquivo <b>database.sqlite</b> com o botão direito do mouse e escolha a opção <b> Open Database </b. Irá aparecer uma nova opção <b> SQLITE EXPLORER </b> na parte inferior a esquerda do editor de texto (contendo todas as tabelas criadas), selecione uma e clique em SHOW table.</p>
  
  <h1> Iniciando o servidor</h1>
  
  <p> Execute o servidor com o comando <b> npm run dev</b> </p> 
  
  <h2> Por fim, basta importar as rotas e testar-las utilizando o software <a href="https://insomnia.rest/">Insominia</a>. </h2>
   
<h1> Codando.. </h1>
  <h2>  <> Rota para upload <> </h2> 
  <h2> <> Delete de cada entidade <> </h2> 
     <h2> <> Middlewares <> </h2> 

<a href="https://github.com/gioinsfran1998/GioDom-FrontEnd-Web"> Front-End do Projeto</a>

</html>
