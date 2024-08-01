<template>
  <nav>
    <router-link to="/">Proxy</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/individuals">Individuals</router-link> |
    <router-link to="/organizations">Organizations</router-link> |
    <router-link to="/create">Create</router-link>
  </nav>
  <router-view />
</template>

<script></script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
