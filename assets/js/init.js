var MyApp = {}; // Globally scoped object

var operators = {
    '+': function (a, b) {
        return a + b;
    },
        '-': function (a, b) {
        return a - b;
    },
        '/': function (a, b) {
        return a / b;
    },
        '*': function (a, b) {
        return a * b;
    }
};

function init() {
    MyApp.color = 'green';
    $write = $('#screen');
    MyApp.key = '+';
    MyApp.a = 0;
    MyApp.b = 0;
}

function getfirstvalue() {
    if ($write.val()) {
        MyApp.a = parseInt($write.val(), 16);
        console.log("a3 :" + MyApp.a);
        $write.val('');
    } else {
        console.log("no value given");
    }
}

function workSize() {
    var characters = $write.val().length,
        textSize = 13 / characters;
    if (characters > 5) {
        $write.css({
            'fontSize': textSize + 'em'
        });
    }
}

function getbvalue() {
    if ($write.val()) {
        MyApp.b = parseInt($write.val(), 16);
        console.log("b =" + MyApp.b);
        $write.val('');
    } else {
        console.log("no value given");
    }
}

function vari() {
    $('#add').on('click', function () {
        MyApp.key = '+';
        if (MyApp.b === 0) {
            getfirstvalue();
            console.log("fresh");
        } else {
            //MyApp.b = 0;
            getfirstvalue();
        }
    });
    $('#subtract').on('click', function () {
        MyApp.key = '-';
        getfirstvalue();
    });
    $('#divide').on('click', function () {
        MyApp.key = '/';
        getfirstvalue();
    });
    $('#multiply').on('click', function () {
        MyApp.key = '*';
        getfirstvalue();
    });
    $('#equals').on('click', function () {
        getbvalue();
        var c = operators[MyApp.key](MyApp.a, MyApp.b);
        $('#screen').val(c);
    });
    $('.button:not(.function)').on('click', function () {
        var $this = $(this),
            character = $this.html();
        $write.val($write.val() + character);
        workSize();
    });
    $('#clear').on('click', function (a, b) {
        MyApp.a = 0,
        MyApp.b = 0;
        $write.val('');
        $write.css({
            'fontSize': '2em'
        });
    });
    $write.keypress(function (e) {
        workSize();
        if (e.which < 48 || e.which > 57) return false;
    });
}
$(document).ready(function() {

init();
vari();
});
//Math.sqrt(9);
