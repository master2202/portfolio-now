<template>
  <div class="container-fluid">
    <div class="row" :class="b_color_2" :style="{ height : tech_height }">
      <transition :enter-active-class="fadeLeft_animation" leave-active-class>
        <div
          class="col-12 col-md-5 padding-vertical-100"
          :class="b_color_10"
          :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1.5s' : 'animation-duration: 0s'"
          v-show="$store.state.ANIMATIONs.appear_1"
        >
          <div class="container-fluid">
            <div class="row justify-content-center" :class="color_4">
              <div class="col-auto font-size-42 text-left">
                <transition :enter-active-class="fadeDown_animation" leave-active-class>
                  <div :class="font_4" v-show="snap_appear || tech_appear">{{title_1}}</div>
                </transition>
                <transition :enter-active-class="fadeUp_animation" leave-active-class>
                  <div
                    :class="font_2"
                    v-show="snap_appear || tech_appear"
                    :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1.5s' : 'animation-duration: 0s'"
                  >{{title_2}}</div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div class="col-12 col-md-7 ml-auto padding-vertical-100">
        <div class="container-fluid">
          <div class="row text-left">
            <div
              class="col-12 col-xl-6 margin-bottom-20"
              v-for="(item, index) in box"
              :key="item + index"
            >
              <div class="container-fluid">
                <div class="row">
                  <div class="col-2 text-right padding-top-5">
                    <transition :enter-active-class="rotate_animation" leave-active-class>
                      <img
                        :src="logo_1"
                        width="30"
                        v-show="snap_appear || $store.state.COMPONENTs.tech.animation"
                        :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1.5s' : 'animation-duration: 0s'"
                      >
                    </transition>
                  </div>
                  <div class="col-10">
                    <div class="container-fluid">
                      <div class="row" :class="color_4">
                        <transition :enter-active-class="fadeUp_animation" leave-active-class>
                          <div
                            class="col-12 font-size-32"
                            :class="font_4"
                            v-show="snap_appear  || $store.state.COMPONENTs.tech.animation"
                            :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1.5s' : 'animation-duration: 0s'"
                          >{{box[index].title}}</div>
                        </transition>
                        <transition :enter-active-class="fadeUp_animation" leave-active-class>
                          <div
                            class="col-12 font-size-18"
                            :class="font_2"
                            v-show="snap_appear  || $store.state.COMPONENTs.tech.animation"
                            :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1.5s' : 'animation-duration: 0s'"
                          >{{box[index].text}}</div>
                        </transition>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      title_1: this.$store.state.TITLEs.tech_1,
      title_2: this.$store.state.TITLEs.tech_2,
      box: this.$store.state.TEXTs.tech
    };
  },
  computed: {
    ...mapGetters([
      "wide",
      "logo_1",

      "color_4",

      "b_color_6",
      "b_color_2",
      "b_color_10",

      "font_2",
      "font_4",

      "snap_appear",
      "tech_appear",

      "tech_height",
      "fadeLeft_animation",
      "fadeRight_animation",
      "fadeUp_animation",
      "fadeDown_animation",
      "rotate_animation"
    ])
  },
  watch: {
    tech_appear: function(newValue) {
      if (newValue) {
        this.tech_animation_appear();
      }
    },
    deep: true
  },
  methods: {
    ...mapActions(["tech_animation_appear"])
  }
};
</script>