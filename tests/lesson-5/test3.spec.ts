import { test, expect } from '@playwright/test';

test ("Bài 3", async({page}) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    
    for (let i = 1; i < 101; i++) {
        
        await page.locator("//input[@id='new-task']").fill(i.toString());

        await page.locator("//button[@id='add-task']").click();
    };

    page.on('dialog', async dialog => await dialog.accept());

    for (let i = 1; i < 101; i++) {
        
        
        if(i % 2 !== 0) {
            await page.locator("//button[@id='" + i + "-delete']").click();
            await page.waitForTimeout(200);
        };
    };
});