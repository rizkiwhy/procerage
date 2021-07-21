<template>
  <div class="tentangkami">
    <!-- <Beranda /> -->
    <Galeri />
    <VisiMisi />
    <KlienKami />
    <TentangKami />
    <Footer />
  </div>
</template>
<script>
import Beranda from "@/components/sections/Beranda.vue";
import Galeri from "@/components/sections/Galeri.vue";
import VisiMisi from "@/components/sections/VisiMisi.vue";
import KlienKami from "@/components/sections/KlienKami.vue";
import TentangKami from "@/components/sections/TentangKami.vue";
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Beranda,
        Galeri,
        VisiMisi,
        KlienKami,
        TentangKami,
        Footer
    }
}
</script>
