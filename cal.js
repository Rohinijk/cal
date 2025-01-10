document.addEventListener('DOMContentLoaded', function() {
    var op = "";
    var fn = "";
    var sn = "";
    const colors = ['red', 'black', 'pink', 'whitesmoke', 'green', 'violet', 'yellow', 'blue', 'orange'];

   
    window.append = function(num) {
        if (op === "") {
            fn += num; 
            document.getElementById('result').value = fn;
        } else {
            sn += num; 
            document.getElementById('result').value = fn + " " + op + " " + sn;
        }
    };

  
    window.seoperator = function(ope) {
        if (fn !== "") {
            op = ope;
            document.getElementById('result').value = fn + " " + op;
        }
    };

    window.showresult = function() {
        let res = 0;
        switch (op) {
            case '+':
                res = parseFloat(fn) + parseFloat(sn);
                break;
            case '-':
                res = parseFloat(fn) - parseFloat(sn);
                break;
            case '*':
                res = parseFloat(fn) * parseFloat(sn);
                break;
            case '/':
                res = parseFloat(fn) / parseFloat(sn);
                break;
        }
        document.getElementById('result').value = res;

   
        const contentBox = document.getElementById('content-box');
        contentBox.textContent = res;

       
        fn = res.toString();
        sn = "";
        op = "";
    };

    
    window.reset = function() {
        fn = "";
        sn = "";
        op = "";
        document.getElementById('result').value = "";
        document.getElementById('content-box').textContent = "";
    };

   
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const colorIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[colorIndex];
        });
    });
});