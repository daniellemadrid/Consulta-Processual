# Desafio: Consulta Processual

Oii, tudo bem? Seja bem vindo a Busca de Processos. 

A linguagem usada neste projeto é Javascript com framework React.js e Next, os testes são com Jest(unitários) e Cypress (e2e).

## 1. Iniciando o projeto 

Para começar, rode:

`npm install`

`npm run dev`

*Irá rodar no caminho: `http://localhost:3000/`*

*por favor, adicione /home no final do caminho*


Para rodar os testes unitários do front-end, rode em um segundo terminal:

`npm run test`


Para rodar o testes e2e cypress, você pode rodar o comando no segundo terminal ou criar um terceiro :

`npx cypress run`
   

## 2. Overview

A arquitetura do projeto possui 4 pastas principais:

1. components: onde fica os componentes do projeto para serem reutilizados 
2. mock: onde fica os dados mockados e utilizados pelo projeto, que seriam os Tribunais (courtMock.json) e os dados das movimentações (processesMock.json)
3. pages: onde renderiza e reutiliza os componentes criados, existe a home (tela de busca) e a process(tela de exibição)
4. store: que faz o uso de dados do processo para mostrar na tela de exibição 


Na home o usuário tem a opção de buscar por número de CNJ de um processo e por um tribunal especifico do CNJ.
O usuário pode também refazer a operação de busca em qualquer outra página a partir do Header da página.

Testes unitários são realizados nos componentes e nas páginas para verificar o uso ideial deles e renderização na tela. O fluxo de sucesso e erros é testado a partir do teste cypress e2e que se encontra no caminho `cypress\e2e\spec.cy.js`

## 3. Decisões 

Se tiver alguma dúvida sobre as decisões por favor acesse o arquivo mais detalhado:
`HISTORY.MD`


