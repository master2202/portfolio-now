import Vue from "vue";
import Vuex from "vuex";
import ClientService from "./services/ClientService";
Vue.use(Vuex);

export default new Vuex.Store({
  //***STATE:: */
  state: {
    //***MS BROWSER*/
    BROWSER: {
      ie: false,
      edge: false
    },

    //***THEMEs */
    THEME: config.theme,

    //***PORTFOLIO */
    PORTFOLIO: false,

    //***PORTFOLIO */
    PORTFOLIO: false,

    //***APP */
    APP: {
      wide: true,
      width: null,
      height: null
    },

    //***ANIMATIONs */
    ANIMATIONs: {
      unlock: false,
      appear_0: false,
      appear_1: false,
      // appear_2 : false,
      appear_3: false
    },

    //***AVATAR */
    AVATAR: config.avatar,

    //***NAME */
    NAME: config.name,

    //***TITLEs */
    TITLEs: {
      port_1: config.title.port_1,
      port_2: config.title.port_2,
      tech_1: config.title.tech_1,
      tech_2: config.title.tech_2,
      about: config.title.about,
      course_1: config.title.course_1,
      course_2: config.title.course_2,
      project_1: config.title.project_1,
      project_2: config.title.project_2
    },

    //***TEXTs */
    TEXTs: {
      tech: config.text.tech,
      about: config.text.about
    },

    //***CONTACT TEXTs */
    CONTACT: {
      contact_text_1: config.contact.contact_text_1,
      contact_text_2: config.contact.contact_text_2,
      info_text: config.contact.info_text,
      send_text: config.contact.send_text,
      message_text: config.contact.message_text,
      button_text: config.contact.button_text
    },

    //***MESSAGE */
    MESSAGE: {
      client: null,
      email: null,
      subject: null,
      message: null
    },

    //***EMAIL */
    EMAIL: config.email,

    //***PHONE */
    PHONE: config.phone,

    //***LINKS */
    LINKs: config.links,

    //***FOOTER */
    FOOTER: config.footer,

    //***LOGOs */
    LOGOs: {
      logo_1: {
        FUSION: "logo-1-FUSION.svg",
        DRAGON: "logo-1-DRAGON.svg"
      },
      logo_2: {
        FUSION: "logo-2-FUSION.svg",
        DRAGON: "logo-2-DRAGON.svg"
      },
      logo_text: config.logo_text
    },

    //***ACHIEVEMENs */
    ACHIEVEs: {
      certificate: config.certificate,
      project: config.project
    },

    //***LOADER */
    LOADER: false,

    //***MODAL BOX */
    MODAL: {
      obj: null,
      appear: false,
      img: "",
      title: ""
    },

    //***SEND BUTTON */
    SENDb: {
      active: false,
      hover: false,
      class: ""
    },

    //***PROJECT LINK BUTTON */
    PROJb: {
      hover: false,
      class: ""
    },

    //***NAVs */
    NAVs: {
      navbar: {
        dock: false,
        breakpoint: null,
        left: {
          obj: null
        },
        right: {
          obj: null
        }
      },
      sidebar: {
        active: false
      },
      elements: {
        abou: {
          name: config.navs.about,
          active_class: "",
          hover_class: "",
          click: false,
          hover: false
        },
        achi: {
          name: config.navs.achievement,
          active_class: "",
          hover_class: "",
          click: false,
          hover: false
        },
        cont: {
          name: config.navs.contact,
          active_class: "",
          hover_class: "",
          click: false,
          hover: false
        },
        endp: {
          name: "",
          active_class: "",
          hover_class: "",
          click: false,
          hover: false
        },
        port: {
          name: config.navs.home,
          active_class: "",
          hover_class: "",
          click: false,
          hover: false
        },
        proj: {
          name: config.navs.works,
          active_class: "",
          hover_class: "",
          click: false,
          hover: false
        },
        tech: {
          name: config.navs.technique,
          active_class: "",
          hover_class: "",
          click: false,
          hover: false
        }
      }
    },

    //***SECTIONs */
    SECTIONs: {
      sec1: {
        obj: null,
        img: config.background_image_1
      },
      sec2: {
        obj: null,
        img: config.background_image_2
      },
      sec3: {
        obj: null,
        img: config.background_image_3
      }
    },

    //***COMPONENTs */
    SHIELD: true,
    SNAP: false,
    COMPONENTs: {
      abou: {
        obj: null,
        appear: false,
        animation: false,
        active: false,
        height: 0
      },
      achi: {
        obj: null,
        appear: false,
        animation: false,
        active: false,
        height: 0
      },
      cont: {
        obj: null,
        appear: false,
        animation: false,
        active: false,
        height: 0
      },
      endp: {
        obj: null,
        appear: false,
        animation: false,
        active: false,
        height: 0
      },
      port: {
        obj: null,
        appear: false,
        animation: false,
        active: false,
        height: 0
      },
      proj: {
        obj: null,
        appear: false,
        animation: false,
        active: false,
        height: 0
      },
      tech: {
        obj: null,
        appear: false,
        animation: false,
        active: false,
        height: 0
      }
    }
  },

  //***GETTERS:: */
  getters: {
    //***APP Appear State */
    app: state => {
      return state.APP.appear;
    },

    //***APP Size State */
    wide: state => {
      return state.APP.wide;
    },

    //***Sidebar appear state */
    sidebar: state => {
      return state.NAVs.sidebar.active;
    },

    //***SECTIONs Backgrounds */
    background_1: state => {
      if (state.SECTIONs.sec1.img === "img-1-theme.jpeg") {
        return require("@/assets/img-1-" + state.THEME + ".jpeg");
      }
      return "/user-img/" + state.SECTIONs.sec1.img;
    },
    background_2: state => {
      if (state.SECTIONs.sec2.img === "img-2-theme.jpeg") {
        return require("@/assets/img-2-" + state.THEME + ".jpeg");
      }
      return "/user-img/" + state.SECTIONs.sec2.img;
    },
    background_3: state => {
      if (state.SECTIONs.sec3.img === "img-3-theme.jpeg") {
        return require("@/assets/img-3-" + state.THEME + ".jpeg");
      }
      return "/user-img/" + state.SECTIONs.sec3.img;
    },

    //***SNAP appear */
    snap_appear: state => {
      return state.SNAP;
    },

    //***COMPONENTs appear */
    tech_appear: state => {
      return state.COMPONENTs.tech.appear;
    },
    abou_appear: state => {
      return state.COMPONENTs.abou.appear;
    },
    achi_appear: state => {
      return state.COMPONENTs.achi.appear;
    },
    proj_appear: state => {
      return state.COMPONENTs.proj.appear;
    },
    cont_appear: state => {
      return state.COMPONENTs.cont.appear;
    },
    endp_appear: state => {
      return state.COMPONENTs.endp.appear;
    },

    //***COMPONENTs height */
    abou_height: state => {
      if (!state.COMPONENTs.abou.animation) {
        return state.COMPONENTs.abou.height + "px";
      }
      return "auto";
    },
    achi_height: state => {
      if (!state.COMPONENTs.achi.animation) {
        return state.COMPONENTs.achi.height + "px";
      }
      return "auto";
    },
    cont_height: state => {
      if (!state.COMPONENTs.cont.appear) {
        return state.COMPONENTs.cont.height + "px";
      }
      return "auto";
    },
    endp_height: state => {
      // if(!state.COMPONENTs.endp.animation) {
      //   return state.COMPONENTs.endp.height + 'px'
      // }
      return "auto";
    },
    port_height: state => {
      if (!state.COMPONENTs.port.animation) {
        return state.COMPONENTs.port.height + "px";
      }
      return "auto";
    },
    proj_height: state => {
      if (!state.COMPONENTs.proj.animation) {
        return state.COMPONENTs.proj.height + "px";
      }
      return "auto";
    },
    tech_height: state => {
      if (!state.COMPONENTs.tech.animation) {
        return state.COMPONENTs.tech.height + "px";
      }
      return "auto";
    },

    //***NAVs Size State */
    dock: state => {
      return state.NAVs.navbar.dock;
    },

    //***SEND BUTTON */
    sendb: state => {
      if (state.SENDb.active && state.SENDb.hover) {
        return (state.SENDb.class =
          "color-4-" + state.THEME + " b-color-7-" + state.THEME); // + ' border-1-' + state.THEME
      }
      if (state.SENDb.active && !state.SENDb.hover) {
        state.SENDb.active = false;
      }
      return (state.SENDb.class =
        "color-2-" + state.THEME + " b-color-4-" + state.THEME); // + ' border-1-' + state.THEME
    },

    //***PROJECT LINK BUTTON */
    projb: state => {
      if (state.PROJb.hover) {
        return "color-7-" + state.THEME;
      }
      return "color-2-" + state.THEME;
    },

    //***AVATAR */
    avatar: state => {
      if (state.AVATAR === "logo-1-theme.svg") {
        return require("@/assets/logo-1-" + state.THEME + ".svg");
      }
      return "/user-img/" + state.AVATAR;
    },

    //***LOGOs */
    logo_1: state => {
      return require("@/assets/" + state.LOGOs.logo_1[state.THEME]);
    },
    logo_2: state => {
      return require("@/assets/" + state.LOGOs.logo_2[state.THEME]);
    },
    logo_text: state => {
      if (state.LOGOs.logo_text === "logo-text-theme") {
        return state.THEME;
      }
      return state.LOGOs.logo_text;
    },
    logo_text_sidebar: state => {
      return state.THEME;
    },

    //***ACHIVEMENTs */
    certificate: state => {
      return state.ACHIEVEs.certificate;
    },
    project: state => {
      return state.ACHIEVEs.project;
    },

    //***MODAL BOX*/
    modal_img: state => {
      return state.MODAL.img;
    },
    modal_title: state => {
      return state.MODAL.title;
    },

    //***ANIMATIONs state */
    main_animation: state => {
      if (state.PORTFOLIO) {
        return "fadeIn";
      }
      return "";
    },
    zoom_animation: state => {
      if (state.APP.wide && state.ANIMATIONs.unlock) {
        return "zoomIn";
      }
      return "";
    },
    rotate_animation: state => {
      if (state.APP.wide && state.ANIMATIONs.unlock) {
        return "rotateIn";
      }
      return "";
    },
    fadeLeft_animation: state => {
      if (state.APP.wide && state.ANIMATIONs.unlock) {
        return "fadeInLeft";
      }
      return "";
    },
    fadeRight_animation: state => {
      if (state.APP.wide && state.ANIMATIONs.unlock) {
        return "fadeInRight";
      }
      return "";
    },
    fadeUp_animation: state => {
      if (state.APP.wide && state.ANIMATIONs.unlock) {
        return "fadeInUp";
      }
      return "";
    },
    fadeDown_animation: state => {
      if (state.APP.wide && state.ANIMATIONs.unlock) {
        return "fadeInDown";
      }
      return "";
    },

    //***Theme Colors */
    color_1: state => {
      return "color-1-" + state.THEME;
    },
    color_2: state => {
      return "color-2-" + state.THEME;
    },
    color_3: state => {
      return "color-3-" + state.THEME;
    },
    color_4: state => {
      return "color-4-" + state.THEME;
    },
    color_5: state => {
      return "color-5-" + state.THEME;
    },
    color_6: state => {
      return "color-6-" + state.THEME;
    },
    color_7: state => {
      return "color-7-" + state.THEME;
    },
    color_8: state => {
      return "color-8-" + state.THEME;
    },
    color_9: state => {
      return "color-9-" + state.THEME;
    },
    color_10: state => {
      return "color-10-" + state.THEME;
    },
    color_11: state => {
      return "color-11-" + state.THEME;
    },
    color_12: state => {
      return "color-12-" + state.THEME;
    },
    color_13: state => {
      return "color-13-" + state.THEME;
    },
    color_14: state => {
      return "color-14-" + state.THEME;
    },

    //***Theme Background Colors */
    b_color_1: state => {
      return "b-color-1-" + state.THEME;
    },
    b_color_2: state => {
      return "b-color-2-" + state.THEME;
    },
    b_color_3: state => {
      return "b-color-3-" + state.THEME;
    },
    b_color_4: state => {
      return "b-color-4-" + state.THEME;
    },
    b_color_5: state => {
      return "b-color-5-" + state.THEME;
    },
    b_color_6: state => {
      return "b-color-6-" + state.THEME;
    },
    b_color_7: state => {
      return "b-color-7-" + state.THEME;
    },
    b_color_8: state => {
      return "b-color-8-" + state.THEME;
    },
    b_color_9: state => {
      return "b-color-9-" + state.THEME;
    },
    b_color_10: state => {
      return "b-color-10-" + state.THEME;
    },
    b_color_11: state => {
      return "b-color-11-" + state.THEME;
    },
    b_color_12: state => {
      return "b-color-12-" + state.THEME;
    },
    b_color_13: state => {
      return "b-color-13-" + state.THEME;
    },
    b_color_14: state => {
      return "b-color-14-" + state.THEME;
    },

    //***Thenme Borders Top */
    border_top_7: state => {
      return "border-top-7-" + state.THEME;
    },

    //***Thenme Borders Bottom */
    border_bottom_7: state => {
      return "border-bottom-7-" + state.THEME;
    },

    //***Theme Fonts */
    font_1: state => {
      return "font-1-" + state.THEME;
    },
    font_2: state => {
      return "font-2-" + state.THEME;
    },
    font_3: state => {
      return "font-3-" + state.THEME;
    },
    font_4: state => {
      return "font-4-" + state.THEME;
    },
    font_5: state => {
      return "font-5-" + state.THEME;
    },

    //***Theme Border */
    border_1: state => {
      return "border-1-" + state.THEME;
    },

    //***Theme SVG */
    arrow_theme: state => {
      return "arrow-" + state.THEME + " svg";
    },
    arrow_top: state => {
      return require("@/assets/arrow-top-" + state.THEME + ".svg");
    }
  },

  //***MUTATIONS:: */
  mutations: {
    //***DETECT IE or EDGE */
    BROWSER: state => {
      let ieVersion = uaString => {
        uaString = uaString || navigator.userAgent;
        let match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(uaString);
        if (match) return parseInt(match[2]);
      };
      if (ieVersion() === undefined) {
        state.BROWSER.ie = false;
        state.BROWSER.edge = false;
      } else if (ieVersion() >= 18) {
        state.BROWSER.ie = false;
        state.BROWSER.edge = true;
      } else if (ieVersion() < 18) {
        state.BROWSER.ie = true;
        state.BROWSER.edge = false;
      }
    },
    //***MESSAGE */
    CLIENT(state, payload) {
      state.MESSAGE.client = payload;
    },
    EMAIL(state, payload) {
      state.MESSAGE.email = payload;
    },
    SUBJECT(state, payload) {
      state.MESSAGE.subject = payload;
    },
    MESSAGE(state, payload) {
      state.MESSAGE.message = payload;
    },

    //***Load Page Elements */
    LOAD: state => {
      // load MODAL object
      state.MODAL.obj = document.getElementById("modalBox");

      // load SECTIONs objects
      state.SECTIONs.sec1.obj = document.getElementById("sec1");
      state.SECTIONs.sec2.obj = document.getElementById("sec2");
      state.SECTIONs.sec3.obj = document.getElementById("sec3");

      // load COMPONENTs objects
      state.COMPONENTs.abou.obj = document.getElementById("abou");
      state.COMPONENTs.achi.obj = document.getElementById("achi");
      state.COMPONENTs.cont.obj = document.getElementById("cont");
      state.COMPONENTs.endp.obj = document.getElementById("endp");
      state.COMPONENTs.port.obj = document.getElementById("port");
      state.COMPONENTs.proj.obj = document.getElementById("proj");
      state.COMPONENTs.tech.obj = document.getElementById("tech");

      // load NAVs objects
      state.NAVs.navbar.left.obj = document.getElementById("nav-col-left");
      state.NAVs.navbar.right.obj = document.getElementById("nav-col-right");
    },

    //***Show Page */
    PORTFOLIO: state => {
      state.PORTFOLIO = true;
      // for (const key in state.COMPONENTs) {
      //   state.COMPONENTs[key].appear = true
      // }
      state.SNAP = true;
    },

    //***Set Page Elements */
    SETUP: state => {
      // set COMPONENTs initial height
      for (const key in state.COMPONENTs) {
        state.COMPONENTs[key].height = state.COMPONENTs[key].obj.scrollHeight;
        // state.COMPONENTs[key].appear = false
      }
      console.log(state.COMPONENTs.abou.height);
      state.SNAP = false;
      console.log(state.COMPONENTs.abou.height);
      // set nav home button active
      state.NAVs.elements.port.click = true;
      state.NAVs.elements.port.active_class =
        "color-2-" + state.THEME + " b-color-4-" + state.THEME;
      // set nav breakpoint
      state.NAVs.navbar.breakpoint =
        50 +
        state.NAVs.navbar.left.obj.scrollWidth +
        state.NAVs.navbar.right.obj.scrollWidth;
    },

    //***Resize Page Handle*/
    RESIZE: state => {
      let onResize = () => {
        state.APP.width = window.innerWidth;
        state.APP.height = window.innerHeight;
        if (state.APP.width > state.NAVs.navbar.breakpoint) {
          state.APP.wide = true;
          state.NAVs.sidebar.active = false;
          for (const key in state.SECTIONs) {
            let y = state.SECTIONs[key].obj.getBoundingClientRect().top / 4;
            parallax(key, state.SECTIONs[key].obj, 0, y);
          }
          if (state.BROWSER.edge || state.BROWSER.ie) {
            state.ANIMATIONs.appear_1 = true;
            state.ANIMATIONs.appear_2 = true;
            state.ANIMATIONs.appear_3 = true;
          }
        } else {
          state.APP.wide = false;
          for (const key in state.COMPONENTs) {
            // initial appear without transition
            state.COMPONENTs[key].appear = true;
          }
          state.ANIMATIONs.appear_1 = true;
          state.ANIMATIONs.appear_2 = true;
          state.ANIMATIONs.appear_3 = true;
          for (const key in state.SECTIONs) {
            parallax(key, state.SECTIONs[key].obj, 0, 0);
          }
        }
      };
      requestAnimationFrame(onResize);
      window.addEventListener("resize", () => {
        requestAnimationFrame(onResize);
      });
    },

    //***Scroll Page Handle*/
    SCROLL: state => {
      let onScroll = () => {
        for (const key in state.COMPONENTs) {
          // initial appear transition on scroll
          if (
            state.COMPONENTs.proj.obj.getBoundingClientRect().top !== 0 &&
            state.COMPONENTs[key].obj.getBoundingClientRect().top <
              window.innerHeight / 3 &&
            !state.COMPONENTs[key].appear &&
            state.ANIMATIONs.unlock
          ) {
            state.COMPONENTs[key].appear = true;
          }
        }
        if (window.pageYOffset !== 0 && state.APP.wide) {
          state.NAVs.navbar.dock = true;
          for (const key in state.SECTIONs) {
            let y = state.SECTIONs[key].obj.getBoundingClientRect().top / 4;
            parallax(sec1, state.SECTIONs[key].obj, 0, y);
          }
        } else {
          state.NAVs.navbar.dock = false;
          for (const key in state.SECTIONs) {
            parallax(key, state.SECTIONs[key].obj, 0, 0);
          }
        }
      };
      requestAnimationFrame(onScroll);
      window.addEventListener("scroll", () => {
        requestAnimationFrame(onScroll);
      });
    },

    //***Animations Start */
    ANIMATION_1: state => {
      state.ANIMATIONs.appear_1 = true;
    },
    // ANIMATION_2 : state => {
    //   state.ANIMATIONs.appear_2 = true
    // },
    ANIMATION_3: state => {
      state.ANIMATIONs.appear_3 = true;
    },

    ANIMATION_UNLOCK: state => {
      state.APP.wide
        ? (state.ANIMATIONs.appear_0 = true)
        : (state.ANIMATIONs.appear_0 = false);
      state.ANIMATIONs.unlock = true;
    },

    TECH_ANIMATION_APPEAR: state => {
      state.COMPONENTs.tech.animation = true;
    },
    ABOU_ANIMATION_APPEAR: state => {
      state.COMPONENTs.abou.animation = true;
    },
    ACHI_ANIMATION_APPEAR: state => {
      state.COMPONENTs.achi.animation = true;
    },
    PROJ_ANIMATION_APPEAR: state => {
      state.COMPONENTs.proj.animation = true;
    },

    //***Active Nav Buttons Handle */
    ACTIVE_NAVS: (state, payload) => {
      for (const key in state.NAVs.elements) {
        if (key === payload) {
          state.NAVs.elements[key].click = true;
          state.NAVs.elements[key].active_class =
            "color-2-" + state.THEME + " b-color-4-" + state.THEME;
        } else {
          state.NAVs.elements[key].click = false;
          state.NAVs.elements[key].hover_class =
            "color-4-" + state.THEME + " b-color-1-" + state.THEME;
          state.NAVs.elements[key].active_class =
            "color-4-" + state.THEME + " b-color-1-" + state.THEME;
        }
      }
    },
    //***Hover Nav Buttons Handle */
    HOVER_NAVS: (state, payload) => {
      for (const key in state.NAVs.elements) {
        if (key === payload && state.NAVs.elements[key].hover) {
          state.NAVs.elements[key].hover_class =
            "color-2-" + state.THEME + " b-color-4-" + state.THEME;
        } else {
          if (state.NAVs.elements[key].click === true) {
            state.NAVs.elements[key].hover_class =
              "color-2-" + state.THEME + " b-color-4-" + state.THEME;
          } else {
            state.NAVs.elements[key].hover_class =
              "color-4-" + state.THEME + " b-color-1-" + state.THEME;
          }
        }
      }
    }
  },

  //***ACTIONS:: */
  actions: {
    //***initialize page */
    init: ({ commit, state }) => {
      commit("BROWSER");
      commit("LOAD");
      commit("PORTFOLIO");
      setTimeout(() => {
        state.SHIELD = false;
        window.addEventListener("scroll", noScroll);
        commit("SETUP");
        setTimeout(() => {
          commit("SCROLL");
          setTimeout(() => {
            commit("RESIZE");
            setTimeout(() => {
              commit("ANIMATION_UNLOCK");
            }, 0);
          }, 0);
        }, 0);
      }, 500);
    },

    //***initial animations */
    init_animation: ({ commit }) => {
      setTimeout(() => {
        commit("ANIMATION_1");
        // setTimeout(() => {
        //   commit('ANIMATION_2')
        setTimeout(() => {
          commit("ANIMATION_3");
          window.removeEventListener("scroll", noScroll);
        }, 1600);
        //}, 1000)
      }, 1000);
    },

    //***animations state behavior */
    tech_animation_appear: ({ commit }) => {
      setTimeout(() => {
        commit("TECH_ANIMATION_APPEAR");
      }, 1000);
    },
    abou_animation_appear: ({ commit }) => {
      setTimeout(() => {
        commit("ABOU_ANIMATION_APPEAR");
      }, 1000);
    },
    achi_animation_appear: ({ commit }) => {
      setTimeout(() => {
        commit("ACHI_ANIMATION_APPEAR");
      }, 1000);
    },
    proj_animation_appear: ({ commit }) => {
      setTimeout(() => {
        commit("PROJ_ANIMATION_APPEAR");
      }, 1000);
    },

    //***active nav buttons */
    activeNavigation: ({ commit }, payload) => {
      commit("ACTIVE_NAVS", payload);
    },
    //***hover nav buttons */
    hoverNavigation: ({ commit }, payload) => {
      commit("HOVER_NAVS", payload);
    },

    //***send message */
    sendMessage: async ({ state }) => {
      try {
        state.LOADER = true;
        const res = await ClientService.sendMessage({
          client: state.MESSAGE.client,
          email: state.MESSAGE.email,
          subject: state.MESSAGE.subject,
          message: state.MESSAGE.message
        });
        state.LOADER = false;
        Vue.swal(
          "message has been sent!",
          "Thank you " +
            res.data.client +
            " , I will respond as soon as possible.",
          "success"
        );
      } catch (error) {
        state.LOADER = false;
        Vue.swal("Oups!", "Something went wrong", "error");
      }
    }
  }
});

//***Helper Functions */

//***Parallax Effect */
let parallax = (name, element, x, y) => {
  if (element.getBoundingClientRect().top < window.innerHeight) {
    y = -y;
    element.style.backgroundPosition = "center " + y + "px";
  }
};

let noScroll = () => {
  window.scrollTo(0, 0);
};
