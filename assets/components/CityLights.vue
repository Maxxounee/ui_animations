<template>
    <div class="CityLights">
        <h2 class="title">city lights</h2>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "assets/style/Style.scss";
.CityLights {
    @include div25;
    @include flexCenter;
    background-color: $BLACK;
    $OFFSET_Y: 0.125em;
    $OFFSET_X_1: 1em;
    $OFFSET_X_2: 0.5em;
    $OFFSET_X_3: 0.25em;
    $BLUR_1: 0.5em;
    $BLUR_2: 0.25em;
    $BLUR_3: 0.125em;
    @keyframes CityLights_shine {
        0% {
            text-shadow: 1em -0.125em 0.25em rgba($WHITE, 0),
            1em -0.125em 0.25em rgba($WHITE, 0),
            -1em -0.125em 0.25em rgba($WHITE, 0),
            -1em -0.125em 0.25em rgba($WHITE, 0);
        }
        25% {
            text-shadow: 0.5em -0.125em 0.1em rgba($WHITE, 0.06),
            0.5em -0.125em 0.15em rgba($WHITE, 0.06),
            -0.5em -0.125em 0.15em rgba($WHITE, 0.06),
            -0.5em -0.125em 0.25em rgba($WHITE, 0.06);
        }
        75% {
            text-shadow: -0.5em -0.125em 0.1em rgba($WHITE, 0.06),
            -0.5em -0.125em 0.25em rgba($WHITE, 0.06),
            0.5em -0.125em 0.25em rgba($WHITE, 0.06),
            0.5em -0.125em 0.15em rgba($WHITE, 0.06);
        }
        100% {
            text-shadow: -1em -0.125em 0.25em rgba($WHITE, 0),
            -1em -0.125em 0.25em rgba($WHITE, 0),
            1em -0.125em 0.25em rgba($WHITE, 0),
            1em -0.125em 0.25em rgba($WHITE, 0);
        }
    }
    .title {
        color: $WHITE;
        font-size: 3.5rem;
        animation: CityLights_shine 5s linear infinite;
    }
}
</style>
