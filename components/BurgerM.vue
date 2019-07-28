<template>
    <div>
        <header class="masthead mb-auto">
            <div class="logo">
                <div class="logoPic"></div>
                <p>LOGO</p>
            </div>
            <div
            :class="{ 'is-active' : burger,
            'hamburger': true, 
            'hamburger--emphatic' : true }"
            @click="burger = !burger"
            tabindex="0"
            aria-label="Menu"
            role="button" 
            aria-controls="nav"
            >
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </div>

            <div class="inner rounded animated slideInRight" v-if="burger">
            <nav class="nav flex-column nav-masthead animated slideInRight">
                <a class="nav-link" 
                v-for="(elem, index) in navItems"
                :key="index"
                href=""
                v-scroll-to="elem.link">{{elem.name}}</a>
            </nav>
            </div>
        </header> 
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            //css
            burger: false
        }
    },
    props: ['navItems']
}
</script>

<style scoped>

/*
 * Header
 */
.masthead {
    display: block;
  margin-bottom: 2rem;
  position: fixed;
  right: 10px;
  width: 100%;
  z-index: 1000;
}

.masthead-brand {
  margin-bottom: 0;
}

.nav-masthead .nav-link {
  padding: 5px;
  margin-bottom: 5px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  position: relative;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead {
  margin-top:  5px;
  position: relative;
  z-index: 995;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}
@media (min-width: 48em) {
  .masthead-brand {
    float: left;
  }
  .nav-masthead {
    float: right;
  }
}
.hamburger{
 float: right;
 z-index: 1000;
}
.inner{
    position: absolute;
    top: 60px;
    right: 0px;
    z-index: 995;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
}
.logoPic{
  background-image: url('/icon.png');
  height: 4vh;
  width: 4vh; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
}
.logo{
z-index: 5;
left: 25px;
top: 10px;
position: absolute;
color: white;
cursor: pointer;
}
</style>