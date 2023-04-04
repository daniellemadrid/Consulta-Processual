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
    cy.get('[data-testid="button"]').click()
    cy.url().should('eq', 'http://localhost:3000/process')
    cy.get('[data-testid="processNumber"]').should('be.visible');
    cy.contains('Distribuído em:').should('be.visible');
    cy.contains('Movimentações').should('be.visible');
    cy.contains('Detalhes do processo').should('be.visible');
    cy.contains('Endereço do tribunal').should('be.visible');
    cy.contains('Valor a ser pago').should('be.visible');
    cy.contains('Partes envolvidas').should('be.visible');

  });

  it('error when trying to send empty input ', () => {
    cy.get('[data-testid="button"]').click()
    cy.contains('Digite um número de processo');

  });

  it('error when trying to send empty dropdown', () => {
    cy.get('[data-testid="input"]').type('2968371-16.2023.2.00.1120');
    cy.get('[data-testid="button"]').click()
    cy.contains('Selecione um tribunal');

  });

  it('error sending process with wrong court ', () => {
    cy.get('[data-testid="input"]').type('2968371-16.2023.2.00.1120');
    cy.contains('Tribunais').click()
    cy.contains('TJSP').click()
    cy.get('[data-testid="button"]').click()
    cy.contains('Processo não existe no tribunal selecionado');

  });


  it('shows error when process is not found with cnj', () => {
    cy.get('[data-testid="input"]').type('22344');
    cy.contains('Tribunais').click()
    cy.contains('TJPR').click()
    cy.get('[data-testid="button"]').click()
    cy.contains(
      'Número do processo não encontrado'
    );
  });
})



