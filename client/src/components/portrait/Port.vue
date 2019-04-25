<template>
  <div class="container-fluid">
    <div class="row height-900">
      <transition :enter-active-class="fadeLeft_animation" leave-active-class>
        <div
          class="padding-top-150 height-900"
          :class="port_class"
          :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1.5s' : 'animation-duration: 0s'"
          v-show="$store.state.ANIMATIONs.appear_1"
        >
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 padding-bottom-25">
                <img :src="avatar" class="img-fluid" :style="{ maxHeight : 500 + 'px' }">
              </div>
              <transition :enter-active-class="fadeDown_animation" leave-active-class>
                <div
                  v-if="$store.state.ANIMATIONs.appear_3"
                  class="col-12 font-size-35 letter-spacing-2"
                  :class="font_2 + ' ' + color_2"
                  :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1s' : 'animation-duration: 0s'"
                >{{name}}</div>
              </transition>
              <div class="col-12 height-200 overflow-auto">
                <transition :enter-active-class="fadeUp_animation" leave-active-class>
                  <div
                    v-if="$store.state.ANIMATIONs.appear_3"
                    :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1s' : 'animation-duration: 0s'"
                  >
                    <span
                      class="padding-horizontal-8 font-size-42"
                      :class="b_color_8 + ' ' + color_7 + ' ' + font_3"
                    >{{title_1 + ''}}</span>
                    <span class="font-size-42" :class="color_9 + ' ' + font_4">{{' '}}{{title_2}}</span>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: this.$store.state.NAME,
      title_1: this.$store.state.TITLEs.port_1,
      title_2: this.$store.state.TITLEs.port_2
    };
  },
  computed: {
    ...mapGetters([
      "wide",
      "avatar",

      "color_2",
      "color_7",
      "color_9",

      "b_color_6",
      "b_color_8",

      "font_1",
      "font_2",
      "font_3",
      "font_4",

      "fadeLeft_animation",
      "fadeDown_animation",
      "fadeUp_animation"
    ]),
    port_class() {
      if (this.wide) {
        return "col-5 " + this.b_color_6;
      }
      return "col-12 " + this.b_color_6;
    }
  }
};
</script>