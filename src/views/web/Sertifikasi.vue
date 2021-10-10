<template>
  <div class="sertifikasi">
    <!-- <Beranda /> -->
    <KategoriSertifikasi /> 
    <Assesors />
    <TentangKami />
    <Footer />
  </div>
</template>
<script>
// import Beranda from "@/components/sections/Beranda.vue";
import KategoriSertifikasi from "@/components/sections/KategoriSertifikasi.vue";
import Assesors from "@/components/sections/Assesors.vue";
import TentangKami from "@/components/sections/TentangKami.vue";
import Footer from '@/components/Footer.vue';

export default {
    components: {
        // Beranda,
        KategoriSertifikasi,
        Assesors,
        TentangKami,
        Footer
    }
}
</script>
