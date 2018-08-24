    var name = 'Аргентина'; 
    console.log (name);

    if (name == 'Аргентина') {
        console.log('столица - Буэнос Айрес');
    } else {
        console.log('Катманду');
    }

    
    var name = 'штат Мэн';

    if (name == 'Аргентина') {
        console.log('столица - Буэнос Айрес');
    } else {
        console.log('Катманду');
    }


    for (var b = 10; b < 20; b++ ) {
        console.log(b); 
    }


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


    var array = ['привет', 'loftschool'];
    console.log(array.length);
    array.push('я изучаю', 'javascript');
    console.log(array.length);

    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

   
    var obj = {name: 'Kseniya', lastname: 'Belkova', age: '26'}
    console.log(obj.name);
    console.log(obj.lastname);
    console.log(obj.age);

    obj.work = 'manager';

    console.log(obj.work);