const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Анастасия",
            "id_3": "Мария",
            "id_4": "Евгения",
            "id_5": "Дарья",
            "id_6": "Маргарита",
            "id_7": "Оксана",
            "id_8": "Алёна",
            "id_9": "Татьяна",
            "id_10": "Екатерина"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;

        return obj.list[prop];
    },

    randomFirstName: function() {
        return (this.person.gender == 'Мужчина') ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson) ;
    },

     randomSurname: function() {
        return (this.person.gender == 'Мужчина' ) ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + 'а';
    },

    randomGender: function() {
        let gender = this.randomIntNumber(1, 0);

        return (gender === 1) ? this.GENDER_MALE : this.GENDER_FEMALE ;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surnameName = this.randomSurname();

        return this.person;
    }
};

// New object for task
const personGeneratorExt = {

    fathersNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Сергеев",
            "id_7": "Михаилов",
            "id_8": "Даниилов",
            "id_9": "Юрьев",
            "id_10": "Андреев"
        }
    }`,

    maleWorkJson: `{  
        "count": 12,
        "list": {
            "id_1": "Слесарь",
            "id_2": "Кузнец",
            "id_3": "Шахтёр",
            "id_4": "Водитель",
            "id_5": "Электрик",
            "id_6": "Сварщик",
            "id_7": "Строитель",
            "id_8": "Прораб",
            "id_9": "Архитектор",
            "id_10": "Военнослужащий",
            "id_11": "Моряк",
            "id_12": "Спортивный тренер"
        }
    }`,

    femaleWorkJson: `{  
        "count": 12,
        "list": {
            "id_1": "Кондитер",
            "id_2": "Актриса",
            "id_3": "Графический дизайнер",
            "id_4": "Певица",
            "id_5": "Переводчица",
            "id_6": "Психолог",
            "id_7": "Лингвист",
            "id_8": "Коуч",
            "id_9": "Стилист",
            "id_10": "Парикмахер",
            "id_11": "Визажист",
            "id_12": "Модель"
        }
    }`,

    monthOfBirth: `{  
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    randomWork: function() {
        return (personGenerator.person.gender == 'Мужчина') ? personGenerator.randomValue(this.maleWorkJson) : personGenerator.randomValue(this.femaleWorkJson);
    },

    randomDayOfBirth: function(maxDay, minDay) {
        return personGenerator.randomIntNumber(maxDay, minDay);
    },

    randomFathersName: function() {
        const fathersName = personGenerator.randomValue(this.fathersNameJson);

        return (personGenerator.person.gender == 'Мужчина' ) ? fathersName + 'ич': fathersName + 'на';
    },

    randomDateOfBirth: function() {
        const year = personGenerator.randomIntNumber(2000, 1955);
        const months = [
            'января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'
        ];
        const dayInMonths = ['31','28','31','30','31','30','31','31','30','31','30','31',];
        const monthIndex = personGenerator.randomIntNumber(11, 0);
        const day = personGenerator.randomIntNumber(dayInMonths[monthIndex], 1)

        return day + ' ' + months[monthIndex] + ' ' + year + ' года';
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = personGenerator.randomGender();
        this.person.fathersName = this.randomFathersName();
        this.person.work = this.randomWork();
        this.person.dateOfBirth = this.randomDateOfBirth();

        return this.person;
    }
};