describe("payment", () => {
  it("user can make payment", () => {
    //login
    cy.visit("localhost:3000/");
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();
    // check Acount balance
    // click pay button
    // search for user
    //add amount and note and click pay
    // return to transaction
    // go to payment
    // verify payment success
    // verify remaining amount
  });
});
