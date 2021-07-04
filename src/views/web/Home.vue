<template>
    <div>
        <Beranda /> <!--4-->
        <Keunggulan /> <!---->
        <Sertifikasi /> <!--7-->
        <Asesor /> <!--5-->
        <Testimonial /> <!--0-->
        <Galeri /> <!--2-->
        <Berita /> <!--8-->
        <TentangKami />
        <Footer />
    </div>
</template>

<script>
import Beranda from "@/components/sections/Beranda.vue";
import Keunggulan from "@/components/sections/Keunggulan.vue";
import Sertifikasi from "@/components/sections/Sertifikasi.vue";
import Asesor from "@/components/sections/Asesor.vue";
import Testimonial from "@/components/sections/Testimonial.vue";
import Galeri from "@/components/sections/Galeri.vue";
import Berita from "@/components/sections/Berita.vue";
import TentangKami from "@/components/sections/TentangKami.vue";
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Beranda,
        Keunggulan,
        Sertifikasi,
        Asesor,
        Testimonial,
        Galeri,
        Berita,
        TentangKami,
        Footer
    }
}
</script>