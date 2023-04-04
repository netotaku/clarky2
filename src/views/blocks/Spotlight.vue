<template>
    <a :href="blockData.url"
        :style="'background-image:url(' + blockData.thumb + ')'"
        target="_blank" 
        :class="'hg__u hg__u--ful well spotlight spotlight--' + blockData.modifier">
        <div class="spotlight__title">
            <h2 class="spotlight__h2">{{ blockData.label }}</h2>
            <p class="spotlight__desc">{{ blockData.desc }}</p>
            <p class="well__link u-bw">{{ blockData.url }}</p>
        </div>
    </a>
</template>

<script>
    export default {
        props: ['blockData']
    }
</script>

