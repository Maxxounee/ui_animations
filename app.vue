<template>
    <div class="wrapper">
        <Lenis @scroll="test">
            <!--            <WakeUp/>-->
            <!--            <Ghost/>-->
            <!--            <Rave/>-->
            <!--            <Rocket/>-->
            <!--            <CityLights/>-->
            <!--            <HelloWorld/>-->
            <!--            <LiveForever/>-->
            <div
                v-for="item in 10"
                class="test"
                v-parsec="{translateY: Math.random(), rotate: Math.random()}"
            >
                <p v-parsec="{translateY: Math.random(), rotate: Math.random()}" v-for="text in 10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam assumenda debitis, eaque
                    earum fugiat laborum laudantium magnam magni molestias nihil nostrum perferendis repudiandae sunt
                    vero! Iure sapiente tempora totam?
                </p>
            </div>
        </Lenis>
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
    directives: {
        // parsec,
    },
    methods: {
        test(e, k, l) {
            // console.log(e)
        }
    },
}
</script>

<style lang="scss">
@import "./assets/style/Style.scss";
.wrapper {
}
</style>
