<template>
    <h3 class="hg__u hg__u--ful">{{ blockData.label }}</h3>   
    <a 
        v-for="(icon, index) in blockData.list" 
        :key="index" 
        :href="icon.url" 
        class="hg__u hg__u--thd well"
        target="_bank">{{ icon.label }}</a>
</template>

<script>
    export default {
        props: ['blockData']
    }
</script>