'use strict';

var phoneBook = []; // Здесь вы храните записи как хотите

/*
   Функция добавления запси в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/

var emailValid = function(email){
    var e = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    return e.test(email);
};

var phoneValid = function(phone){
    var p = /^[0-9\+\-\(\)\s]+$/;
    return p.test(phone);
  };

module.exports.add = function add(name, phone, email) {

    // Ваша невероятная магия здесь
if(phoneValid(phone) && emailValid(email))
{
    var note = {
    name: name,
    phone: phone,
    email: email
}
    phoneBook.push(note);
    console.log("Добавлено")}else{
    console.log("Не добавлено");}
};

/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {

    // Ваша удивительная магия здесь
for(var i=0; i<phoneBook.length; i++){
    if(phoneBook[i].name.indexOf(query) !== -1 ||
    phoneBook[i].phone.indexOf(query) !== -1 ||
    phoneBook[i].email.indexOf(query) !== -1){
    console.log(phoneBook[i].name + ", " + phoneBook[i].phone + ", " + phoneBook[i].email)
    }
    }
};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {

    // Ваша необьяснимая магия здесь
var delCount = 0;
for(var i = 0; i<phoneBook.length; i++){
    if(phoneBook[i].name.indexOf(query) !== -1 ||
    phoneBook[i].phone.indexOf(query) !== -1 ||
    honeBook[i].email.indexOf(query) !== -1){
    phoneBook.splice(i,1);
    delCount++;
    }
    }
};
