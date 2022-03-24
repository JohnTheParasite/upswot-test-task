<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
}
html, #app, body {
  height: 100%;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}


.content {
  width: 1164px;
}
</style>
