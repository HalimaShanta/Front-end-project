<template>
 <NavBar></NavBar>
 <router-view v-slot="{ Component }">
 <transition name="fade" mode="out-in">
 <component :is="Component"/>
 </transition>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav a.router-link-exact-active {
  color: #42b983;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
