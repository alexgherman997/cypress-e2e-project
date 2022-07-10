export default class BasePage {
  public pause(ms: number) {
    cy.wait(ms);
  }

  public logInfo(message: string) {
    cy.log(message);
  }

  public setMobileViewport() {
    cy.viewport('iphone-x');
  }

  public setTableViewport() {
    cy.viewport('ipad-2');
  }

  public setDesktopViewport() {
    cy.viewport('macbook-13');
  }

  public setLargeDesktopViewport() {
    cy.viewport(1980, 1080);
  }
}
