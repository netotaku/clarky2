<template>  
  <div class="layout__content__area hg">
    <component v-for="block in pagedata.blocks" :key="block" :is="block.name" :blockData="block" /> 
  </div>
  <div class="layout__content__area layout__content__area--base hg">
    <Icons v-for="block in pagedata.links" :key="block" :blockData="block" />
  </div>
</template>

<script>
  import { useRoute } from 'vue-router'
  import sitedata from "@/json/site.json"
  import Icons from "@/views/blocks/Icons.vue"
  import Spotlight from "@/views/blocks/Spotlight.vue"
  import Portfolio from "@/views/blocks/Portfolio.vue" 

  export default{
    components:{
      Icons, Spotlight, Portfolio
    },
    data(){
      return{
        pagedata: sitedata.routes[useRoute().path],
        route: useRoute()
      }
    }
  }
</script>