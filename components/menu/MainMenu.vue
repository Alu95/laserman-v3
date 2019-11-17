<template>
    <div v-if="isOpen">
        <div class="row">
            <div class="col menuCol">
                <h1>About Us</h1>
                <About class="menuLi"/>
            </div>
            <div class="col menuCol">
                <h1>Production</h1>
            </div>
            <div class="col menuCol">
                <h1>Profolio</h1>
            </div>
            <div class="col menuCol">
                <h1>Gallery</h1>
            </div>
            <div class="col menuCol">
                <h1>Contacts</h1>
            </div>
        </div>
    </div>
</template>

<script>
import About from './menuParts/About'
import { mapMutations, mapGetters } from 'vuex'

export default {
    components:{
        About
    },
    created() {
        console.log("test", this.$store.state.menuStore.menu.isOpen)
    },
    computed: {
        isOpen(){
            return this.$store.state.menuStore.menu.isOpen;
        } 
    }
}
</script>

<style scoped>
h1{
    padding-top: 75px;
    color: aliceblue;
}

</style>