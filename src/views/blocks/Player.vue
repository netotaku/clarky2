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
                    <a :href="track.url" target="_blank"><span class="u-elps">{{ track.label }}</span></a></li>
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
        border: solid 1px #333;
        border-bottom-width: 20px;
        border-radius: 4px;

        background: #111;

        a{
            color: #ccc;
        }

        &__banner{
            padding: 20px;
            background-color: #000;
            background-size: cover;
            background-position: center bottom;
            color: #fff;
            height: 230px;
            position: relative;
            a{
                color: #fff;
            }
            &__content{
                position: absolute;
                bottom: 20px;
                left: 20px;
                right: 20px;
            }
        }
        &__track-list{
            li{
                border-top: solid 1px #333;
                a{
                    display: block;
                    padding: 10px 20px;
                    text-decoration: none;
                    &:hover{
                        background-color: #555;
                        color: #fff;
                    }
                }
            }
            
        }
    }
</style>