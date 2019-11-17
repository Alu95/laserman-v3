<template>
    <div>
        <BurgerM 
        :navItems='navItems'
        />
        <MainMenu />
        <!-- HOME -->
        <SectionV :center="true"
        backgroundColor="transparent"
        id="home"> 
            <h1 class="cover-heading testo">Laserman</h1>
            <video
            muted
            loop
            autoplay
            class="testVideo"
            >
                <source src="video/video1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </SectionV>
        <!-- ABOUT -->
        <About />
        <!-- PORTFOLIO -->
        <SectionV id="portfolio"
        center="true"
        backgroundColor="white"
        alignItem="baseline"
        >
        <div class="row">
          <div class="vl"></div>
        </div>
        <div class="row text-uppercase">
          <div class="testo secTitle blTitle">PRODUCTIONS</div>
        </div>
        
        </SectionV>
        <!-- GALLERY -->       
        <!-- <SectionV :center="true" alignItem="baseline"
        id="gallery"> 
            <Aos />
        </SectionV> -->
        <!-- STAFF -->      
        <SectionV id="staff" alignItem="baseline" :center="true">
        <div class="row text-uppercase">
          <div class="testo secTitle blTitle">PORTFOLIO</div>
        </div>
        </SectionV>
        <!-- CONTACT -->     
        <SectionV id="gallery" :center="true" backgroundColor="white" alignItem="baseline">
          <div class="row text-uppercase">
          <div class="testo secTitle">GALLERY</div>
        </div>
        </SectionV>
        <SectionV id="contact" :center="true" alignItem="baseline">
          <div class="row text-uppercase">
          <div class="testo secTitle">CONTACTS</div>
        </div>
        </SectionV>
        <Footer />
    </div>
</template>

<script>
import SectionV from '@/components/SectionV'
import About from '@/components/sections/index/About'
import BurgerM from '@/components/BurgerM'
import Aos from '@/components/Aos'
import Footer from '@/components/Footer'
import MainMenu from '@/components/menu/MainMenu'



export default {
    data: () => {
        return {
          navItems: [
            {name:'Home',link:'#home'},
            {name:'About',link:'#about'},
            {name:'Portfolio',link:'#portfolio'},
            {name:'Gallery',link:'#gallery'},
            {name:'Staff',link:'#staff'},
            {name:'Contact',link:'#contact'},
            ],
        }
    },
    components: {
        SectionV,
        BurgerM,
        Aos,
        Footer,
        MainMenu,
        About
    },
    created() {
      if (process.browser) { 
        window.addEventListener('scroll', this.handleScroll);
      }
    },
    destroyed () {
      if (process.browser) { 
          window.removeEventListener('scroll', this.handleScroll);
      }
    },
    methods:{
    }

    
}
</script>

<style scoped>
.testVideo {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1000;
  object-fit: cover;
  overflow: hidden;
  display: block;
}

.cover-heading {
  z-index: 10;
}
</style>
