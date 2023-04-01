<template>
  <article>
    <div class="layout">
      <header class="layout__header header">
        <div class="brand">
          <h1 class="brand__sig">Clarky</h1>
          <p class="brand__strap">Technology / Music</p>
        </div>
      </header>
      <section class="layout__page">        
        <menu class="layout__menu menu">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </menu>   
        <div class="layout__content content"> 
          <router-view/>
        </div>
      </section>
    </div>
    <footer class="layout__footer footer">
        <p>Made in Bristol, UK with Vue, Express and Heroku</p>
        <p><a href="https://github.com/netotaku/clarky2" target="_blank">View on GitHub</a></p>
    </footer>
  </article>
</template>

<style lang="scss">
  // vars
  $gutter: 20px;
  // globals
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
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
    
    background: #fff;

    &__menu{
      padding: $gutter;
    }

    &__header{
      padding: $gutter;
    } 
    &__content{
      padding: $gutter;
      @media (min-width:600px)  { 
          display: flex;
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
    background-position: center;
    background-attachment: fixed;
  }

  .content{

  }

  .menu{
    background: whitesmoke;
  }

  .brand{

  }
  
  .footer{
    color: #fff;
    a{
      color: #fff;
    }
  }

</style>
