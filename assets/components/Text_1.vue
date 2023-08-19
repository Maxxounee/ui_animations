<template>
    <h3 class="Text1">
        <span class="word1">Schitts</span>
        <span class="word2">Creek</span>
    </h3>
</template>

<script>
</script>

<style lang="scss">
@import "assets/style/Style.scss";

@keyframes pop-word {
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

@keyframes show {
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

.Text1 {
    @include flexColumnCenter;
    @include div50;
    background-color: $BLACK;
    color: $WHITE;
    font-size: 8rem;
    line-height: 0.85;
    perspective: 100vw;
}

.word1,
.word2 {
    display: block;
    animation-name: show, pop-word;
    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    transform-origin: 50% 100%;
}

.word2 {
    padding: 0 2rem;
    animation-delay: 1.5s;
    color: $GOLD;
}


</style>
