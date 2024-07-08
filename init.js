document.querySelector('#generation').addEventListener('click', (event) => {
    const initPerson = personGenerator.getPerson();
    const initExtPerson = personGeneratorExt.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surnameName;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#firstFathersNameOutput').innerText = initExtPerson.fathersName;
    document.querySelector('#workOutput').innerText = initExtPerson.work;
    document.querySelector('#birthMonthOutput').innerText = initExtPerson.dateOfBirth;
});

document.querySelector('#reset').addEventListener('click', (event) =>{
    document.querySelector('#firstNameOutput').innerText = '';
    document.querySelector('#surnameOutput').innerText = '';
    document.querySelector('#genderOutput').innerText = '';
    document.querySelector('#firstFathersNameOutput').innerText = '';
    document.querySelector('#workOutput').innerText = '';
    document.querySelector('#birthMonthOutput').innerText = '';
});