var App = Vue.component('App', {
    template: `
        <div class="container mt-2">
        
            <form action="">
                <div class="form-group">
                    <template v-if="loginType === 'username'">
                        <label for="">Username</label>
                        <input key="username" type="text" class="form-control" placeholder="Inserisci username">
                    </template>
                    <template v-else>
                        <label for="">Email</label>
                        <input key="email" type="text" class="form-control" placeholder="Inserisci email">
                    </template>
                </div>
            </form>
            <button @click="byUsername" class="btn btn-outline-danger no-outline">Per Username</button>
            <button @click="byEmail" class="btn btn-outline-primary no-outline">Per Email</button>
        </div>
            
            <!--<input class="input" v-model="type">-->
            <!--<div v-if="type === 'A'">-->
                <!--{{ type }}-->
            <!--</div>-->
            <!---->
            <!--<div v-else-if="type === 'B'">-->
                <!--{{ type }}-->
            <!--</div>-->
                <!--{{ type }}-->
            <!--<div v-else-if="type === 'C'">-->
                <!--{{ type }}-->
            <!--</div>-->
            <!---->
            <!--<div v-else>-->
                <!--Not A/B/C-->
            <!--</div>-->
            <!--<div v-if="isAbilitated">-->
                <!--<button -->
                    <!--class="btn btn-primary"-->
                    <!--&gt;Elimina File-->
                <!--</button>-->
            <!--</div>-->
            <!--<div v-else>-->
                <!--Utente non abilitato alla cancellazione dei file-->
            <!--</div>        -->
        </div>
    `,

    data() {
        return {
            type: null,
            loginType: 'username'
        };
    },

    methods: {
        byUsername() {
            this.loginType = 'username'
        },
        byEmail() {
            this.loginType = 'email'
        }
    }
});

new Vue({
    el: '#app'
})