<template>
    <div class="hg__u hg__u--ful spotlight">    
        <div class="spotlight__banner" :style="'background-image:url(' + blockData.thumb + ')'"> 
            <div v-if="blockData.brand" class="spotlight__brand">
                <img :src="blockData.brand">
            </div>    
            <div class="spotlight__title">
                <h2 class="spotlight__h2">{{ blockData.label }}</h2>
                <p class="spotlight__desc">{{ blockData.desc }} 
                    <span v-if="blockData.date" class="spotlight__date"> - {{ format(blockData.date) }}</span></p>
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
        <div v-if="blockData.mode == 'grid'" class="spotlight__grid hg">
            <div class="hg__u hg__u--hlf" v-for="track in blockData.tracks" :key="track">
                <a target="_blank" :href="track.url" :style="'background-image: url('+track.cover+')'" class="spotlight__grid__cover"></a>                                
            </div>
        </div>
    </div>



</template>

<script>
    export default {
        props: ['blockData'],
        methods: {
            format: function(dt){

               let res = '';

                const t_second = 1;
                const t_minute = t_second * 60;
                const t_hour   = t_minute * 60;
                const t_day    = t_hour * 24;
                const t_week   = t_day * 7;
                const t_month  = Math.floor(t_day * 30.4);
                const t_year   = t_month * 12;

                const now = Math.floor(Date.now() / 1000);
                const dif = now - (Date.parse(dt)/1000);

                console.log(Date.parse(dt));

                const fuzzy_string = (time_ref, time_str) =>
                {
                    const fuzzy = Math.floor(dif / time_ref);

                    res += fuzzy + ' ' + time_str;
                    if (fuzzy != 1)
                    {
                    res += 's';
                    }
                    res += ' ago';
                }

                if (dif >= t_year)
                    fuzzy_string(t_year, 'year');
                else if (dif >= t_month)
                    fuzzy_string(t_month, 'month');
                else if (dif >= t_week)
                    fuzzy_string(t_week, 'week');
                else if (dif >= t_day)
                    fuzzy_string(t_day, 'day');
                else if (dif >= t_hour)
                    fuzzy_string(t_hour, 'hour');
                else if (dif >= t_minute)
                    fuzzy_string(t_minute, 'minute');
                else if (dif >= t_second)
                    fuzzy_string(t_second, 'second');
                else
                    res = 'now';

                return res;
                
            }
        }
    }
</script>

