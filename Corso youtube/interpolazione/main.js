var App = Vue.component('App', {
    template: `
    <div class="container">
        <h1 v-once> {{ titolo }} </h1>
        <p><span :style="colorRed">5 + 3 = </span>{{ 5 + 3 }}</p>
        <p><span :style="{color: color}">2 + 2 = </span>{{ 2 + 2 }}</p>
        <p>{{ user.firstName }} {{ user.secondName }}</p>
        <p>{{ user.getFullName() }} {{ titolo }}</p>
        <p><a :href="myUrl">Visita il mio sito</a></p>
        <button class="btn btn-primary">Click</button>
    </div>
`,

    data() {
        return {
            titolo: "Salve a tutti!",
            color: 'red',
            colorRed: "color: red",
            myUrl: "http://www.google.it",
            user: {
                firstName: 'Mario',
                secondName: 'Rossi',
                getFullName: function () {
                    return this.firstName + " " + this.secondName;
                }
            }

        }
    }
});


new Vue({
    el: "#app"
});

