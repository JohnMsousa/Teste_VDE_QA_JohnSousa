export class BasePage {
    visit(path = "") {
        cy.visit(path);
    }

    waitForElement(selector, timeout = 10000) {
        cy.get(selector, { timeout }).should("be.visible");
        return this;
    }

    click(selector) {
        cy.get(selector).should("be.visible").click();
        return this;
    }

    type(selector, value) {
        cy.get(selector).should("be.visible").clear().type(value);
        return this;
    }

    shouldContainText(selector, text) {
        cy.get(selector).should("contain", text);
        return this;
    }

    shouldBeVisible(selector) {
        cy.get(selector).should("be.visible");
        return this;
    }

    shouldNotBeVisible(selector) {
        cy.get(selector).should("not.be.visible");
        return this;
    }

    wait(milliseconds) {
        cy.wait(milliseconds);
        return this;
    }

    scrollTo(selector) {
        cy.get(selector).scrollIntoView();
        return this;
    }

    shouldHaveUrl(url) {
        cy.url().should("include", url);
        return this;
    }
}
