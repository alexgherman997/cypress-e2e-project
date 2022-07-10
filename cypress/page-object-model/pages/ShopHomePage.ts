import BasePage from './BasePage';
/// <reference types="cypress-xpath" />

export default class ShopHomePage extends BasePage {
  private static categoryWomen: string = ".sf-menu a[title = 'Women']";
  private static categoryDresses: string =
    ".sf-menu .submenu-container a[title = 'Dresses']";
  private static categoryTShirt: string = ".sf-menu > li > a[title='T-shirts']";

  private static categortTitle: string = 'span.category-name';

  //working with array in Cy
  //adding first product if exists to the cart
  private static products: string = '.product_list li';

  public visitShopHomepage() {
    cy.visit('http://automationpractice.com/index.php');
  }

  public clickCategoryWomen() {
    cy.get(ShopHomePage.categoryWomen).click();
  }

  public clickCategory(category: string) {
    // category == 'Women'
    //   ? cy.get(ShopHomePage.categoryWomen).click()
    //   : cy.get(ShopHomePage.categoryDresses).click({ force: true });

    switch (category) {
      case 'Women':
        cy.get(ShopHomePage.categoryWomen).click();
        break;
      case 'Dresses':
        cy.get(ShopHomePage.categoryDresses).click({ force: true });
        break;
      case 'T-shirts':
        cy.get(ShopHomePage.categoryTShirt).click({ force: true });
        break;

      default:
        break;
    }
  }

  public checkCategoryTitle(category: string) {
    cy.get(ShopHomePage.categortTitle).should('contain', category);
  }

  public addFirstProductToCart() {}
}
