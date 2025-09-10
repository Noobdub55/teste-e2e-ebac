

Cypress.Commands.add('login', (usuario, senha) => {
   cy.get('#username').type(usuario)
   cy.get('#password').type(senha)
   cy.get('.woocommerce-form > .button').click()
   cy.get('#primary-menu > .menu-item-629 > a').click()
});

Cypress.Commands.add('checkout',(nome, sobrenome, empresa, endereco, cidade, cep, telefone) =>{
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_company').clear().type(empresa)
    cy.get('#billing_address_1').clear().type(endereco)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(telefone)
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
} )

