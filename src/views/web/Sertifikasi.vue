<template>
  <div class="sertifikasi">
    <!-- <Beranda /> -->
    <Sertifikasi />
    <TentangKami />
    <Footer />
  </div>
</template>
<script>
import Beranda from "@/components/sections/Beranda.vue";
import Sertifikasi from "@/components/sections/Sertifikasi.vue";
import TentangKami from "@/components/sections/TentangKami.vue";
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Beranda,
        Sertifikasi,
        TentangKami,
        Footer
    }
}
</script>
