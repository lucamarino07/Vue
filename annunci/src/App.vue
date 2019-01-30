<template>
  <div id="main-app">
    <router-view
      :immobili="gliAnnunci"
      title="Immobili in affito e vendita">
    </router-view>
  </div>
</template>

<style>
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*}*/
  /*#nav {*/
  /*padding: 30px;*/
  /*}*/

  /*#nav a {*/
  /*font-weight: bold;*/
  /*color: #2c3e50;*/
  /*}*/

  /*#nav a.router-link-exact-active {*/
  /*color: #42b983;*/
  /*}*/
</style>

<script>
  export default {
    name: 'app',
    data() {
      return {
        gliAnnunci: []
      };
    },
    created: function () {
      $.getJSON('https://www.alessandrocosta.pro/wp-json/wp/v2/annunci')
        .done(data => {
          this.gliAnnunci = data;
          console.log(data);
        });
    }
  }
</script>
