import Product from "./Product"

class InventoryPage{
    allElementNameLocator(){
        return cy.get('.inventory_item_name')
    }
    allInventoryItems(){
        return cy.get('.inventory_item')
    }
    sortProductButton(){
        return cy.get('.product_sort_container option')
    }
    itemNameList=[]

    getAllItemsName(){
        this.allElementNameLocator().then($element=>{
            cy.wrap($element).invoke('text').then(text=>{
                this.itemNameList.push(text)
            })
        })
        return this.itemNameList
    }
    getInventoryItemByName(name){
        cy.contains('div',name).invoke('text').then(text=>{
            cy.log(text)
        })
               
    }
    addItemToCartByName(name){
        cy.contains('div',name).parents('.inventory_item')
            .find('button').click()
    }
    addItemToCartByIndex(index){
        this.allInventoryItems().eq(index)
            .find('button').click()
    }
    sortProductViaIndex(index){
        this.sortProductButton().eq(index).click({force:true})
    }
}
export default new InventoryPage();