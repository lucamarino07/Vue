var App = Vue.component('App', {
    template: `
    <div class="container">
        <products-list></products-list>
    </div>
`,

    data() {
        return {}
    }
});


Vue.component("products-list", {
    template: `
        <div>
            <h2>Elenco prodotti</h2>
            
            <div>
                <product-box v-for="product in products" :product="product" :key="product.id">
               </product-box>
            </div>
        </div>
    `,

    data() {
        return {
            products: [
                {
                    id: 1,
                    nome: "Prodotto 1",
                    descrizione: "Breve descrizione del prodotto",
                    prezzo: 15,
                    disp: 100
                },
                {
                    id: 2,
                    nome: "Prodotto 2",
                    descrizione: "Breve descrizione del prodotto",
                    prezzo: 12,
                    disp: 98
                },
                {
                    id: 3,
                    nome: "Prodotto 3",
                    descrizione: "Breve descrizione del prodotto",
                    prezzo: 5,
                    disp: 56
                },
                {
                    id: 4,
                    nome: "Prodotto 4",
                    descrizione: "Breve descrizione del prodotto",
                    prezzo: 24,
                    disp: 32
                },
                {
                    id: 5,
                    nome: "Prodotto 5",
                    descrizione: "Breve descrizione del prodotto",
                    prezzo: 32,
                    disp: 15
                },
                {
                    id: 6,
                    nome: "Prodotto 6",
                    descrizione: "Breve descrizione del prodotto",
                    prezzo: 8,
                    disp: 57
                }
            ]
        }
    }
});

Vue.component("product-box", {
    template: `
        <div class="card" 
              style="width: 240px; float: left; margin: 16px">
            <img class="card-img-top" 
                 :src="'https://picsum.photos/240/240?image=' + product.id">               
                 <div class="card-body">
                            <h4 class="card-title">{{ product.nome }}</h4>  
                            <p class="card-text">{{ product.descrizione }}</p>  
                            <p class="card-text text-right"><strong>Prezzo: € {{ product.prezzo }}</strong></p> 
                            <a href="#" class="btn btn-outline-danger">Dettaglio</a>
                </div>  

        </div>
        
    `,
    props: {
        product: {
            type: Object,
            required: true
        }
    }
})

new Vue({
    el: "#app"
});

