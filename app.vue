<template>
    <div class="wrapper">
        <WakeUp/>
        <Ghost/>
        <Rave/>
        <Rocket/>
        <CityLights/>
        <HelloWorld/>
        <LiveForever/>
    </div>
</template>

<script>
import { useMainStore } from "@/store";
import WakeUp from "assets/components/WakeUp.vue";
import Ghost from "assets/components/Ghost.vue";
import Rave from "assets/components/Rave.vue";
import Rocket from "assets/components/Rocket.vue";
import CityLights from "assets/components/CityLights.vue";
import HelloWorld from "assets/components/HelloWorld.vue";
import LiveForever from "assets/components/OpenEyes.vue";

export default {
    components: {
        LiveForever,
        HelloWorld,
        CityLights,
        WakeUp,
        Ghost,
        Rave,
        Rocket,
    },
    setup() {
        return {
            store: useMainStore(),
        };
    },
    mounted() {
    },
}
</script>

<style lang="scss">
@import "./assets/style/Style.scss";
.wrapper {
}
</style>
