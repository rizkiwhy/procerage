<template>
    <div>
        <Beranda />
        <!-- <v-img
            gradient="to top, white, transparent"
            :src="require('../../assets/wave(22).svg')"
            height="34vh" />
        <Sertifikasi /> -->
        <!-- <v-img
            gradient="to bottom, white, transparent"
            :src="require('../../assets/wave(23).svg')"
            height="34vh" /> -->
        <Asesor />
        <!-- <v-img
            height="34vh"
            gradient="to bottom, #e3f2fd, #ffd54f"
            :src="require('../../assets/wave(31).svg')"
            class="fill-height bottom-gradient" /> -->
        <Keunggulan />
        <v-img
            gradient="to bottom, #ffd54f, #2196F3"
            :src="require('../../assets/wave(24).svg')"
            height="34vh" />
        <Testimonial />
        <v-img
            gradient="to top, #ffecb3, #2196F3"
            :src="require('../../assets/wave(24).svg')"
            height="34vh" />
        <BeritaTerkini />
        <v-img
            gradient="to bottom, #ffecb3, #2196F3"
            :src="require('../../assets/wave(24).svg')"
            height="34vh" />
        <!-- <v-img
            gradient="to bottom, #FFECB3, transparent"
            :src="require('../../assets/wave(30).svg')"
            height="34vh" /> -->
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
import BeritaTerkini from "@/components/sections/BeritaTerkini.vue";
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
        BeritaTerkini,
        TentangKami,
        Footer
    }
}
</script>