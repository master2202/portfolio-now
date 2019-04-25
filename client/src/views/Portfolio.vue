<template>
  <div>
    <navbar/>
    <div
      id="sec1"
      class="container-fluid padding-horizontal-0"
      :style="{ backgroundImage: 'url(' + background_1 + ')' }"
    >
      <portrait id="port"/>
      <technique id="tech"/>
    </div>
    <div
      id="sec2"
      class="container-fluid padding-horizontal-0"
      :style="{ backgroundImage: 'url(' + background_2 + ')' }"
    >
      <about id="abou"/>
      <achievement id="achi"/>
      <project id="proj"/>
    </div>
    <div
      id="sec3"
      class="container-fluid padding-horizontal-0"
      :style="{ backgroundImage: 'url(' + background_3 + ')' }"
    >
      <contact id="cont"/>
    </div>
    <endpage id="endp"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import About from "../components/about/Abou";
import Achievement from "../components/achievement/Achi";
import Contact from "../components/contact/Cont";
import Endpage from "../components/endpage/Endp";
import Portrait from "../components/portrait/Port";
import Project from "../components/project/Proj";
import Technique from "../components/technique/Tech";

import Navbar from "../navbar/Navs";

export default {
  components: {
    About,
    Achievement,
    Contact,
    Endpage,
    Portrait,
    Project,
    Technique,

    Navbar
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["background_1", "background_2", "background_3"])
  }
};
</script>

<style lang="scss">
//***SECTIONs
#sec1 {
  background-repeat: no-repeat;
  background-color: black;
}
#sec2 {
  background-repeat: no-repeat;
  background-color: black;
}
#sec3 {
  background-repeat: no-repeat;
  background-color: black;
}

//***COMPONENTs

//***FUSION THEME
//***colors
.color-1-FUSION {
  color: rgba(255, 255, 255, 0);
}
.color-2-FUSION {
  color: rgb(240, 248, 255);
}
.color-3-FUSION {
  color: rgba(240, 248, 255, 0.557);
}
.color-4-FUSION {
  color: rgb(44, 62, 80);
}
.color-5-FUSION {
  color: rgba(133, 166, 183, 0.9);
}
.color-6-FUSION {
  color: rgba(0, 52, 101, 0.5);
}
.color-7-FUSION {
  color: rgb(0, 255, 255);
}
.color-8-FUSION {
  color: rgba(52, 58, 64, 0.502);
}
.color-9-FUSION {
  color: rgb(173, 216, 230);
}
.color-10-FUSION {
  color: rgba(76, 167, 252, 0.5);
}
.color-11-FUSION {
  color: rgba(39, 68, 95, 0.7);
}
.color-12-FUSION {
  color: rgba(76, 167, 252, 0.1);
}
.color-13-FUSION {
  color: rgba(76, 167, 252, 0.2);
}
.color-14-FUSION {
  color: rgb(21, 31, 39);
}

//***background colors
.b-color-1-FUSION {
  background-color: rgba(255, 255, 255, 0);
}
.b-color-2-FUSION {
  background-color: rgb(240, 248, 255);
}
.b-color-3-FUSION {
  background-color: rgba(240, 248, 255, 0.557);
}
.b-color-4-FUSION {
  background-color: rgb(44, 62, 80);
}
.b-color-5-FUSION {
  background-color: rgba(133, 166, 183, 0.9);
}
.b-color-6-FUSION {
  background-color: rgba(0, 52, 101, 0.5);
}
.b-color-7-FUSION {
  background-color: rgb(0, 255, 255);
}
.b-color-8-FUSION {
  background-color: rgba(52, 58, 64, 0.502);
}
.b-color-9-FUSION {
  background-color: rgb(173, 216, 230);
}
.b-color-10-FUSION {
  background-color: rgba(76, 167, 252, 0.5);
}
.b-color-11-FUSION {
  background-color: rgba(39, 68, 95, 0.7);
}
.b-color-12-FUSION {
  background-color: rgba(76, 167, 252, 0.1);
}
.b-color-13-FUSION {
  background-color: rgba(76, 167, 252, 0.2);
}
.b-color-14-FUSION {
  background-color: rgb(21, 31, 39);
}

//***borders top
.border-top-7-FUSION {
  border-top: 10px solid rgb(0, 255, 255);
}

//***borders bottom
.border-bottom-7-FUSION {
  border-bottom: 10px solid rgb(0, 255, 255);
}

