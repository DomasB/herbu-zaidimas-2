<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/">
    <header>
      <div class="hrb-flag">
        <div class="hrb-flag-yellow" />
        <div class="hrb-flag-green" />
        <div class="hrb-flag-red" />
      </div>
      <img alt="Lietuvos herbas" class="logo" src="@/assets/main_coa.png" height="125" />
      <div>
        <h1 class="text-xl font-extrabold text-zinc-700 dark:text-zinc-50">Herbų žaidimas</h1>
      </div>
    </header>
  </RouterLink>

  <RouterView />
  <footer class="mt-auto">
    <nav class="container flex justify-center py-2 text-md lg:text-xl">
      <RouterLink class="text-s text-indigo-800 hover:text-sky-400" to="/about">
        About
      </RouterLink>
    </nav>
  </footer>
</template>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
  font-weight: normal;
  height: 100vh
}

header {
  line-height: 1.5;
  max-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
  height: 100px;
  z-index: 1;
}

.hrb-flag {
  position: absolute;
  top: 30px;
  background-color: red;
  width: 100%;
}

.hrb-flag-yellow {
  background-color: #FDB913;
  height: 20px
}

.hrb-flag-green {
  background-color: #006A44;
  height: 20px
}

.hrb-flag-red {
  background-color: #C1272D;
  height: 20px
}

</style>
