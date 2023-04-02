<template>
    <!-- icon block -->    
    <h3 class="hg__u hg__u--ful">{{ blockData.label }}</h3>   
    <a 
        v-for="(icon, index) in blockData.list" 
        :key="index" 
        :href="icon.url" 
        class="hg__u hg__u--qtr well icon"
        :style="'background-color:' + icon.theme"        
        target="_bank">{{ icon.label }}</a>
</template>

<script>
    export default {
        props: ['blockData']
    }
</script>

<style scoped>
    .icon{
        color: white;
        border: 0;
        font-weight: bold;
    }
</style>