<template>
  <h2>{{ route.name }}</h2>
</template>

<script>
import sitedata from "@/json/site.json"
import { useRoute } from 'vue-router';

export default{
    data(){
        return{
            sitedata: sitedata,
            route: useRoute()
        }
    }
}
</script>