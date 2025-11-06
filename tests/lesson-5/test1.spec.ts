import { test, expect } from '@playwright/test';

test("Bài 1", async ({page}) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator("//a[@href='01-xpath-register-page.html']").click();

    await page.locator("//input[@id='username']").fill("Quoc");

    await page.locator("//input[@id='email']").fill("a@gmail.com");
    
    await page.locator("//input[@id='male']").check();

    await page.locator("//input[@id='reading']").check();

    await page.locator("//input[@id='traveling']").check();

    await page.locator("//select[@id='interests']").selectOption({value: "art"});

    await page.locator("//select[@id='country']").selectOption({value: "canada"});

    await page.locator("//input[@id='dob']").fill("2000-12-11");
    
    await page.locator("//textarea[@id='bio']").fill("Nothing!");

    await page.locator("//button[@type='submit']").click();
});