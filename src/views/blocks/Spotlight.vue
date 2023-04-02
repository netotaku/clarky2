<template>
    <a :href="blockData.url" target="_blank" class="hg__u hg__u--ful well well--spotlight">
        Spotlight
        <h2>{{ blockData.label }}</h2>
        <p>{{ blockData.url }}</p>
    </a>
</template>

<script>
    export default {
        props: ['blockData']
    }
</script>