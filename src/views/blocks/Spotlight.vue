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
        <ul v-if="blockData.mode == 'list'" class="player__track-list">
            <li v-for="track in blockData.tracks" :key="track">
                <iframe class="embed embed--mixcloud-mini" :src="track.embed.url"></iframe></li>
        </ul>
    </div>

    <template v-if="blockData.mode == 'grid'" >
        <div class="hg__u hg__u--thd" v-for="track in blockData.tracks" :key="track">
            <iframe :src="'https://www.youtube.com/embed/' + track.embed.url" class="embed embed--youtube"></iframe>
        </div>
    </template>

</template>

<script>
    export default {
        props: ['blockData']
    }
</script>

