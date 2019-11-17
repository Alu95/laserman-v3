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
            <h1 class="cover-heading testo">SENTENCE 1</h1>
           <input type="button" value="Test" />
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
         <p 
         data-aos="slide-left"
         data-aos-delay="600"
         data-aos-once="true"
         class="secText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta nisi nunc, sed posuere velit sodales vel. Donec ac urna sit amet justo pharetra ornare. In hac habitasse platea dictumst. Nam dictum id lacus in commodo. Nulla a blandit ipsum. Proin nec imperdiet diam, ut rhoncus diam. Integer vulputate mauris pulvinar felis ultrices, eget facilisis ligula molestie. Ut venenatis lacus odio, lacinia auctor tortor vestibulum quis. Nam ante ipsum, commodo vel tincidunt a, tempor a dui. Donec non condimentum lacus, ac feugiat elit. Etiam vel pharetra nisl, eu rutrum ante. Maecenas at malesuada nisi. Mauris quis eros purus. Praesent id consectetur augue, eu ornare dui. Ut elementum, sem sit amet auctor mollis, ante urna volutpat metus, vel laoreet ante mi quis lectus. Nulla porttitor sollicitudin nisi a tristique.</p>
         <div 
         data-aos="slide-right"
         data-aos-delay="500"
         data-aos-once="true"
         class="secQuote">
           <p 
           class="mb-0">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.”</p>
          <footer class="blockquote-footer">Quotation of <cite title="Source Title">Someone Here</cite></footer>
        </div>
        </div>
        </SectionV>
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
          <div class="testo secTitle blTitle">PORTFOLIO</div>
        </div>
        
        </SectionV>
        <!-- GALLERY -->       
        <SectionV :center="true" alignItem="baseline"
        id="gallery"> 
            <Aos />
        </SectionV>
        <!-- STAFF -->      
        <SectionV id="staff" backgroundColor="white" alignItem="baseline" :center="true">
        <div class="row text-uppercase">
          <div class="testo secTitle blTitle">Staff</div>
        </div>
        </SectionV>
        <!-- CONTACT -->     
        <SectionV id="contact" :center="true" alignItem="baseline">
          <div class="row text-uppercase">
          <div class="testo secTitle">contacts</div>
        </div>
        </SectionV>
        <Footer />
    </div>
</template>

<script>
import SectionV from '@/components/SectionV'
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
          ip: '',
          authTwitter: {
              oauth_consumer_key:"37atojQkhkb4FdJo5xjvzZUDQ", 
              oauth_nonce:"generated-nonce", 
              oauth_signature:"generated-signature", 
              oauth_signature_method:"HMAC-SHA1", 
              oauth_timestamp:"generated-timestamp", 
              oauth_token:"177893745-SoqHNZ2yz8t80jQ6C99PXqCuzq9XAN5zJfe5uei4", 
              oauth_version:"1.0"
          }
        }
    },
    components: {
        SectionV,
        BurgerM,
        Aos,
        Footer,
        MainMenu
    },
    created() {
      this.fetch();
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
       async fetch() {
        await this.$axios.$get('http://icanhazip.com')
        .then( res => {
          this.ip = res
        })
        .catch(err => {
          console.log(err);
        });
      },
      async fetch2() {
        this.$axios.setHeader('Authorization', getAuthorization => (
                'GET',
                'https://api.twitter.com/1.1/users/show.json',
                { 'screen_name': 'Alu995'}
            ));

        await this.$axios.$get('https://api.twitter.com/1.1/search/tweets.json?q=from%3Atwitterdev&result_type=mixed&count=2')
        .then( res => {
          this.ip = res
        })
        .catch(err => {
          console.log(err);
        });
      },
      handleScroll () {
        //console.log(window.scrollY)
      }
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
