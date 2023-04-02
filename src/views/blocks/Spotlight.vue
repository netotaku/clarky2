<template>
    <a :href="blockData.url"
        :style="'background-image:url(' + blockData.thumb + ')'"
        target="_blank" 
        :class="'hg__u hg__u--ful well spotlight spotlight--' + blockData.modifier">
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
        background-size: cover;
        background-position: center;
        border: 0;
        &--dark{
            color: #fff!important;
        }
        &__desc{
            @media (min-width:600px)  { 
                width: 60%;  
            }                       
        }        
    }
</style>