/// <reference types="cypress" />
import ProdutoPage from "../support/page_objects/ProdutoPage";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('minha-conta')
      cy.fixture('perfil').then(login => {
        cy.login(login.usuario , login.senha)
      })
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

   let produto1 = 'Abominable Hoodie'
   ProdutoPage.buscaProduto(produto1)
   ProdutoPage.addPodutoCarrinho('XL' , 'Green' , 1)

   let produto2 = 'Argus All-Weather Tank'
   ProdutoPage.buscaProduto(produto2)
   ProdutoPage.addPodutoCarrinho('S' , 'Gray' , 1)

   let produto3 = 'Troy Yoga Short'
   ProdutoPage.buscaProduto(produto3)
   ProdutoPage.addPodutoCarrinho('36' , 'Blue' , 1)

   let produto4 = 'Kenobi Trail Jacket'
   ProdutoPage.buscaProduto(produto4)
   ProdutoPage.addPodutoCarrinho('L' , 'Purple' , 1)

   cy.get('.dropdown-toggle > .text-skin ').click()
   cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
   cy.get('.checkout-button').click()

   cy.checkout('Luna', 
               'Esteves', 
               'Carrinhos Inc', 
               'Rua Papaya Lu, 452', 
               'Piraporinha', 
               '03268900', 
               '11958589739')
   cy.get('.page-title').should('exist')           
   
      
  });


})