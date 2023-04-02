<template>
  <article>
    <div class="layout">
      <div class="layout__top">
        <header class="layout__header header">
          <div class="brand">
            <h1 class="brand__sig">Clarky</h1>
            <p class="brand__strap">Technology / Music</p>
          </div>
        </header>
        <section class="layout__page">        
          <menu class="layout__menu menu">
            <router-link v-for="(item, index) in sitedata" :to="index" :key="index">{{item.label}}</router-link>
          </menu>   
          <div class="layout__content content"> 
            <router-view :key="$route.fullPath"/>
          </div>
        </section>
      </div>
      <footer class="layout__footer footer">
        <p>Made in Bristol, UK with Vue, Express and Heroku</p>
        <p><a href="https://github.com/netotaku/clarky2" target="_blank">View on GitHub</a></p>
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
  // vars
  $gutter: 20px;
  // globals
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    list-style-type: none;
  }

  html,body{
    background: #000;
    font-family: sans-serif;
    line-height: 1.4;
  }

  *{
    &:hover{
      text-decoration: none;
    }
  }
  
  .layout{

    @media (min-width:600px)  { 
      display: flex;
      flex-direction: column;
      height: 100vh;
      max-height: 100vh;
      min-height: 100vh;
    }   

    &__top{
      @media (min-width:600px)  { 
        display: flex;
        flex-grow: 1;
        min-height: 0px;
      }         
    }

    &__menu{
      padding: $gutter;
      @media (min-width:600px)  { 
      } 
    }

    &__header{
      position: relative;
      padding: $gutter;
      height: 80vh;
      @media (min-width:600px)  { 
        height: auto;
        width: 420px;
      } 
    }

    &__content{      
      position: relative;
      padding: $gutter;
      @media (min-width:600px)  { 
        flex: 1 1 auto;
        overflow-y: auto;
        min-height: 0px;
      }      
    }

    &__page{
      background: #fff;
      @media (min-width:600px)  { 
        flex-grow: 1;
        display: flex; 
        flex-direction: column;
      }           
    }

    &__footer{
      padding: $gutter;
    }

  }

  .header{
    color: #fff;
    background-color: #333;
    background-image: url(/assets/img/clarky.jpg); 
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
    background-size: cover;
    @media (min-width:600px)  { 
        background-attachment: scroll;
    } 
  }

  .content{

  }

  .menu{
    background: whitesmoke;
    a{
      display: inline-block;
      margin-right: 10px;
    }
    a.router-link-active{
      color: red;
    }
  }

  .brand{
    position: absolute;
    left: $gutter;
    right: $gutter;
    bottom: $gutter;
    &__sig{
      border-bottom: solid 3px white;
      padding-bottom: 3px;
      margin-bottom: 3px;
    }
    @media (min-width:600px)  { 
        position: static;
    } 
  }
  
  .footer{
    color: #fff;
    a{
      color: #fff;
    }
  }

</style>
