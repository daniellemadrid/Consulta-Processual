describe('home page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home');
  });
  it('sucess case', () => {
    cy.contains('Busca de processos').should('be.visible')
    cy.get('[data-testid="input"]').type('2968371-16.2023.2.00.1120');
    cy.contains('Tribunais').click()
    cy.contains('TJMG').click()
    cy.get('[data-testid="button"]').click()
    cy.url().should('eq', 'http://localhost:3000/process')

  });

  it('error when trying to send empty input ', () => {
    cy.get('[data-testid="button"]').click()
    cy.contains('Preencha pelo menos um dos campos');

  });

  it('show error when format input is wrong', () => {
    cy.get('[data-testid="input"]').type('23456');
    cy.get('[data-testid="button"]').click()
    cy.contains(
      'Por favor digite um código com o formato NNNNNNN-NN.NNNN.N.NN.NNNN'
    );
  });

  it('show error when format input is wrong', () => {
    cy.get('[data-testid="input"]').type('2968371-16.2023.2.00.1120');
    cy.contains('Tribunais').click()
    cy.contains('TJPR').click()
    cy.get('[data-testid="button"]').click()
    cy.contains(
      'Selecione pelo menos um tribunal relacionado a este CNJ'
    );
  });
})

describe('process page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/process');
  });
  it('sucess case', () => {
    cy.get('[data-testid="input"]').should('be.visible');
    cy.contains('Tribunais').should('be.visible');
    cy.get('[data-testid="button"]').should('be.visible');
    cy.contains('Processo n. do').should('be.visible');
    cy.contains('Movimentações').should('be.visible');
    cy.contains('Detalhes do processo').should('be.visible');
    cy.contains('Partes envolvidas').should('be.visible');
  });

  it('has no movements without researching a process', () => {
    cy.contains('Nenhuma movimentação encontrada').should('be.visible');
  });


})



