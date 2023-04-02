<template>
    <a :href="blockData.url" target="_blank" class="hg__u hg__u--ful well spotlight">
        <h2>{{ blockData.label }}</h2>
        <p class="spotlight__desc">{{ blockData.desc }}</p>
        <p class="well__link u-bw">{{ blockData.url }}</p>
    </a>
</template>

<script>
    export default {
        props: ['blockData']
    }
</script>

<style lang="scss">
    .spotlight{
        height: 350px;
        &__desc{
            width: 60%;            
        }        
    }
</style>