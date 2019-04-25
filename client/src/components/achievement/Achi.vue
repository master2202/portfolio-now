<template>
  <div class="container-fluid">
    <div class="row" :class="b_color_2 + ' ' + color_4" :style="{ height : achi_height }">
      <transition :enter-active-class="zoom_animation" leave-active-class>
        <div
          class="col-12 col-12 font-size-32 padding-top-50 letter-spacing-2"
          v-show="snap_appear || achi_appear"
        >
          <span :class="font_4">{{title_1}}</span>
          <span :class="font_2">{{' '}}{{title_2}}</span>
        </div>
      </transition>
      <div class="col-12 padding-vertical-100">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div
              class="col-12 col-md-6 col-xl-4 margin-bottom-40"
              v-for="(item, index) in certificate"
              :key="item + index"
            >
              <transition :enter-active-class="zoom_animation" leave-active-class>
                <div
                  class="container-fluid height-100pc"
                  v-show="snap_appear || $store.state.COMPONENTs.achi.animation"
                  :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1.5s' : 'animation-duration: 0s'"
                >
                  <div class="row align-items-end height-100pc">
                    <div class="col-12">
                      <img
                        :src="certify(index)"
                        width="350"
                        class="img-fluid cursor-pointer"
                        @click="$store.state.MODAL.img = certify(index), $store.state.MODAL.title = certificate[index].title, $store.state.MODAL.appear = true"
                      >
                    </div>
                    <div
                      class="col-12 font-size-25 letter-spacing-1 padding-top-10"
                      :class="font_2"
                    >{{certificate[index].title}}</div>
                  </div>
                </div>
              </transition>
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
      title_1: this.$store.state.TITLEs.course_1,
      title_2: this.$store.state.TITLEs.course_2
    };
  },
  computed: {
    ...mapGetters([
      "font_2",
      "font_4",
      "color_4",
      "b_color_2",
      "certificate",
      "achi_height",
      "zoom_animation",

      "snap_appear",
      "achi_appear"
    ])
  },
  watch: {
    achi_appear: function(newValue) {
      if (newValue) {
        this.achi_animation_appear();
      }
    },
    deep: true
  },
  methods: {
    certify(index) {
      if (
        this.certificate[index].img === "img-1-theme.jpeg" ||
        this.certificate[index].img === "img-2-theme.jpeg" ||
        this.certificate[index].img === "img-3-theme.jpeg"
      ) {
        return require("@/assets/" +
          this.certificate[index].img.replace(
            "theme",
            this.$store.state.THEME
          ));
      }
      return "/user-img/" + this.certificate[index].img;
    },
    ...mapActions(["achi_animation_appear"])
  }
};
</script>