<template>

    <section class="player hg__u hg__u--ful">
        <div class="player__banner"
            :style="'background-image: url(' + blockData.thumb + ')'">
            <div class="player__banner__content">
                <h2 class="spotlight__h2">{{ blockData.label }}</h2>
                <p>{{ blockData.desc }}</p>
                <p><a :href="blockData.url" target="_blank" class="u-bw">{{ blockData.url }}</a></p>
            </div>
        </div>
        <ul v-if="blockData.mode == 'list'" class="player__track-list">
            <li v-for="track in blockData.tracks" :key="track">
                <iframe class="embed embed--mixcloud-mini" :src="track.embed.url"></iframe></li>
        </ul>
    </section>

    <template v-if="blockData.mode == 'grid'" >
        <div class="hg__u hg__u--hlf" v-for="track in blockData.tracks" :key="track">
            <iframe :src="'https://www.youtube.com/embed/' + track.embed.url" class="embed embed--youtube"></iframe>
        </div>
    </template>

</template>

<script>
    export default {
        props: ['blockData'],
        methods: {
            open(){
                // console.log(e.target)
            }
        }
    }
</script>