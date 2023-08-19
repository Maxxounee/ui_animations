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
    @include div50;
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
            text-shadow: 1em -0.125em 0.25em rgba($DARK_VIOLET, 0),
            1em -0.125em 0.25em rgba($DARK_GOLD, 0),
            -1em -0.125em 0.25em rgba($DARK_BLUE, 0),
            -1em -0.125em 0.25em rgba($DARK_RED, 0);
        }
        25% {
            text-shadow: 0.5em -0.125em 0.25em rgba($BLUE, 0.06),
            0.5em -0.125em 0.15em rgba($GREEN, 0.06),
            -0.5em -0.125em 0.15em rgba($BLUE, 0.06),
            -0.5em -0.125em 0.25em rgba($GREEN, 0.06);
        }
        75% {
            text-shadow: -0.5em -0.125em 0.15em rgba($GREEN, 0.06),
            -0.5em -0.125em 0.25em rgba($BLUE, 0.06),
            0.5em -0.125em 0.25em rgba($GREEN, 0.06),
            0.5em -0.125em 0.15em rgba($BLUE, 0.06);
        }
        100% {
            text-shadow: -1em -0.125em 0.25em rgba($DARK_VIOLET, 0),
            -1em -0.125em 0.25em rgba($DARK_GOLD, 0),
            1em -0.125em 0.25em rgba($DARK_BLUE, 0),
            1em -0.125em 0.25em rgba($DARK_RED, 0);
        }
    }
    .title {
        color: $GREEN;
        font-size: 3.5rem;
        animation: CityLights_shine 5s linear infinite;
    }
}
</style>
