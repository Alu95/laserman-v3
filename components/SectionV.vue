<template>
    <div>
        <div class="cover-container d-flex h-100 p-3 mx-auto"
            :style="{
              'background-color': bgColor,
              'align-items': itemAlign,
              'min-height': heightSec
              }">
            <slot v-if="center"></slot>
            <div></div>
            </div>
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
    computed: {
        bgColor() {
            if (this.backgroundColor == undefined) {
                return '#0d1017'
            }
            else{
                return this.backgroundColor
            }
        },
        itemAlign() {
            if (this.alignItem == undefined) {
                return 'center'
            }
            else{
                return this.alignItem
            }
        },
        heightSec() {
            if (this.sectHeight == undefined) {
                return '100vh'
            }
            else{
                return this.alignItem
            }
        }
    },
    props: ['center',
        'centerItems',
        'footer',
        'footerItems',
        'backgroundColor',
        'alignItem',
        'sectHeight'
        ]
    
}
</script>
<style scoped>
/*
 * Globals
 */

/* Links */
a,
a:focus,
a:hover {
  color: #fff;
}

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
  background-color: #fff;
  border: .05rem solid #fff;
}


/*
 * Base structure
 */
html,
body,
#__nuxt {
  height: 100%;
}

.cover-container {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-pack: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #fff;
}


/*
 * Cover
 */
.cover {
  padding: 0 1.5rem;
  height: 100%;
}
.cover .btn-lg {
  padding: .75rem 1.25rem;
  font-weight: 700;
}

</style>
