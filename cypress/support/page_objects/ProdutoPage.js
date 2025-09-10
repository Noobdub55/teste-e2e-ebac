class ProdutoPage {

    buscaProduto(nomeProduto){
       const urlFormatada = nomeProduto.replace (/ /g, '-')
       cy.visit(`produtos/${urlFormatada}`)
    }

    addPodutoCarrinho(tamanho, cor, quantidade){
     cy.get('.button-variable-item-' + tamanho).click()
     cy.get('.button-variable-item-' + cor).click()
     cy.get('[name="quantity"]').clear().type(quantidade)
     cy.get('.single_add_to_cart_button').click()
    }

}

export default new ProdutoPage()