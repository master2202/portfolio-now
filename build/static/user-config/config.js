const config = {
  //***LOGO - {{ NAVBAR }} */

  // logo text

  logo_text: "logo-text-theme", // text

  //***AVATAR - {{ HOME }} */

  // your portrait (dont forget to include extension > '*'.jpg, png ...)

  avatar: "logo-1-theme.svg", // image

  //***NAME - {{ HOME }} - {{ CONTACT }} */

  // your name here

  name: "John Doe", // text

  //***NAVBAR BUTTON TEXT - {{ NAVBAR }} */

  // you can change default button text

  navs: {
    home: "HOME", // text
    technique: "TECHNIQUE", // text
    about: "ABOUT", // text
    achievement: "ACHIEVEMENT", // text
    works: "WORKS", // text
    contact: "CONTACT" // text
  },

  //***SECTIONS TITLE */

  title: {
    // title for portrait - {{ HOME }}

    port_1: "PRO", // text
    port_2: "Exemplar", // text

    // title for technique - {{ TECNIQUE }}

    tech_1: "TECHNIQUES", // text
    tech_2: "IN USE", // text

    // title for about - {{ ABOUT }}

    about: "JUST ABOUT", // text

    // titles for achievement - {{ ACHIEVEMENT }}

    course_1: "COURSES", // text
    course_2: "DONE", // text

    project_1: "PROJECTS", // text
    project_2: "WORK" // text
  },

  //***TEXTS */

  text: {
    // add or remove boxes or change content - {{ TECHNIQUE }}

    tech: [
      {
        title: "TECH 1",
        text:
          "You can change title or text depend of your need. You can add text a much as you want. Also you can add or remove as many as you want boxes."
      },
      {
        title: "TECH 2",
        text:
          "You can change title or text depend of your need. You can add text a much as you want. Also you can add or remove as many as you want boxes."
      },
      {
        title: "TECH 3",
        text:
          "You can change title or text depend of your need. You can add text a much as you want. Also you can add or remove as many as you want boxes."
      },
      {
        title: "TECH 4",
        text:
          "You can change title or text depend of your need. You can add text a much as you want. Also you can add or remove as many as you want boxes."
      },
      {
        title: "TECH 5",
        text:
          "You can change title or text depend of your need. You can add text a much as you want. Also you can add or remove as many as you want boxes."
      }
    ],

    // change text and mark any word with # - {{ ABOUT }}

    about:
      "Here you can #mark any part of #text you want. To do this you need to add #hash sign at the beginning of the word which can be done in #config.js file where also can be found other available changes. To be #able to configure your portfolio You #dont need to know how to #code. For detail instruction how to #setup your portfolio check #Guides folder first. If you need very #specific changes, there is also development #builds available too. Finally there are two highly customized themes, #DRAGON and #FUSION, and you can quickly #switch between them."
  },

  //***{{ ACHIEVEMENT }} */

  // add or remove image and title for your certificates

  certificate: [
    {
      img: "img-1-theme.jpeg", // image
      title: "Certificate 1" // text
    },
    {
      img: "img-2-theme.jpeg", // image
      title: "Certificate 2" // text
    },
    {
      img: "img-3-theme.jpeg", // image
      title: "Certificate 3" // text
    }
  ],

  //***{{ WORKS }} */

  // add or remove image, title and link, for your works

  project: [
    {
      img: "img-1-theme.jpeg", // image
      title: "Work 1", // text
      address: "" // link (https://examplelink.com)
    },
    {
      img: "img-2-theme.jpeg", // image
      title: "Work 2", // text
      address: "" // link (https://examplelink.com)
    },
    {
      img: "img-3-theme.jpeg", // image
      title: "Work 3", // text
      address: "" // link (https://examplelink.com)
    }
  ],

  //***CONTACT TEXTs - {{ CONTACT }} */

  contact: {
    contact_text_1: "CONTACT", // text
    contact_text_2: "CONTACT ", // text
    info_text: "INFO", // text
    send_text: "SEND ", // text
    message_text: "MESSAGE", // text
    button_text: "SEND" // text
  },

  //***EMAIL - {{ CONTACT }} */

  // your email address

  email: "john@example.com", // text

  //***PHONE NUMBER - {{ CONTACT }} */

  // your phone number, leave empty '' if don't need

  phone: "+123 123456789", // text

  //***FOOTER LINKS - {{ FOOTER }} */

  // links in footer section. Change, remove or add links text and address

  links: [
    {
      text: "LINK 1", // text
      address: "" // link (https://examplelink.com)
    },
    {
      text: "LINK 2", // text
      address: "" // link (https://examplelink.com)
    },
    {
      text: "LINK 3", // text
      address: "" // link (https://examplelink.com)
    }
  ],

  //***FOOTER TEXT - {{ FOOTER }} */

  // just footer text

  footer: [
    "DESIGN and DEVELOPMENT by John Doe", // text
    "COPYRIGHT @ John Doe", // text
    "2025" // text
  ],

  //***BACKGROUND PICTURES */

  // make sure your images is 1920 x 1080 px (dont forget to include extension > '*'.jpg, png ...)

  background_image_1: "img-1-theme.jpeg", // image

  background_image_2: "img-2-theme.jpeg", // image

  background_image_3: "img-3-theme.jpeg", // image

  // Original Background Links:

  // img-1-FUSION.jpeg - https://wallpaperplay.com/walls/full/c/b/a/70623.jpg
  // img-1-DRAGON.jpeg - https://wallpaperplay.com/walls/full/d/8/e/181624.jpg

  // img-2-FUSION.jpeg - https://wallpaperplay.com/walls/full/c/4/6/4842.jpg
  // img-2-DRAGON.jpeg - https://wallpaperplay.com/walls/full/9/9/b/181622.jpg

  // img-3-FUSION.jpeg - https://wallpaperplay.com/walls/full/c/6/e/4881.jpg
  // img-3-DRAGON.jpeg - https://wallpaperplay.com/walls/full/2/5/a/181605.jpg

  //***THEME */

  // Available: FUSION, DRAGON

  theme: "FUSION"
};
