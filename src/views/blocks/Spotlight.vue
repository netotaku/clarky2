<template>
    <div class="hg__u hg__u--ful spotlight">    
        <div class="spotlight__banner" :style="'background-image:url(' + blockData.thumb + ')'">       
            <div class="spotlight__title">
                <h2 class="spotlight__h2">{{ blockData.label }}</h2>
                <p class="spotlight__desc">{{ blockData.desc }}</p>
                <p class="spotlight__link">
                    <span class="spotlight__link__i icon-external-link-square"></span> 
                    <a class="spotlight__link__label" target="_blank" :href="blockData.url">{{ blockData.url }}</a>
                </p>
            </div>
        </div>
        <iframe v-if="blockData.embed" :src="blockData.embed.url" class="embed embed--mixcloud-mini"></iframe>
    </div>
</template>

<script>
    export default {
        props: ['blockData']
    }
</script>

