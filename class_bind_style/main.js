var app = new Vue({
    el: "#app",
    data: {
        flag: true,
        styleObject:  {
            backgroundColor: 'green',
            border: '5px solid orange'
        }
    },

    methods: {
        cambiaForma() {
            this.flag = !this.flag;
        }
    }
});