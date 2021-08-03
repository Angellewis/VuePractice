var instance = {
    el: '#app',
    data: {
        selectedChef: '',
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
        name: "",
        address: "",
        checkedInterests: [],
        gender: "",
        favoriteStore: '',
        favoriteProducts: [],
        age: "",
        opinion: "",
    },
    methods: {
        ShowData: function () {
            var agree = confirm("Do you want to send this info?\n" +
            "Name: " + this.name + "\n" +
            "Age: " + this.age + "\n" +
            "Address: " + this.address + "\n" +
            "Interests: " + this.checkedInterests + "\n" +
            "Gender: " + this.gender + "\n" +
            "Favorite Store: " + this.favoriteStore + "\n" +
            "Favorite Products: " + this.favoriteProducts + "\n" +
            "Your Opinion: " + this.opinion);
            if (agree)
                return true;
            else
                return false;
        },
    }
};
var app = new Vue(instance);