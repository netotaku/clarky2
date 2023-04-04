<template>
    <h3 class="hg__u hg__u--ful">{{ blockData.label }}</h3>   
    <a 
        v-for="(icon, index) in blockData.list" 
        :key="index" 
        :href="icon.url" 
        class="hg__u hg__u--hlf well portfolio__card"
        :style="'background-image: url(' + icon.thumb + ')'"
        target="_bank"></a>
</template>

<script>
    export default {
        props: ['blockData']
    }
</script>