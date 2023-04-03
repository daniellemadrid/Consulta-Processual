## Reflexões e decisões


## Frontend

Eu pensei primeiro em como iria montar a estrutura, me veio em mente a estrutura Atomic Design mas logo pensei em algo mais simples já que o projeto não seria tão complexo. Então acabei criando componentes com arquivos de testes juntos em cada pasta. 
Construí com Next pois é uma ferramenta nova que me possibilita ter mais praticidade em desenvolver, por exemplo: com ele consegui criar rotas a partir de um arquivo ou pasta dentro de src/pages. (tudo o que for criado dentro de pages é interpretado como um endpoint), caso seja criado um arquivo chamado jusBrasil dentro de src/pages, será possível acessar direto no navegador.

Criei os componentes e chamei para duas páginas criadas, src/pages/home para buscar e src/pages/process para exibir, me baseei pelas imagens fornecidas pelo repositório e criei validações para o input de texto ser obrigatório e enviar o cnj de forma válida junto com o tribunal correspondente.

Usei Tailwind para estilizar o projeto pois estou aprendendo e pareceu uma ótima oportunidade para aplicar. Os ganhos com a utilização do mesmo são notáveis, os quais são: praticidade em poder manter em um arquivo só, ou seja, não é necessário a criação de arquivos CSS para cada página e/ou componente.

## Backend

No backend é utilizado Mocks e Zustand para a criação de Stores. 
Zustand é uma biblioteca open source que neste projeto teve a finalidade de compartilhar dados entre components e pages, assim como, um useContext. A diferença entre Zustand e um useContext está na escalabilidade e praticidade presente no Zustand, dentro da store de process.js é possível localizar o que corresponderia a um GET convencional. Lá dentro tem o equivalente a um findUnique de um banco de dados comum que retorna os dados selecionados com base em sua pesquisa, porém, como está sendo utilizado Mocks, foi feito find dentro da Store de process para consumir o Mock de processos e verificar se os dados que o usuário informou estão corretos e devolver o processo que corresponde ao cnj e tj inseridos. Esses dados são enviados para a página de process (src/pages/process/index) responsável por renderizar as movimentaçãoes e dados dos processos.

Pensando em aproximar a solução utilizando Mocks em algo mais realista, foi criado dois arquivos, um deles sendo responsável por armazenar os dados dos tribunais e o outro responsável por guardar os processos, cada tribunal tem um id e cada processo carrega o id de um tribunal. Sendo assim, a simulação de uma relação entre tabelas Many To One (muitos processos para um tribunal).


## Testes e outros

Para testes unitários eu usei Jest e Testing-Library, então cada componente tem seu respectivo teste para verificar a renderização na tela e as páginas, criei testes para verificar se as validações que citei estavam funcionando. 
Usei o Cypress para testar o fluxo do projeto pensando nas validações também. Não testei muito sobre os componentes da tela com Cypress porque o Jest já está fazendo isso. 

## Ideias 
Se eu pudesse, persistiria os dados com banco de dados real para substituir os Mocks criados e com isso conseguir utilizar 100% do potencial do Next, já que ele é um framework feito para facilitar a construção de projetos onde o frontend e backend se encontram no mesmo repositório, encurtando vários processos. Passaria para Atomic Design pensando mais a longo prazo e escalabilidade do projeto, pensaria em novos cenários de testes para ter uma maior garantia de cobertura e qualidade do projeto.



