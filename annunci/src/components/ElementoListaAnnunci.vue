<template>
  <li class="small-12 large-4 columns">
    <img v-bind:src="annuncio.acf.immagine_1">
    <p>{{annuncio.title.rendered}}</p>
    <p>{{annuncio.acf.indirizzo}} - {{annuncio.acf.citta}}</p>
    <p>&euro; {{annuncio.acf.richiesta}} - $ {{Number(annuncio.acf.richiesta) * 1.22717}}</p>
  </li>
</template>

<script>
  export default {
    name: "elemento-lista-annunci",
    props: {
      annuncio: {
        type: Object
      }
    }
  }
</script>

<style scoped>

</style>
