var app = new Vue({
    el: "#app",
    data: {
        lezione: "Eventi e metodi in Vue",
        counter: 0
    },

    methods: {
        incrementaContatore() {
            this.counter += 1;
            console.log(this.counter);

            if (this.counter === 10) {
                alert("Counter a 10!");
            }
        },
        overTheBox() {
            console.log("Mouse sopra al box verde!")
        }
    }
});