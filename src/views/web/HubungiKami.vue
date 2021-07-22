<template>
  <div class="hubungikami">
    <HubungiKami />
    <TentangKami />
    <Footer />
  </div>
</template>
<script>
import HubungiKami from "@/components/sections/HubungiKami.vue";
import TentangKami from "@/components/sections/TentangKami.vue";
import Footer from '@/components/Footer.vue';

export default {
    components: {
        HubungiKami,
        TentangKami,
        Footer
    }
}
</script>
