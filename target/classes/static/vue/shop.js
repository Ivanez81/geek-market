var productList = require('./shop.vue');

new Vue({
    el: "#table",
    component: productList,
    data: {
        products: {
            id: "",
            category: {
                id: "",
                title: ""
            },
            vendorCode: "",
            imagePath: "",
            title: "",
            shortDescription: "",
            fullDescription: "",
            price: "",
            createAt: "",
            updateAt: ""
        }
    },
       created() {
           var vm = this;
           this.$http.get('http://localhost:8189/geekmarket/api/products')
               .then(response => {
                   return response.json()
               })
               .then(data => {
                   vm.products = data
               })
               .catch(Error => alert(Error.toString()))
       }
});