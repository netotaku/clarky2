<template>
  <article>
    <div class="layout">
      <div class="layout__top">
        <header class="layout__header header">
          <div class="u-grad">
            <div class="header__inner">      
              <div class="avatar"></div>
              <div class="brand">
                <h1 class="brand__sig"><router-link to="/">Clarky</router-link></h1>
                <p class="brand__strap">Technology / Music / Bristol, Uk</p>             
              </div>
            </div>
          </div>
        </header>
        <section class="layout__page">        
          <menu class="layout__menu menu">   
            <div class="menu__left">         
              <router-link class="menu__link menu__link--main" v-for="(item, index) in sitedata" :to="index" :key="index">{{item.label}}</router-link>            
            </div>
            <div class="menu__right">
              <a class="menu__link" @click.prevent="modal = !modal" href="#">Connect</a>
            </div>
          </menu>            
          <div class="layout__content content">            
            <router-view :key="$route.fullPath"/>            
          </div>
        </section>
      </div>
      <footer class="layout__footer footer">
        <div class="footer__copy">
          <p><a href="https://github.com/netotaku/clarky2" target="_blank" class="u-v">v1.0</a></p>
        </div>
      </footer>
    </div>    
  </article>  
  <div v-if="modal" class="overlay">
    <a class="overlay__close" @click.prevent="modal = !modal" href="#">Close</a>
    <div class="overlay__modal hg">
      
          <div v-for="blockData in linkdata" :key="blockData" :class="'hg__u icons ' + (blockData.modifier || '')">  
              <h3 v-if="blockData.label" class="icons__title">{{ blockData.label }}</h3>
              <a 
                  v-for="(icon, index) in blockData.list" 
                  :key="index" 
                  :href="icon.url"         
                  :title="icon.label"
                  :style="'background-color:' + icon.theme"        
                  class="icons__icon"
                  target="_bank"><i :class="'icons__icon__i ' + icon.icon"></i> 
                      <span class="icons__icon__label">{{ icon.label }}</span></a>
          </div>
      
    </div>
  </div>
  <div class="stay-rad">
    <img src="/assets/img/stayrad.png">
  </div>
</template>

<script>  
  import sitedata from "@/json/site.json"

  export default{
      components:[
        
      ],
      data(){
          return{
              sitedata: sitedata.routes,
              linkdata: sitedata.links, 
              modal: false
          }
      }
  }
</script>

<style lang="scss">        
    .stay-rad{
      position: fixed;
      bottom: 6px;
      right: 20px;
      z-index: 2;
      pointer-events: none;           
      img{
        display: block;
        width: 180px;    
        @media (max-width:$break)  {   
          width: 140px;   
        }    
      }
    }
</style>