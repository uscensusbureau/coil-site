const headers = [
  "coil-navbar-container",
  "coil-navbar-container-desktop",
  "main-content",
  "coil-logo",
  "our-work-section",
  "featured-projects-list",
  "project-item-statventures",
  "project-item-data-usability",
  "project-item-top",
  "project-card-group",
  "our-values",
  "capabilities",
  "collaborate-section",
  "footer-info",
];

describe('Homepage test', () => {
  it('contains ids for all projects and section titles', () => {
    cy.viewport(1024, 768);
    cy.visit('/');
    headers.forEach( header => cy.get(`#${header}`));
  })
  context("USWDS tablet:", () => {
    beforeEach(() => {
      cy.viewport(640, 1024);
      cy.visit('/');
    })
    it("contains ids for all projects and section titles", () => {
      headers.forEach((header) => cy.get(`#${header}`));
    });
  })

  context("USWDS mobile:", () => {
    beforeEach(() => {
      cy.viewport(340, 480);
      cy.visit('/');
    })
    it("contains ids for all projects and section titles", () => {
      headers.forEach((header) => cy.get(`#${header}`));
    });
  })

})

describe('Nav Menus', () => {
  context('USWDS desktop spec', () => {
    beforeEach(() => {
      // run these test as if in a USWDS defined desktop browser
      cy.viewport(1024, 720);
      cy.visit('/');
    })

    it('displays full header', () =>{
      cy.get(".usa-header--basic .usa-nav").should('be.visible');
      cy.get('.usa-navbar').should('not.be.visible');
    })
  })

  context("USWDS tablet spec", () => {
    beforeEach(() => {
      // run tests in an USWDS defined tablet sized viewport
      cy.viewport(640, 1024);
      cy.visit('/');
    })

    // it('')
  });

  context("USWDS mobile spec", () => {
    beforeEach(() => {
      // run tests in an USWDS defined mobile sized viewport
      cy.viewport(320, 480);
      cy.visit('/');
    })
    it('displays mobile hamburger menu', () => {
      cy.get(".usa-header--basic .usa-nav").should("not.be.visible");
      cy.get(".usa-navbar").should("be.visible");
    })

    it('displays mobile menu on click', () => {
      cy.get(".usa-header--basic .usa-nav").should(".not.be.visible");
      cy.get(".usa-navbar").should("be.visible").find("button.usa-menu-btn").click();

      cy.get("nav.usa-nav.is-visible").should("be.visible")
    })
  })
describe("Main content", () => {
  context("USWDS mobile spec", () => {
    beforeEach(() => {
      cy.viewport(360, 480)
      cy.visit("/")
    })
    it("displays mobile sections", () => {
      cy.get("#capabilities").should("be.visible")
    })
  })
})

})