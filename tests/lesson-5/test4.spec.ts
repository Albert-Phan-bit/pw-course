import { test, expect } from '@playwright/test';

test ("Bài 4", async({page}) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    
    for (let i = 0; i < 10; i++) {
        
        let action = ["click", "fill", "type", "hover", "check", "uncheck", "selectOption", "press", "dblclick", "dragAndDrop"];

        let desc = ["Hàm click dùng để thực hiện click vào các phần tử trên trang web", 
            "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web", 
            "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng", 
            "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover", 
            "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked", 
            "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked", 
            "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown", 
            "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác", 
            "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web", 
            "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web"];

        await page.locator("//input[@id='note-title']").fill(action[i]);

        await page.locator("//textarea[@id='note-content']").fill(desc[i]);

        await page.locator("//button[@id='add-note']").click();
    };

    await page.locator("//input[@id='search']").fill("một hoặc nhiều");
    
});