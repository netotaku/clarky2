<template>

    <section class="hg__u hg__u--ful">
        <div class="player"> 
            <div class="player__banner">
                <h2>{{ blockData.label }}</h2>
                <p>{{ blockData.desc }}</p>
                <p><a :href="blockData.url" target="_blank" class="u-bw">{{ blockData.url }}</a></p>
            </div>
            <ul class="player__track-list">
                <li v-for="track in blockData.tracks" :key="track">
                    <a :href="track.url" target="_blank">{{ track.label }}</a></li>
            </ul>
        </div>
    </section>

</template>

<script>
    export default {
        props: ['blockData']
    }
</script>

<style lang="scss">
    .player{

        overflow: hidden;
        border: solid 1px #ccc;
        border-radius: 4px;

        &__banner{
            padding: 20px;
            background: whitesmoke;
        }
        &__track-list{
            li{
                border-top: solid 1px #ccc;
                a{
                    display: block;
                    padding: 10px 20px;
                }
            }
            
        }
    }
</style>