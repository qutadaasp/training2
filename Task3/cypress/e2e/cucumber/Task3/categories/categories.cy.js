import {Given,When,Then  } from "cypress-cucumber-preprocessor/steps";

Given("The user navigate to magento website",()=>{
       cy.visit("/")
})
When("Click on What's New",()=>{
    cy.get("li a").contains("span", "What's New").click()
  
})

Then("Open What's New Page",()=>{
    let counter = 0
    //cy.get(".categories-menu").get("ul.items li.item a")
    cy.get(".categories-menu ul.items li.item").then((names)=>{
    for(let i=0;i<names.length;i++){
        
        if(counter<6){
            counter++
            cy.wrap(names[i]).invoke("text").then((productname)=>{
                cy.log(productname)
            })
        }
            
        
      
    }
})
    cy.get(".page-title").contains("span","What's New")

})