<template>
  <div class="container-fluid" :class="b_color_4">
    <div
      class="row justify-content-center font-size-25"
      :style="{ height : proj_height }"
      v-if="$store.state.PORTFOLIO"
    >
      <transition :enter-active-class="zoom_animation" leave-active-class>
        <div
          class="col-12 font-size-32 letter-spacing-2 padding-top-50"
          v-show="snap_appear || proj_appear"
        >
          <span :class="font_4 + ' ' + color_2">{{title_1}}</span>
          <span :class="font_2 + ' ' + color_9">{{' '}}{{title_2}}</span>
        </div>
      </transition>
      <transition name="zoom" :enter-active-class="zoom_animation" leave-active-class>
        <div
          class="col-12 col-sm-8 col-xl-6 padding-vertical-5pc"
          v-show="snap_appear || $store.state.COMPONENTs.proj.animation"
        >
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-12" style="height: 540px" v-if="!$store.state.BROWSER.ie">
                <hooper :settings="hooperSettings" style="height: 540px">
                  <slide v-for="(item, index) in project" :key="item + index">
                    <div class="container-fluid">
                      <div class="row height-500">
                        <div class="col-12 align-self-end">
                          <img
                            :src="work(index)"
                            class="img-fluid"
                            :style="{ maxHeight : 400 + 'px' }"
                          >
                        </div>
                        <div class="col-12 align-self-end padding-top-10 letter-spacing-2">
                          <span
                            id="link"
                            class="cursor-pointer"
                            :class="projb + ' ' + font_1"
                            @click="projLink(index)"
                            @mouseenter="$store.state.PROJb.hover = true"
                            @mouseleave="$store.state.PROJb.hover = false"
                          >{{project[index].title}}</span>
                        </div>
                      </div>
                    </div>
                  </slide>
                  <hooper-navigation slot="hooper-addons" :class="arrow_theme"></hooper-navigation>
                </hooper>
              </div>
              <div class="col-12" v-else>
                <div class="container-fluid">
                  <transition name="zoom" :enter-active-class="zoom_animation" leave-active-class>
                    <div
                      class="row justify-content-center overflow-auto"
                      style="height: 540px"
                      v-show="snap_appear || $store.state.COMPONENTs.proj.animation"
                    >
                      <div
                        class="col-12 margin-bottom-60"
                        v-for="(item, index) in project"
                        :key="item + index"
                      >
                        <div class="container-fluid">
                          <div class="row height-500">
                            <div class="col-12 align-self-end">
                              <img :src="work(index)" class="img-fluid">
                            </div>
                            <div class="col-12 align-self-end padding-top-10 letter-spacing-2">
                              <span
                                id="link"
                                class="cursor-pointer"
                                :class="projb + ' ' + font_1"
                                @click="projLink(index)"
                                @mouseenter="$store.state.PROJb.hover = true"
                                @mouseleave="$store.state.PROJb.hover = false"
                              >{{project[index].title}}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    HooperNavigation,
    Hooper,
    Slide
  },
  data() {
    return {
      title_1: this.$store.state.TITLEs.project_1,
      title_2: this.$store.state.TITLEs.project_2,
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        keysControl: true
      }
    };
  },
  computed: {
    ...mapGetters([
      "color_2",
      "color_9",

      "b_color_4",

      "font_1",
      "font_2",
      "font_4",

      "project",
      "arrow_theme",

      "proj_height",

      "zoom_animation",

      "projb",

      "snap_appear",
      "proj_appear"
    ])
  },
  watch: {
    proj_appear: function(newValue) {
      if (newValue) {
        this.proj_animation_appear();
      }
    },
    deep: true
  },
  methods: {
    ...mapActions(["proj_animation_appear"]),
    work(index) {
      if (
        this.project[index].img === "img-1-theme.jpeg" ||
        this.project[index].img === "img-2-theme.jpeg" ||
        this.project[index].img === "img-3-theme.jpeg"
      ) {
        return require("@/assets/" +
          this.project[index].img.replace("theme", this.$store.state.THEME));
      }
      return "/user-img/" + this.project[index].img;
    },
    projLink(index) {
      window.open(this.project[index].address);
    }
  }
};
</script>

<style lang="scss">
#link {
  transition: 0.3s;
}
</style>


