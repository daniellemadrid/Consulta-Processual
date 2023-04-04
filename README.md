Desafio: Consulta Processual
===

Oii, tudo bem? Seja bem vindo a Busca de Processos. 

A linguagem usada neste projeto é Javascript com framework React.js e Next, os testes são com Jest(unitários) e Cypress (e2e).

## 1. Iniciando o projeto 

Para começar, rode:

`npm install`

`npm run dev`

*Irá rodar no caminho: `http://localhost:3000/`*

Para rodar os testes unitários do front-end, rode em um segundo terminal:

`npm run test`


Para rodar o testes e2e cypress, você pode rodar o comando no segundo terminal ou criar um terceiro :

`npx cypress run`
   

## 2. Overview

A arquitetura do projeto possui 4 pastas principais:

1. components: onde fica os componentes do projeto para serem reutilizados 
2. mock: onde fica os dados mockados e utilizados pelo projeto, que seriam os Tribunais (courtMock.json) e os dados das movimentações (processesMock.json)
3. pages: onde renderiza e reutiliza os componentes criados, por exemplo a pasta process que contém a tela de exibição
4. store: responsável por consumir os dados dos mocks e compartilhar dados entre components (guardar estado)


Na home o usuário tem a opção de buscar por número de CNJ de um processo e por um tribunal especifico do CNJ.
O usuário pode também refazer a operação de busca em qualquer outra página a partir do Header da página.

Testes unitários são realizados nos componentes e nas páginas para verificar o uso ideial deles e renderização na tela. O fluxo de sucesso e erros é testado a partir do teste cypress e2e que se encontra no caminho `cypress\e2e\spec.cy.js`


## 3. Mocks

Existem alguns dados mockados dentro de `processMock.json`, localizado em `src/mock`, eles deverão ser utilizados como meio de busca, sendo assim, irei disponibilizar todos os ID's disponíveis para facilitar o uso da aplicação:

Processo n° 1 = CNJ: 1508252-80.2023.4.04.0058 | Tribunal: TJSP

Processo n° 2 = CNJ: 2968371-16.2023.2.00.1120 | Tribunal: TJMG

Processo n° 3 = CNJ: 8065227-04.2023.5.18.2672 | Tribunal: TJRS

Processo n° 4 = CNJ: 7596542-92.2023.5.22.8364 | Tribunal: TJSC

Processo n° 5 = CNJ: 1607604-38.2023.5.14.3715 | Tribunal: TJPR

## 4. Decisões 

Se tiver alguma dúvida sobre as decisões por favor acesse o arquivo mais detalhado:
`HISTORY.MD`
[https://github.com/daniellemadrid/Consulta-Processual/blob/main/HISTORY.MD]
