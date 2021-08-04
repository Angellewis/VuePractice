var instance = {
    el: '#app',
    data: {
        chefs: [{
            "id": 1,
            "Name": "Juan David",
            "LastName": "Matos",
        }, {
            "id": 2,
            "Name": "Angel Lewis",
            "LastName": "Del Rosario Terrero",
        }],
        users: [],
        selectedChef: '',
        name: "",
        address: "",
        checkedInterests: [],
        gender: "",
        favoriteStore: '',
        favoriteProducts: [],
        age: 0,
        opinion: "",
        status: false
    },
    methods: {
        ShowData: function () {
            let sure = confirm("¿Are you sure you want to confinue?");
            if (sure) {
                this.status = true;
                let data = {
                    "id": this.users.length + 1,
                    "Name": this.name,
                    "Age": this.age,
                    "address": this.address,
                    "checkedInterests": this.checkedInterests.join(','),
                    "gender": this.gender,
                    "favoriteStore": this.favoriteStore,
                    "favoriteProducts": this.favoriteProducts.join(','),
                    "selectedChef": this.selectedChef,
                    "opinion": this.opinion
                }
                this.users.push(data);
                this.selectedChef = '';
                this.name = '';
                this.address = '';
                this.checkedInterests = [];
                this.gender = '';
                this.favoriteStore = "";
                this.favoriteProducts = '';
                this.age = "";
                this.opinion = "";
            }
        },
    }
};
var app = new Vue(instance);