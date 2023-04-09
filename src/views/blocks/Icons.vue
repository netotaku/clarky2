<template>
    <!-- icon block -->        
    <div :class="'hg__u icons ' + (blockData.modifier || '')">  
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