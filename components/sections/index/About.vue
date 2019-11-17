<template>
    <SectionV :center="true"
    backgroundColor="#0d1017"
    alignItem="baseline"
    sectHeight="auto"
    id="about">
    <div class="testo text-uppercase">
        
        <p 
        data-aos="slide-right"
        data-aos-delay="500"
        data-aos-once="true"
        class="secTitle">ABOUT US</p>
        <h2>History</h2>
        <p 
        data-aos="slide-left"
        data-aos-delay="600"
        data-aos-once="true"
        v-html="about.history"
        class="secText"></p>
        <h2>Vision</h2>
        <div 
        data-aos="slide-right"
        data-aos-delay="500"
        data-aos-once="true"
        v-html="about.vision"
        class="secQuote">
        <p
        class="mb-0"></p>

    </div>
    </div>
    </SectionV>
</template>

<script>
import SectionV from '@/components/SectionV'
import {mapGetters} from 'vuex'
import Aos from '@/components/Aos'
export default {
    components:{SectionV},
    computed:{
      ...mapGetters({
      about: 'about/getAbout'

    })
    }
}
</script>