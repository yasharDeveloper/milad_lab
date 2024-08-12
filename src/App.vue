<script>
import Header from './components/partials/Header.vue'
import Sidebar from './components/partials/Sidebar.vue'
// import Footer from './components/partials/Footer.vue'

import { defineComponent, nextTick, onBeforeMount, onMounted } from "vue";
import { useConfigStore } from "@/stores/config";
import { useThemeStore } from "@/stores/theme";
import { useBodyStore } from "@/stores/body";
import { themeConfigValue } from "@/layouts/default-layout/config/helper";
import { initializeComponents } from "../core/plugins/keenthemes";

export default defineComponent({
name: "app",
components: {
  Header,
  Sidebar
},
setup() {
    const configStore = useConfigStore();
    const themeStore = useThemeStore();
    const bodyStore = useBodyStore();

    onBeforeMount(() => {
      /**
       * Overrides the layout config using saved data from localStorage
       * remove this to use static config (@/layouts/default-layout/config/DefaultLayoutConfig.ts)
       */
      configStore.overrideLayoutConfig();

      /**
       *  Sets a mode from configuration
       */
      themeStore.setThemeMode(themeConfigValue.value);
    });

    onMounted(() => {
      nextTick(() => {
        initializeComponents();

        bodyStore.removeBodyClassName("page-loading");
      });
    });
  }
})

</script>

<template>
    
    <Header></Header>


    <Sidebar></Sidebar>
    

  






  
</template>

<style>
  @import "root_path/node_modules/bootstrap-icons/font/bootstrap-icons.css";
  @import "root_path/node_modules/apexcharts/dist/apexcharts.css";
  @import "root_path/node_modules/quill/dist/quill.snow.css";
  @import "root_path/node_modules/animate.css";
  @import "root_path/node_modules/sweetalert2/dist/sweetalert2.css";
  @import "root_path/node_modules/nouislider/dist/nouislider.css";
  @import "root_path/node_modules/@fortawesome/fontawesome-free/css/all.min.css";
  @import "root_path/node_modules/socicon/css/socicon.css";
  @import "root_path/node_modules/line-awesome/dist/line-awesome/css/line-awesome.css";
  @import "root_path/node_modules/dropzone/dist/dropzone.css";
  @import "root_path/node_modules/@vueform/multiselect/themes/default.css";
  @import "root_path/node_modules/prism-themes/themes/prism-shades-of-purple.css";
  @import "root_path/node_modules/element-plus/dist/index.css";



  @import "assets/css/style.bundle.rtl.css";
  @import "assets/css/fullcalendar.bundle.css";
  @import "assets/css/plugins.bundle.rtl.css";
  @import "assets/css/datatables.bundle.css";
  @import "https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700";


  /* #app {
    display: contents;
  } */
</style>
@/layouts/default-layout/config/config