//***fonts
.font-1-FUSION {
  font-family: "Armata", sans-serif;
}
.font-2-FUSION {
  font-family: "Khula", sans-serif;
  font-weight: 400;
}
.font-3-FUSION {
  font-family: "Major Mono Display", monospace;
}
.font-4-FUSION {
  font-family: "Khula", sans-serif;
  font-weight: 800;
}
.font-5-FUSION {
  font-family: "Khula", sans-serif;
  font-weight: 600;
}

//***border
.border-1-FUSION {
  border: 1px solid rgb(0, 255, 255);
}
.border-2-FUSION {
  border: 1px solid rgb(240, 248, 255);
}

//***arrow
.arrow-FUSION svg {
  fill: rgb(0, 255, 255);
  width: 75px;
  height: 75px;
}

//***DRAGON THEME
//***colors
.color-1-DRAGON {
  color: rgba(255, 255, 255, 0);
}
.color-2-DRAGON {
  color: rgb(240, 248, 255);
}
.color-3-DRAGON {
  color: rgba(240, 248, 255, 0.557);
}
.color-4-DRAGON {
  color: rgb(82, 1, 1);
}
.color-5-DRAGON {
  color: rgba(183, 133, 133, 0.9);
}
.color-6-DRAGON {
  color: rgba(101, 0, 0, 0.5);
}
.color-7-DRAGON {
  color: rgb(255, 0, 0);
}
.color-8-DRAGON {
  color: rgba(64, 52, 52, 0.502);
}
.color-9-DRAGON {
  color: rgb(230, 173, 173);
}
.color-10-DRAGON {
  color: rgba(252, 76, 76, 0.5);
}
.color-11-DRAGON {
  color: rgba(95, 39, 39, 0.7);
}
.color-12-DRAGON {
  color: rgba(252, 76, 76, 0.1);
}
.color-13-DRAGON {
  color: rgba(252, 76, 76, 0.2);
}
.color-14-DRAGON {
  color: rgb(39, 21, 21);
}

//***background colors
.b-color-1-DRAGON {
  background-color: rgba(255, 255, 255, 0);
}
.b-color-2-DRAGON {
  background-color: rgb(240, 248, 255);
}
.b-color-3-DRAGON {
  background-color: rgba(240, 248, 255, 0.557);
}
.b-color-4-DRAGON {
  background-color: rgb(82, 1, 1);
}
.b-color-5-DRAGON {
  background-color: rgba(183, 133, 133, 0.9);
}
.b-color-6-DRAGON {
  background-color: rgba(101, 0, 0, 0.5);
}
.b-color-7-DRAGON {
  background-color: rgb(255, 0, 0);
}
.b-color-8-DRAGON {
  background-color: rgba(64, 52, 52, 0.502);
}
.b-color-9-DRAGON {
  background-color: rgb(230, 173, 173);
}
.b-color-10-DRAGON {
  background-color: rgba(252, 76, 76, 0.5);
}
.b-color-11-DRAGON {
  background-color: rgba(95, 39, 39, 0.7);
}
.b-color-12-DRAGON {
  background-color: rgba(252, 76, 76, 0.1);
}
.b-color-13-DRAGON {
  background-color: rgba(252, 76, 76, 0.2);
}
.b-color-14-DRAGON {
  background-color: rgb(39, 21, 21);
}

//***borders top
.border-top-7-DRAGON {
  border-top: 10px solid rgb(255, 0, 0);
}

//***borders bottom
.border-bottom-7-DRAGON {
  border-bottom: 10px solid rgb(255, 0, 0);
}

//***fonts
.font-1-DRAGON {
  font-family: "Sedgwick Ave Display", cursive;
}
.font-2-DRAGON {
  font-family: "Merienda", cursive;
}
.font-3-DRAGON {
  font-family: "Julee", cursive;
}
.font-4-DRAGON {
  font-family: "Merienda", cursive;
  font-weight: 600;
}
.font-5-DRAGON {
  font-family: "Merienda", cursive;
  font-weight: 600;
}

//***border
.border-1-DRAGON {
  border: 1px solid rgb(255, 0, 0);
}
.border-2-DRAGON {
  border: 1px solid rgb(240, 248, 255);
}

//***arrow
.arrow-DRAGON svg {
  fill: rgb(255, 0, 0);
  width: 75px;
  height: 75px;
}
</style>




