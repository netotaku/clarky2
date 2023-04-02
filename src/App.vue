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
    background: #111;
    font-family: sans-serif;
    line-height: 1.4;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a{
    color: blue;
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
      position: sticky;
      z-index: 1;
      top: 90px;
      border-bottom: solid 1px #ccc;
      @media (min-width:600px)  { 
        position: static;        
      } 
      a{
        color: #666;
        text-decoration: none;
        &:hover{
          text-decoration: underline;
        }
      }
    }

    &__header{
      position: relative;
      padding: $gutter;
      height: 500px;

      position: sticky;
      z-index: 1;
      top: -403px;
      
      @media (min-width:600px)  { 
        height: auto;
        width: 420px;
        min-width: 420px;        
      } 
    }

    &__content{      
      position: relative;
      padding: $gutter;
      margin-bottom: 62px;
      @media (min-width:600px)  { 
        flex: 1 1 auto;
        overflow-y: auto;
        min-height: 0px;
        margin-bottom: 0px;
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

  h1, h2, h3{
    letter-spacing: -.5px;
  }

  .header{
    color: #fff;
    background-color: #333;
    background-image: url(/assets/img/clarky.jpg); 
    background-repeat: no-repeat;
    background-position: center top;    
    background-size: cover;
  }

  .menu{
    background: whitesmoke;
    a{
      display: inline-block;
      margin-right: 10px;
    }
    a.router-link-active{
      color: red;
      text-decoration: underline;
    }
  }

  .brand{
    position: absolute;
    left: $gutter;
    right: $gutter;
    bottom: $gutter;    
    &__sig{
      border-bottom: solid 3px white;
      font-family: 'Caveat Brush', sans-serif;
      font-weight: normal;
      font-size: 30px;
      margin-bottom: 3px;
    }
    @media (min-width:600px)  { 
        position: static;
    } 
  }
  
  .footer{
    background: #111;
    color: #fff;
    a{
      color: #fff;
    }
    &__social{
      a{
        display: inline-block;
        text-decoration: none;
        &:not(:last-child){          
          &:after{
            margin-right: 6px;
            content: "/";
            margin-left: 6px;
            color: #aaa!important;
          }          
        }
        &:hover{
          color: orange;
        }        
      }
    }
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;

    @media (min-width:600px) { 
      position: static;
    } 

  }

  .u{
    &-bw{
      word-break: break-word;
    }
    &-elps{
      display: block;
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &-v{
      color: #555!important;
    }
  }

</style>
