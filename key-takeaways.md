# Java - Function advance
    Normal function 
        function add(a, b) {
            return a + b;
        }
    =>Khi gọi 
    console.log(add(a, b));

    ## Function expression: gần giống với function gọi bình thường
        const add = function(a, b) {
            return a + b;
        }
    =>Khi gọi 
    console.log(add(a, b));

    ## Lambda function (Arrow function): sử dụng dấu "=>"
        const add = (a, b) => {
            return a + b;
        }
    =>Khi gọi
    console.log(add(a, b));

    Có thể rút ngắn lại nếu chỉ có 1 dòng code
        const add = (a, b) => a + b;

    Khi ko có tham số:
        const greet = () => console.log("Hello!");

    Khi có 1 tham số:
        const double = x => x * 2;
    or
        const triple = (x) => x * 3;

    ## Anonymous function 
        Function ko có tên
        Thường chỉ được sử dụng 1 lần hoặc làm callback
        Phải được sử dụng ngay sau khi khai báo

        1. Được sử dụng ngay sau khi gán vào biến
        const anonymousFunc = function() {
            console.log("I'm anonymous");
        }

        2. Được dùng làm callback
        setTimeout(function() {
            console.log("I'm Anonymous");
        }, 1000)


# DOM
    Document Object Model
    Dùng F12 on web or right-click Inspect 

    ## Selector
        Để tương tác với các phần tử trên web, cần xác định/tìm được các phần tử đó

        3 loại selector chính
        Xpath
        CSS Selector
        Playwright Selector
        