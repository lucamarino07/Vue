Vue.component("to-do", {
    props: {
        tasks: {
            type: Array,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    },


    data() {
        return {
            new_task: null,
            error: null
        }
    },

    methods: {
        submitTask() {
            if (this.new_task) {
                this.$emit("add-task", this.new_task);
                this.new_task = null;

                if (this.error) {
                    this.error = null;
                }
            } else {
                this.error = "Il campo non può essere vuoto!"
            }
        },

        removeTask(task) {
            this.$emit("remove-task", task)
        }
    },

    template: `
    <div class="container mt-2">
        <p><strong>Task rimanenti: {{ amount }}</strong></p>
        <input
            type="text"
            class="form-control"
            placeholder="Aggiungi un nuovo task!"
            v-model="new_task"
            @keyup.enter="submitTask"
            >
        <br>
        <div 
            class="single-task"
            v-for="(task, index) in tasks"
            :task="task"
            :key="index"
            >
            <div 
                class="alert alert-success" 
                role="alert"
                > {{task}}
                <button 
                    type="button" 
                    class="close"
                    @click="removeTask(task)">
                    <span>&times;</span>
                </button>
              </div>
           
        </div>
        <p>{{ error }}</p>
        <p v-if="amount === 0">Per aggiungere un nuovo task, compila il campo testuale e premi invio!</p>
    </div>
    `
});



var app = new Vue({
    el: "#app",

    data: {
        tasks: []
    },

    computed: {
        taskCount() {
            return this.tasks.length;
        }
    },

    methods: {
        addNewtask(new_task) {
            this.tasks.push(new_task);
        },
        removeTask(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
        }
    }
});