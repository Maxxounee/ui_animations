<template>
    <div class="wrapper">
        <Text1/>
        <Text2/>
        <Text3/>
    </div>
</template>

<script>
import { useMainStore } from "@/store";
import Text1 from "assets/components/Text_1.vue";
import Text2 from "assets/components/Text_2.vue";
import Text3 from "assets/components/Text_3.vue";

export default {
    components: {
        Text1,
        Text2,
        Text3,
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
