<template>
  <div class="container-fluid">
    <div class="row" :style="{ height : cont_height }">
      <div class="col-12 col-md-5" :class="b_color_13">
        <div class="container-fluid margin-top-100">
          <div class="row justify-content-end text-right" :class="color_2">
            <transition :enter-active-class="fadeLeft_animation" leave-active-class>
              <div
                class="col-auto font-size-42 margin-bottom-10"
                v-show="snap_appear || cont_appear"
              >
                <div :class="font_4">{{contact_text_1}}</div>
              </div>
            </transition>
            <transition :enter-active-class="fadeUp_animation" leave-active-class>
              <div
                class="container-fluid"
                v-show="snap_appear || cont_appear"
                :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1.5s' : 'animation-duration: 0s'"
              >
                <div class="row">
                  <div
                    class="col-12 font-size-32 letter-spacing-2 padding-top-5"
                    :class="font_2 + ' ' + color_2"
                  >{{name}}</div>
                  <div class="col-12 height-110 overflow-auto">
                    <div>
                      <span
                        class="font-size-32 padding-horizontal-8"
                        :class="b_color_8 + ' ' + color_7 + ' ' + font_3"
                      >{{title_1 + ''}}</span>
                      <span class="font-size-32" :class="color_9 + ' ' + font_4">{{' '}}{{title_2}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-7 ml-auto padding-bottom-15pc">
        <div class="container-fluid margin-top-100">
          <div class="row justify-content-start text-left">
            <transition :enter-active-class="fadeRight_animation" leave-active-class>
              <div
                class="col-auto font-size-25 margin-bottom-10"
                v-show="snap_appear || cont_appear"
              >
                <span :class="font_4 + ' ' + color_2">{{contact_text_2}}</span>
                <span :class="font_2 + ' ' + color_7">{{info_text}}</span>
              </div>
            </transition>
            <div class="w-100"></div>
            <transition :enter-active-class="fadeUp_animation" leave-active-class>
              <div
                class="container-fluid"
                v-show="snap_appear || cont_appear"
                :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1.5s' : 'animation-duration: 0s'"
              >
                <div class="row">
                  <div class="col-12 font-size-22">
                    <span :class="font_5 + ' ' + color_2">Email: {{mail}}</span>
                  </div>
                  <div class="col-12 font-size-22" v-if="phone !== ''">
                    <span :class="font_5 + ' ' + color_2">Tel: {{phone}}</span>
                  </div>
                  <div class="col-12 font-size-22" v-else>
                    <span :class="font_5 + ' ' + color_2"></span>
                  </div>
                </div>
              </div>
            </transition>
            <transition :enter-active-class="fadeRight_animation" leave-active-class>
              <div class="col-auto font-size-25 padding-top-40" v-show="snap_appear || cont_appear">
                <span :class="font_4 + ' ' + color_2">{{send_text}}</span>
                <span :class="font_2 + ' ' + color_7">{{message_text}}</span>
              </div>
            </transition>
            <div class="w-100"></div>
            <transition :enter-active-class="fadeUp_animation" leave-active-class>
              <div
                class="container-fluid"
                v-show="snap_appear || cont_appear"
                :style="$store.state.ANIMATIONs.unlock ? 'animation-duration: 1.5s' : 'animation-duration: 0s'"
              >
                <div class="row">
                  <div class="col-12 col-lg-4">
                    <div class="form-group">
                      <input
                        id="name"
                        class="form-control"
                        :class="b_color_3"
                        placeholder="Name"
                        v-model="client"
                        v-validate="'required|min:3|max:50'"
                        type="text"
                        name="name"
                      >
                      <span :class="color_7" v-if="errors.has('name')">{{ errors.first('name') }}</span>
                    </div>
                    <div class="form-group">
                      <input
                        id="email"
                        class="form-control"
                        :class="b_color_3"
                        placeholder="Email"
                        v-model="email"
                        v-validate="'required|email'"
                        type="email"
                        name="email"
                      >
                      <span :class="color_7" v-if="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>
                    <div class="form-group">
                      <input
                        id="subject"
                        class="form-control"
                        :class="b_color_3"
                        placeholder="Subject"
                        v-model="subject"
                        v-validate="'required|min:3'"
                        type="text"
                        name="subject"
                      >
                      <span
                        :class="color_7"
                        v-if="errors.has('subject')"
                      >{{ errors.first('subject') }}</span>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="form-group">
                      <textarea
                        id="message"
                        class="form-control"
                        :class="b_color_3"
                        rows="5"
                        placeholder="Message"
                        v-model="message"
                        v-validate="'required|min:5'"
                        type="text"
                        name="message"
                      ></textarea>
                      <span
                        :class="color_7"
                        v-if="errors.has('message')"
                      >{{ errors.first('message') }}</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="container-fluid">
                      <div class="row">
                        <div
                          id="send"
                          type="submit"
                          class="col-auto padding-vertical-7 font-size-20 letter-spacing-1 cursor-pointer"
                          :class="sendb + ' ' + font_1"
                          @click="validateBeforeSubmit()"
                          @mousedown="$store.state.SENDb.active = true"
                          @mouseup="$store.state.SENDb.active = false"
                          @mouseenter="$store.state.SENDb.hover = true"
                          @mouseleave="$store.state.SENDb.hover = false"
                        >{{button_text}}</div>
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      name: this.$store.state.NAME,
      title_1: this.$store.state.TITLEs.port_1,
      title_2: this.$store.state.TITLEs.port_2,
      mail: this.$store.state.EMAIL,
      phone: this.$store.state.PHONE,

      contact_text_1: this.$store.state.CONTACT.contact_text_1,
      contact_text_2: this.$store.state.CONTACT.contact_text_2,
      info_text: this.$store.state.CONTACT.info_text,
      send_text: this.$store.state.CONTACT.send_text,
      message_text: this.$store.state.CONTACT.message_text,
      button_text: this.$store.state.CONTACT.button_text
    };
  },
  computed: {
    ...mapGetters([
      "wide",
      "logo_1",

      "color_2",
      "color_7",
      "color_9",

      "b_color_2",
      "b_color_3",
      "b_color_4",
      "b_color_6",
      "b_color_8",
      "b_color_12",
      "b_color_13",

      "font_1",
      "font_2",
      "font_3",
      "font_4",
      "font_5",

      "border_1",

      "cont_height",

      "fadeLeft_animation",
      "fadeRight_animation",
      "fadeUp_animation",

      "sendb",

      "snap_appear",
      "cont_appear"
    ]),
    client: {
      get() {
        return this.$store.state.MESSAGE.client;
      },
      set(val) {
        this.$store.commit("CLIENT", val);
      }
    },
    email: {
      get() {
        return this.$store.state.MESSAGE.email;
      },
      set(val) {
        this.$store.commit("EMAIL", val);
      }
    },
    subject: {
      get() {
        return this.$store.state.MESSAGE.subject;
      },
      set(val) {
        this.$store.commit("SUBJECT", val);
      }
    },
    message: {
      get() {
        return this.$store.state.MESSAGE.message;
      },
      set(val) {
        this.$store.commit("MESSAGE", val);
      }
    }
  },
  methods: {
    ...mapActions(["sendMessage"]),
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.sendMessage();
        } else {
          this.$swal("Input is not valid!", "", "warning");
        }
      });
    }
  }
};
</script>

<style lang="scss">
#message {
  height: 149px;
}
#send {
  transition: 0.3s;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
}
</style>
 