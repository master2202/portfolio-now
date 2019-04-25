<template>
  <div id="app">
    <transition name="fade" :enter-active-class="main_animation" leave-active-class>
      <router-view v-show="$store.state.PORTFOLIO" style="animation-duration: 2s"/>
    </transition>
    <transition name="zoom">
      <div v-if="$store.state.MODAL.appear === true" id="modalBox" style="animation-duration: 0.5s">
        <span class="close" @click="$store.state.MODAL.appear = false">&times;</span>
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-12">
              <transition name="zoom" appear enter-active-class="zoomIn" leave-active-class>
                <img class="img-fluid" :src="modal_img" style="animation-duration: 1s">
              </transition>
            </div>
            <div
              class="col-12 font-size-25 letter-spacing-1 padding-top-50"
              :class="font_2 + ' ' + color_2"
            >
              <transition name="zoom" appear enter-active-class="zoomIn" leave-active-class>
                <div style="animation-duration: 0.7s">{{modal_title}}</div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div v-if="$store.state.LOADER === true" id="loaderBox">
      <div class="container padding-vertical-5" :style="{'height' : 100 + '%'}">
        <div class="row justify-content-center align-items-center" :style="{'height' : 100 + '%'}">
          <transition name="zoom" appear>
            <div class="col-auto" style="animation-duration: 0.3s">
              <div class="loader" :class="border_top_7 + ' ' + border_bottom_7"></div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <transition name="fade" appear>
      <div
        id="shield"
        v-if="$store.state.SHIELD === true"
        :style="{'height' : 100 + '%', 'backgroundColor' : 'white'}"
      >
        <div class="container padding-vertical-5" :style="{'height' : 100 + '%'}">
          <div
            class="row justify-content-center align-items-center"
            :style="{'height' : 100 + '%'}"
          >
            <!-- <transition name="zoom" appear> -->
            <div class="col-auto" style="animation-duration: 0.3s">
              <div class="initloader" :class="color_7"></div>
            </div>
            <!-- </transition> -->
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "main_animation",
      "modal_img",
      "modal_title",
      "font_2",
      "color_2",
      "color_7",
      "border_top_7",
      "border_bottom_7",

      "snap_appear"
    ]),
    appear_0() {
      return this.$store.state.ANIMATIONs.appear_0;
    }
  },
  methods: {
    ...mapActions(["init", "init_animation"])
  },
  watch: {
    appear_0() {
      this.init_animation();
    }
  },
  mounted() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.init();
      }, 250);
    });
  }
};
</script>
<style lang="scss">
//***Theme Fonts
//***Fusion
@import url("https://fonts.googleapis.com/css?family=Armata|Orbitron|Work+Sans|Fira+Mono|Share+Tech+Mono|Khula:800,600,400|Major+Mono+Display|Montserrat");

//***Dragon
@import url("https://fonts.googleapis.com/css?family=Sedgwick+Ave+Display|Merienda|Julee");

//***Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #000000;
  //background-color: black
}

div[class*="container"] {
  // border: 3px solid cyan;
}

div[class*="row"] {
  // border: 2px solid purple;
}

div[class*="col"] {
  // border: 1px solid black;
}

//***MAIN CLASSES */

//***BUTTON
button:focus {
  outline: 0;
}

//***HEIGHT
.height-75 {
  height: 75px;
}
.height-50 {
  height: 50px;
}
.height-100 {
  height: 100px;
}
.height-110 {
  height: 110px;
}
.height-200 {
  height: 200px;
}
.height-500 {
  height: 500px;
}
.height-700 {
  height: 700px;
}
.height-900 {
  height: 900px;
}
.height-100pc {
  height: 100%;
}

//***WIDTH
.width-220 {
  width: 220px;
}
.width-100 {
  width: 100px;
}

//***OVERFLOW
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}

