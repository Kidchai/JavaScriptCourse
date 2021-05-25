/*
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

Create a 'multiplyNumeric(obj)' function that multiplies all numeric properties of the object 'obj' by 2.

Note that 'multiplyNumeric' should not return anything. It should directly modify the object.
*/

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === "number")
            obj[prop] *= 2;
    }
}
