<template>
  <div class="container-fluid" v-show="snap_appear || endp_appear">
    <div class="row" :class="b_color_14" :style="{ height : endp_height }">
      <div class="col-12 margin-top-20 cursor-pointer" v-scroll-to="'#port'">
        <img :src="arrow_top" width="35" class="img-fluid">
      </div>
      <div class="col-12 font-size-18 padding-top-15" :class="color_2 + ' ' + font_4">BACK TO TOP</div>
      <div
        class="col-12 margin-top-50 font-size-16 letter-spacing-1"
        :class="color_7 + ' ' + font_2"
      >
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div
              class="col-12 col-sm-auto cursor-pointer margin-horizontal-20 margin-vertical-10"
              v-for="(item, index) in link"
              :key="item + index"
              @click="userLink(index)"
            >{{link[index].text}}</div>
          </div>
        </div>
      </div>
      <div class="col-12 padding-top-25">
        <img :src="logo_2" width="35" class="img-fluid">
      </div>
      <div class="col-12 padding-top-25 font-size-14" :class="color_2 + ' ' + font_2"></div>
      <div
        class="col-12 font-size-14"
        :class="color_2 + ' ' + font_2"
        v-for="(item, index) in foot"
        :key="item + index"
      >{{footText(index)}}</div>
      <div class="col-12 font-size-14 margin-bottom-40" :class="color_2 + ' ' + font_2"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      link: this.$store.state.LINKs,
      foot: this.$store.state.FOOTER
    };
  },
  computed: {
    ...mapGetters([
      "b_color_14",
      "arrow_top",
      "color_2",
      "color_7",
      "font_2",
      "font_4",
      "font_5",
      "logo_2",
      "endp_height",

      "snap_appear",
      "endp_appear"
    ])
  },
  methods: {
    userLink(index) {
      window.open(this.link[index].address);
    },
    footText(index) {
      return this.foot[index];
    }
  }
};
</script>

<style lang="scss">
</style>
