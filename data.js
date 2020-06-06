const array = [{
        dateOfBirth: new Date(1996, 4, 17),
        fullName :
            {surname : 'xxx', firstName : 'yyy', middleName: 'zzz'},
        age: 24,
        car: true
            }, {
        dateOfBirth: new Date(1989, 5, 3),
        fullName :
            {surname : 'XXX', firstName : 'YYY', middleName: 'ZZZ'},
        age: 31,
        car: false
    }];

const rules = {
    age: true,
    dateOfBirth: true,
    car: true,
    fullName : {
        surname : true,
        firstName : true,
        middleName: false
    }};

const localization = {
    "fullName.surname" : "Прізвище",
    "fullName.middleName" : "По-батькові",
    "dateOfBirth": "Дата народження"}

module.exports = {
    array,
    rules,
    localization
}