const { test,expect} = require("@playwright/test");
const Validlogin = require("../page-object/Validlogin");
const Invalidlogin = require("../page-object/Invalidlogin");
const users=require("../test-data/users.json");

test('Valid user login test',async({page})=>{
    
    const login= new Validlogin (page);
     await login.goto();
     await login.validLogin(users.validUser.email, users.validUser.password);
     await login.assertWelcomeMessage();
})

test('Invalid user login test',async({page})=>{
    
    const login1= new Invalidlogin (page);
     await login1.goto();
     await login1.invalidLogin(users.invalidUser.email, users.invalidUser.password);
     await login1.assertErrorMessage();
    

})


test('should navigate back to home when clicking Back to Home', async ({ page }) => {
    const login = new Validlogin(page);

    await login.goto();
    await login.backToHomeButton.click();

     await login.assertTitleText();
    
  })
  


