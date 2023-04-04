<template>

    <section class="hg__u hg__u--ful">
        <div class="player"> 
            <div class="player__banner"
                :style="'background-image: url(' + blockData.thumb + ')'">
                <div class="player__banner__content">
                    <h2 class="spotlight__h2">{{ blockData.label }}</h2>
                    <p>{{ blockData.desc }}</p>
                    <p><a :href="blockData.url" target="_blank" class="u-bw">{{ blockData.url }}</a></p>
                </div>
            </div>
            <ul class="player__track-list">
                <li v-for="track in blockData.tracks" :key="track">
                    <a @click.prevent="open()" :href="track.url" target="_blank"><span class="u-elps">{{ track.label }}</span></a></li>
            </ul>
        </div>
    </section>

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