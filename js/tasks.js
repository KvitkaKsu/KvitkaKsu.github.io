    //////
    var name = 'Аргентина'; 
    console.log (name);

    if (name == 'Аргентина') {
        console.log('столица - Буэнос Айрес');
    } else {
        console.log('Катманду');
    }
    ///////

    //////    
    var name = 'штат Мэн';

    if (name == 'Аргентина') {
        console.log('столица - Буэнос Айрес');
    } else {
        console.log('Катманду');
    }
    //////

    //////
    for (var b = 10; b < 20; b++ ) {
        console.log(b); 
    }
    //////

    //////
    function sum(m, g, i) {
        var result = m + g - i;
        return result;
    }
    var result = sum(500, 500, 200);
    console.log(result);
    

    function kek(a, b, c) {
        var result = a/b + c;
        return result;
    }
    var result = kek(10, 2, 15);
    console.log(result);
    //////

    //////
    var array = ['привет', 'loftschool'];
    console.log(array.length);
    array.push('я изучаю', 'javascript');
    console.log(array.length);

    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    //////

    //////
    var array = ['20', '5', '114', '543', '46', '93', '172', '2', '101', '8'];
    for (i = 0; i < array.length; i++) {
    if (array[i] > 100) {
        console.log(array[i]);
    }
}
    //////

    //////   
    var obj = {name: 'Kseniya', lastname: 'Belkova', age: '26'}
    console.log(obj.name);
    console.log(obj.lastname);
    console.log(obj.age);

    obj.work = 'manager';

    console.log(obj.work);
    //////

    //////
    function hello(human) {
    var result = 'Привет,' + 'меня зовут' + human.name + human.lastname + 'и мне' + human.age + 'лет';
    return result;
    }
    var obj = {name: 'Kseniya', lastname: 'Belkova', age: '26'};
    var result = hello(obj);
    console.log(result);
    //////
