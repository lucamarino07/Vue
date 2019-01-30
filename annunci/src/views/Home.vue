<template>
  <div class="product-list">
    <h2>{{title}}</h2>
    <ul>
      <elemento-lista-annunci
        v-for="(annuncio, i) in immobili"
        :annuncio="annuncio"
        :key="annuncio.id">
      </elemento-lista-annunci>
    </ul>
  </div>
</template>

<script>
  // @ is an alias to /src
  import ElementoListaAnnunci from '@/components/ElementoListaAnnunci.vue';


  export default {
    name: 'home',
    props: {
      immobili: {
        type: Array,
      },
      title: {
        type:String,
      }
    },
    components: {
      'elemento-lista-annunci': ElementoListaAnnunci
    }
  }
</script>
