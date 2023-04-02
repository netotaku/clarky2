<template>  
  <div class="hg">
    <component v-for="(block, index) in pagedata.blocks" :key="index" :is="block.name" :blockData="block" /> 
  </div>
</template>

<script>
  import { useRoute } from 'vue-router'
  import sitedata from "@/json/site.json"
  import Icons from "@/views/blocks/Icons.vue"
  import Spotlight from "@/views/blocks/Spotlight.vue"
  
  export default{
    components:{
      Icons, Spotlight
    },
    data(){
      return{
        pagedata: sitedata[useRoute().path],
        route: useRoute()
      }
    }
  }
</script>

<style lang="scss">

  $gutter: 20px;

  @mixin hgrid($columns, $gap, $break, $alias) {

      display: grid;
      grid-template-columns: repeat($columns, 1fr);   
      gap: $gap;

      &__u{   
          
          grid-column: span $columns; 

          @media only screen and (min-width : $break) {  

              @for $i from 1 through ($columns+1) {
                  // spans
                  &--span-#{$i}{
                      grid-column: span $i;
                  }
                  // starts
                  &--start-#{$i}{
                      grid-column-start: $i;
                  } 
                  // ends                
                  &--end-#{$i}{
                      grid-column-end: $i;
                  }
              }  
      
              // alias
              @if ($alias) {
                  
                  @if ($columns % 3 > 0){
                      @warn "Columns not divisible by 3, therefore no thirds modifier alias";                
                  } @else {
                      &--thd{
                          grid-column: span ($columns / 3);
                      }
                      &--2-thds{
                          grid-column: span (($columns / 3) * 2);
                      }
                  }

                  @if ($columns % 4 > 0){
                      @warn "Columns not divisible by 4, therefore no quarters modifier alias";                
                  } @else {
                      &--qtr{
                          grid-column: span ($columns / 4);
                      }
                      &--3-qtrs{
                          grid-column: span (($columns / 4) * 3);
                      }
                  }

                  @if ($columns % 2 > 0){
                      @warn "Columns not divisible by 2, therefore no halves modifier alias";                
                  } @else {
                      &--hlf{
                          grid-column: span ($columns / 2);
                      }
                  }            

                  &--ful{
                      grid-column: span $columns;
                  }

              }
          }
      }
  }


  .hg{ // arbitrary namespace
    
    $break: 600px; // arbitrary breakpoint
    
    // include a 12 column grid system with a 20px gap 
    // and alias classes which appears when the screen width exceeds 800px.
    @include hgrid(12, $gutter, $break, true);
    
    // extend 
    @media only screen and (min-width : $break) {  
        // &--complex{
        //     grid-template-columns: repeat(3, 1fr);           
        // }
    }
    
}

  .well{
    display: block;
    background: whitesmoke;
    position: relative;
    overflow: hidden;
    border: solid 1px #ccc;
    border-radius: 4px;
    padding: $gutter;
    text-decoration: none;
    &--spotlight{
      height: 350px;
    }
  }

</style>