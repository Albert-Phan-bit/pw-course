import { test, expect } from '@playwright/test';

test ("Bài 2", async({page}) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator("//a[@href='02-xpath-product-page.html']").click();
    
    await page.locator("//button[@data-product-id='1']").click();

    await page.locator("//button[@data-product-id='1']").click();

    await page.locator("//button[@data-product-id='2']").click();

    await page.locator("//button[@data-product-id='2']").click();

    await page.locator("//button[@data-product-id='2']").click();
    
    await page.locator("//button[@data-product-id='3']").click();

});
