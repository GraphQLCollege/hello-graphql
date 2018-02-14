describe("Page", function() {
  it("should say hello to the world", function() {
    cy.visit("http://localhost:3000");

    cy.get(".greeting").should("contain", "Hello world");
  });
});
