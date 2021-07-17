<template>
  <div class="tentangkami">
    <!-- <Beranda /> -->
    <Galeri />
    <TentangKami />
    <Footer />
  </div>
</template>
<script>
import Beranda from "@/components/sections/Beranda.vue";
import Galeri from "@/components/sections/Galeri.vue";
import TentangKami from "@/components/sections/TentangKami.vue";
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Beranda,
        Galeri,
        TentangKami,
        Footer
    }
}
</script>
