import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

describe("Should validate login feature",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/v1/index.html")
    })
    it("validate login for correct credentials",()=>{
        LoginPage.login("standard_user","secret_sauce")
        cy.wait(3000)
        InventoryPage.addItemToCartByName("Sauce Labs Onesie")
        InventoryPage.addItemToCartByIndex(2)
        InventoryPage.sortProductViaIndex(1)
        cy.log(InventoryPage.getAllItemsName())
    })
})