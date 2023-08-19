<template>
    <div class="Text2">
        <div class="title">GHOST</div>
        <img src="@/assets/images/ghost.svg" alt="" class="ghost">
    </div>
</template>

<script>
</script>

<style lang="scss">
@import "assets/style/Style.scss";

.Text2 {
    @keyframes ghostMove {
        0% {
            transform: translateX(20vh) rotateZ(-90deg);
        }
        100% {
            transform: translateX(-100vh) rotateZ(-90deg);
        }
    }

    @include div50;
    @include flexCenter;
    background-color: $WHITE;

    .title {
        font-size: 25vmin;
        font-weight: 900;
        font-family: "Montserrat", sans-serif;
        color: $BLACK;
    }

    .ghost {
        position: absolute;
        right: 0;
        width: 50px;
        transform: translateX(100em) rotateZ(-90deg);
        opacity: 0.9;
        mix-blend-mode: exclusion;
        animation: ghostMove 4s linear infinite;
    }

}
</style>
