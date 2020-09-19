<template>
  <div id="app">
    <nav id="nav">
      <ul class="main-menu">
        <li class="main-menu__item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="main-menu__item">
          <router-link to="/01-grid-table">01 GridTable</router-link>
        </li>
      </ul>
    </nav>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

#nav {
  width: 200px;
  height: 100vh;
  border-right: 1px solid#eaecef;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main-menu {
  list-style-type: none;

  &__item:not(:last-child) {
    margin-bottom: 0.5em;
  }
}

.main {
  padding: 3em;
}
</style>
