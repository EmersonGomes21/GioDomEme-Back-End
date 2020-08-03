<html>
<h1> GioDomEme-Back-End </h1> 
<h2> Backend do projeto dashboard  para gerenciar os processos adm do posto de combustível  Integral, no Paraguay. </h2>
<h1> Rotas create, index e show de Products, Clients, Users, Providers já estão feitas.</h1>
  
  <h1> Como rodar o projeto. </h1>
  
   <h2> instale todas as dependências com <b> npm install</b> </h2>
    <p> Também se faz necessário configurar o banco de dados, o mysql3 que foi utilizado justamente por ser mais simples no momento do desenvolvimento e não precisar instalar softwares extremanente pesados para que possamos visualizar nosso banco de dados. </p>
    <h2> Para "padronizar" as query's utilizou-se o <a href="http://knexjs.org/"> KNEX.js </a>, fazendo possível escrever os comandos sql em javascript, comandos estes que serão compativeis com o Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle e outros. <h2> 
  <h3> Aliás, não é necessário instalar o Knex pelo site oficial, o <b> npm install </b> já resolve </h3>
  
  </br>
  
  <h2> No terminal do Projeto, pasta Backend </h2>
    <p> Execute <b> npm knex:migrate </b> para iniciar as MIGRATIONS (usadas para automatizar a criação do banco de dados), após concluído corretamente, caso queira visualizar as tabelas criadas, instale a extensão <b>SQlite<b/> no VSCode </p>
  <p> Execute o comando <b> Ctrl + shift + p </b> para abrir o atalho de pesquisa e procure por <b> SQlite: Open Database </b>, depois selecione também <b>database.sqlite</b>  que foi o banco criado ao executar o arquivo de Migrations. Irá aparecer uma nova opção <b>SQlite explorer</b> na parte inferior a esquerda do editor de texto (contendo todas as tabelas criadas).</p>
  
  <h1> Iniciando o servidor</h1>
  
  <p> execute o servidor com o comando <b> npm run dev</b> </p> 
  
  <h2> Por fim, basta importar as rotas e testar-las utilizando o software <a href="https://insomnia.rest/">Insominia</a>. </h2>
   
<h1> Codando.. </h1>
  <h2>  <> Rota para upload <> </h2> 
  <h2> <> Delete de cada entidade <> </h2> 

<a href="https://github.com/gioinsfran1998/GioDom-FrontEnd-Web"> Front-End do Projeto</a>

</html>
