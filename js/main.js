var instance = {
    el: '#app',
    data: {
        selected: '',
        users: [{
            "id": 1,
            "Name": "Ettie",
            "LastName": "Wines",
            "Email": "ewines0@ucoz.com",
            "gender": "Genderfluid"
        }, {
            "id": 2,
            "Name": "Ram",
            "LastName": "Malarkey",
            "Email": "rmalarkey1@seesaa.net",
            "gender": "Agender"
        }],
        message: "",
        address: "",
        checkedInterests: [],
        gender: "",
        favoriteStore: '',
        favoriteProducts: [],
        age: "",
        trim: "",
        toggle: {
            eat: ""
        }
    },
    methods: {
        submit(){
            alert(typeof this.age);
        }
    }
};
var app = new Vue(instance);