var instance = {
    el: '#app',
    data: {
        selectedChef: '',
        users: [{
            "id": 1,
            "Name": "Juan David",
            "LastName": "Matos",
        }, {
            "id": 2,
            "Name": "Angel Lewis",
            "LastName": "Del Rosario Terrero",
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
            if (agree) {
                this.name = "";
                this.address = "";
                this.checkedInterests = [];
                this.gender = "";
                this.favoriteStore = '';
                this.favoriteProducts = [];
                this.age = "";
                this.opinion = "";
            }
        },
    }
};
var app = new Vue(instance);