//***FONT SIZE
.font-size-14 {
  font-size: 14px;
}
.font-size-16 {
  font-size: 16px;
}
.font-size-18 {
  font-size: 18px;
}
.font-size-20 {
  font-size: 20px;
}
.font-size-22 {
  font-size: 22px;
}
.font-size-25 {
  font-size: 25px;
}
.font-size-32 {
  font-size: 32px;
}
.font-size-35 {
  font-size: 35px;
}
.font-size-42 {
  font-size: 42px;
}

//***LETTER SPACING
.letter-spacing-1 {
  letter-spacing: 1px;
}
.letter-spacing-2 {
  letter-spacing: 2px;
}

//***LINE HEIGHT
.line-height-1 {
  line-height: 1.8;
}

//***PADDING
// top
.padding-top-3 {
  padding-top: 3px;
}
.padding-top-5 {
  padding-top: 5px;
}
.padding-top-10 {
  padding-top: 10px;
}
.padding-top-15 {
  padding-top: 15px;
}
.padding-top-20 {
  padding-top: 20px;
}
.padding-top-25 {
  padding-top: 25px;
}
.padding-top-40 {
  padding-top: 40px;
}
.padding-top-50 {
  padding-top: 50px;
}
.padding-top-75 {
  padding-top: 75px;
}
.padding-top-150 {
  padding-top: 150px;
}

// bottom
.padding-bottom-100 {
  padding-bottom: 100px;
}
.padding-bottom-25 {
  padding-bottom: 25px;
}
.padding-bottom-15pc {
  padding-bottom: 15%;
}

// horizontal
.padding-horizontal-0 {
  padding-left: 0px;
  padding-right: 0px;
}
.padding-horizontal-4 {
  padding-left: 4px;
  padding-right: 4px;
}
.padding-horizontal-5 {
  padding-left: 5px;
  padding-right: 5px;
}
.padding-horizontal-8 {
  padding-left: 8px;
  padding-right: 8px;
}
.padding-horizontal-10 {
  padding-left: 10px;
  padding-right: 10px;
}

// vertical
.padding-vertical-5pc {
  padding-top: 5%;
  padding-bottom: 5%;
}
.padding-vertical-7 {
  padding-top: 7px;
  padding-bottom: 7px;
}
.padding-vertical-100 {
  padding-top: 100px;
  padding-bottom: 100px;
}

//***MARGIN
// top
.margin-top-10 {
  margin-top: 10px;
}
.margin-top-20 {
  margin-top: 20px;
}
.margin-top-50 {
  margin-top: 50px;
}
.margin-top-75 {
  margin-top: 75px;
}
.margin-top-100 {
  margin-top: 100px;
}
.margin-top-25pc {
  margin-top: 15%;
}

// bottom
.margin-bottom-5 {
  margin-bottom: 5px;
}
.margin-bottom-10 {
  margin-bottom: 10px;
}
.margin-bottom-20 {
  margin-bottom: 20px;
}
.margin-bottom-40 {
  margin-bottom: 40px;
}
.margin-bottom-60 {
  margin-bottom: 60px;
}

// horizontal
.margin-horizontal-20 {
  margin-left: 20px;
  margin-right: 20px;
}

// vertical
.margin-vertical-10 {
  margin-top: 10px;
  margin-bottom: 10px;
}

//***CURSOR
.cursor-pointer {
  cursor: pointer;
}

//***DISPLAY
.display-inline {
  display: -webkit-inline-box;
}

//***MODAL BOX
/* The Modal (background) */
#modalBox {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 150px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

//***SHIELD
#shield {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
}

//***LOADER BOX
// Loader
#loaderBox {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
}
.loader {
  border: 10px solid rgba($color: #000000, $alpha: 0);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

//***LOADER BOX 2
// Loader
.initloader {
  font-size: 90px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 72px auto;
  position: relative;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  animation: load6 1.7s infinite ease, round 1.7s infinite ease;
}
@-webkit-keyframes load6 {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
      -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
      -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
      -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
      -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
      -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
      -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@keyframes load6 {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
      -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
      -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
      -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
      -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
      -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
      -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}
@-webkit-keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes round {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>