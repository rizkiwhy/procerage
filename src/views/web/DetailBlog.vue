<template>
  <div class="detailBlog">
    <!-- <Beranda /> -->
    <DetailBlog />
    <TentangKami />
    <Footer />
  </div>
</template>
<script>
import Beranda from "@/components/sections/Beranda.vue";
import DetailBlog from "@/components/sections/DetailBlog.vue";
import TentangKami from "@/components/sections/TentangKami.vue";
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Beranda,
        DetailBlog,
        TentangKami,
        Footer
    }
}
</script>
