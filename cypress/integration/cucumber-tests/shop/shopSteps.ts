import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import ShopHomePage from '../../../page-object-model/pages/ShopHomePage';

const shopHomePage = new ShopHomePage();

Given('I open shop home page', () => {
  shopHomePage.visitShopHomepage();
});

When('I click on category Women', function () {
  shopHomePage.clickCategoryWomen();
});

When('I click on category {string}', category => {
  shopHomePage.clickCategory(category);
});

Then('Title with category {string} should be displayed', category => {
  shopHomePage.checkCategoryTitle(category);
});
