<template>
  <!--Navs Container-->
  <div id="navs-container" class="container-fluid">
    <!--Navbar row-->
    <div id="navbar-row" :class="navbar_row" class="row justify-content-around">
      <!--Sidebar Buton col -->
      <div v-if="!wide" class="col-2 align-self-center mr-auto">
        <div class="row justify-content-center">
          <div
            class="col-auto cursor-pointer"
            v-show="!sidebar"
            @click="$store.state.NAVs.sidebar.active = true"
          >
            <img :src="logo_1" width="30" class="img-fluid">
          </div>
          <div
            class="col-auto cursor-pointer"
            v-show="sidebar"
            @click="$store.state.NAVs.sidebar.active = false"
            :class="b_color_4"
          >
            <img :src="logo_2" width="30" class="img-fluid">
          </div>
        </div>
      </div>
      <!--LOGO col-->
      <div id="nav-col-left" class="col-auto navbar-cols font-size-25 align-self-start">
        <div class="container-fluid" :class="font_1">
          <div class="row font-size-25 padding-horizontal-10 padding-top-3" :class="b_color_4">
            <div class="col-auto cursor-pointer" v-scroll-to="'#port'">
              <div class="letter-spacing-2" :class="color_2 + ' ' + font_3">{{logo_text}}</div>
            </div>
          </div>
        </div>
      </div>
      <!--Navigation col-->
      <div id="nav-col-right" v-if="wide" class="col-auto navbar-cols" :class="navbar_cols">
        <div class="container-fluid">
          <div class="row font-size-16 display-inline" :class="font_1 + ' ' + color_4">
            <div
              class="col-auto"
              :class="$store.state.NAVs.elements[item].active_class"
              v-for="(item, index) in elem"
              :key="item + index"
            >
              <span
                class="nav-btn cursor-pointer"
                v-scroll-to="'#' + item"
                @click="activeNavigation(item)"
                @mouseenter="$store.state.NAVs.elements[item].hover = true, hoverNavigation(item)"
                @mouseleave="$store.state.NAVs.elements[item].hover = false, hoverNavigation(item)"
              >
                <div
                  class="nav-btn-text margin-top-10 margin-bottom-5 padding-horizontal-5 letter-spacing-2"
                  :class="$store.state.NAVs.elements[item].hover_class"
                >{{name[index]}}</div>
                <div class="nav-btn-underline margin-bottom-10" :class="b_color_4"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!wide" class="col-2 ml-auto"></div>
    </div>
    <!--Sidebar row-->
    <transition name="fadeLeft" appear>
      <div
        id="sidebar"
        class="row width-220"
        v-on-clickaway="away"
        :class="b_color_5"
        v-if="sidebar"
        :style="{height:$store.state.APP.height + 'px'}"
        style="animation-duration: 0.3s"
      >
        <div class="container-fluid">
          <div class="row font-size-16" :class="font_1 + ' ' + color_4">
            <div
              class="col-12"
              :class="$store.state.NAVs.elements[item].active_class"
              v-for="(item, index) in elem"
              :key="item + index"
            >
              <div class="row">
                <div class="col-auto">
                  <span
                    class="nav-btn cursor-pointer"
                    v-scroll-to="'#' + item"
                    @click="activeNavigation(item)"
                    @mouseenter="$store.state.NAVs.elements[item].hover = true, hoverNavigation(item)"
                    @mouseleave="$store.state.NAVs.elements[item].hover = false, hoverNavigation(item)"
                  >
                    <div
                      class="text-left nav-btn-text margin-top-10 margin-bottom-5 padding-horizontal-5 letter-spacing-2"
                      :class="$store.state.NAVs.elements[item].hover_class"
                    >{{name[index]}}</div>
                    <div class="nav-btn-underline margin-bottom-10" :class="b_color_4"></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-12 align-self-end margin-bottom-60 text-right letter-spacing-2"
          :class="color_4 + ' ' + font_3"
        >
          {{logo_text_sidebar}}
          <img :src="logo_1" width="20" class="img-fluid">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mixin as clickaway } from "vue-clickaway";
export default {
  data() {
    return {
      elem: ["port", "tech", "abou", "achi", "proj", "cont"],
      name: [
        this.$store.state.NAVs.elements.port.name,
        this.$store.state.NAVs.elements.tech.name,
        this.$store.state.NAVs.elements.abou.name,
        this.$store.state.NAVs.elements.achi.name,
        this.$store.state.NAVs.elements.proj.name,
        this.$store.state.NAVs.elements.cont.name
      ]
    };
  },
  computed: {
    ...mapGetters([
      "wide",
      "sidebar",
      "dock",
      "logo_text",
      "logo_text_sidebar",
      "logo_1",
      "logo_2",

      "color_1",
      "color_2",
      "color_4",

      "b_color_1",
      "b_color_2",
      "b_color_3",
      "b_color_4",
      "b_color_5",

      "font_1",
      "font_3"
    ]),
    navbar_row() {
      if (this.wide && !this.dock) {
        return "align-items-end height-75 " + this.b_color_1;
      }
      if (this.wide && this.dock) {
        return "align-items-end height-50 " + this.b_color_2;
      }
      return "align-items-center height-50 " + this.b_color_2;
    },
    navbar_cols() {
      if (this.wide && !this.dock) {
        return this.b_color_3;
      }
    }
  },
  mixins: [clickaway],
  methods: {
    ...mapActions(["activeNavigation", "hoverNavigation"]),
    away() {
      this.$store.state.NAVs.sidebar.active = false;
    }
  }
};
</script>

<style lang="scss">
#navs-container {
  position: fixed;
  z-index: 1;
}

#navbar-row {
  -webkit-transition: height 0.5s, background-color 0.5s;
  transition: height 0.5s, background-color 0.5s;
}

.navbar-cols {
  -webkit-transition: background-color 0.5s; /* Safari */
  transition: background-color 0.5s;
}

//***Navbar Button Effects
.nav-btn {
  -webkit-transition: background-color 0.5s; /* Safari */
  transition: background-color 0.5s;
}

.nav-btn-text {
  -webkit-transition: background-color 0.5s; /* Safari */
  transition: background-color 0.5s;
}
.nav-btn-underline {
  border-radius: 100px;
  margin-bottom: 10px;
  width: 0;
  height: 1px;
  -webkit-transition: width 0.5s; /* Safari */
  transition: width 0.5s;
}
.nav-btn:hover .nav-btn-underline {
  width: 100%;
}
</style>
