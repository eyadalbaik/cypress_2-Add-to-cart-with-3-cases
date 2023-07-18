describe("log in" , ()=>{
    it ("test" , ()=>{
        cy.visit("https://codenboxautomationlab.com/practice/");

    
        // select all
         cy.get("input[type='checkbox']").check()
    

        //  cy.get("input[type='checkbox']").check(["option1","option2"])
    
        // check by index 
        // cy.get("input[type='checkbox']").eq(1).check();
    
        // select the first checkbox
        // cy.get("input[type='checkbox']").first().check();

    //    select the last checkbox
    //     cy.get("input[type='checkbox']").last().check();
    
        
    })
})
