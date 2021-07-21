<template>
  <div class="blog">
    <!-- <Beranda /> -->
    <Blog />
    <TentangKami />
    <Footer />
  </div>
</template>
<script>
import Beranda from "@/components/sections/Beranda.vue";
import Blog from "@/components/sections/Blog.vue";
import TentangKami from "@/components/sections/TentangKami.vue";
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Beranda,
        Blog,
        TentangKami,
        Footer
    }
}
</script>
