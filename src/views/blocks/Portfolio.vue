<template>
    <h3 class="hg__u hg__u--ful">{{ blockData.label }}</h3>   
    <a 
        v-for="(icon, index) in blockData.list" 
        :key="index" 
        :href="icon.url" 
        class="hg__u hg__u--thd well portfolio__card"
        :style="'background-image: url(' + icon.thumb + ')'"
        target="_bank">{{ icon.label }}</a>
</template>

<script>
    export default {
        props: ['blockData']
    }
</script>

<style lang="scss">

    .portfolio{
        &__card{
            aspect-ratio: 16 / 9;
            background-position: center;
            background-size: cover;
            border: 0;
        }
    }

</style>