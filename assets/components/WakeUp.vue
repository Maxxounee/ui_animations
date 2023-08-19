<template>
    <h3 class="WakeUp">
        <span class="word1">WAKE</span>
        <span class="word2">UP</span>
    </h3>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "assets/style/Style.scss";
.WakeUp {
    @include flexColumnCenter;
    @include div50;
    background-color: $BLACK;
    color: $WHITE;
    font-size: 8rem;
    line-height: 0.85;
    perspective: 100vw;
    @keyframes WakeUp_popWord {
        0% {
            transform: rotateX(90deg);
        }
        50% {
            transform: rotateX(0);
        }
        100% {
            transform: rotateX(90deg);
        }
    }
    @keyframes WakeUp_show {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .word1,
    .word2 {
        display: block;
        animation-name: WakeUp_show, WakeUp_popWord;
        animation-duration: 5s;
        animation-iteration-count: infinite, infinite;
        animation-timing-function: ease-in-out;
        transform-origin: 50% 100%;
    }
    .word2 {
        opacity: 0;
        transform: rotateX(90deg);
        padding: 0 2rem;
        animation-delay: 1.5s, 1.5s;
        color: $GOLD;
    }
}

</style>
