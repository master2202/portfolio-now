<template>
  <div class="container-fluid">
    <div
      class="row justify-content-center font-size-25 padding-top-75"
      :class="b_color_11 + ' ' + font_1 + ' ' + color_2"
      :style="{ height : abou_height }"
    >
      <transition :enter-active-class="main_animation" leave-active-class>
        <div
          class="col-12 letter-spacing-2"
          v-show="snap_appear || abou_appear"
          :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1.5s' : 'animation-duration: 0s'"
        >{{about_title}}</div>
      </transition>
      <transition :enter-active-class="main_animation" leave-active-class>
        <div
          class="col-12 col-md-6 letter-spacing-1 line-height-1 padding-bottom-100 padding-top-50"
          v-show="snap_appear || $store.state.COMPONENTs.abou.animation"
          :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1.5s' : 'animation-duration: 0s'"
        >
          <span
            v-for="(item, index) in about_text"
            :key="item + index"
            :class="mark(index)"
          >{{' '}}{{about_text[index].replace(/^#+/i, '')}}</span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      about_title: this.$store.state.TITLEs.about,
      about_text: this.$store.state.TEXTs.about.split(" ")
    };
  },
  computed: {
    ...mapGetters([
      "font_1",
      "color_2",
      "color_7",
      "b_color_11",
      "abou_height",
      "main_animation",

      "snap_appear",
      "abou_appear"
    ])
  },
  watch: {
    abou_appear: function(newValue) {
      if (newValue) {
        this.abou_animation_appear();
      }
    },
    deep: true
  },
  methods: {
    ...mapActions(["abou_animation_appear"]),
    mark(index) {
      if (this.about_text[index].charAt(0) === "#") {
        return this.color_7;
      }
      return this.color_2;
    }
  }
};
</script>