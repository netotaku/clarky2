<template>
  <article>
    <div class="layout">
      <div class="layout__top">
        <header class="layout__header header">
          <div class="brand">
            <h1 class="brand__sig"><router-link to="/">Clarky</router-link></h1>
            <p class="brand__strap">Technology / Music / Bristol, Uk</p>
          </div>
        </header>
        <section class="layout__page">        
          <menu class="layout__menu menu">
            <div class="menu__bg">
              <router-link v-for="(item, index) in sitedata" :to="index" :key="index">{{item.label}}</router-link>
            </div>
          </menu>            
          <div class="layout__content content"> 
            <div class="shadow"></div> 
            <router-view :key="$route.fullPath"/>
          </div>
        </section>
      </div>
      <footer class="layout__footer footer">
        <div class="footer__copy">
          <p><a href="https://github.com/netotaku/clarky2" target="_blank" class="u-v">v1.0</a></p>
        </div>
        <div class="footer__social">
          <a target="_blank" href="https://www.tiktok.com/@clar.ky">TikTok</a>
          <a target="_blank" href="https://twitter.com/t_pk">Twitter</a>
          <a target="_blank" href="https://www.instagram.com/clar.ky">Instagram</a>
          <a target="_blank" href="https://www.strava.com/athletes/18818524">Strava</a>
        </div>
      </footer>
    </div>
  </article>
</template>

<script>
  import sitedata from "@/json/site.json"
  export default{
      data(){
          return{
              sitedata: sitedata
          }
      }
  }
</script>

<style lang="scss">
    .app{} // this is required by the build process
</style>