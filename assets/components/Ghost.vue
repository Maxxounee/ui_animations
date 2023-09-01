<template>
    <div class="Ghost">
        <div class="title">ghost</div>
        <img src="@/assets/images/ghost.svg" alt="ghost" class="ghost">
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "assets/style/Style.scss";
.Ghost {
    @include div50;
    @include flexCenter;
    background-color: $BLACK;
    @keyframes Ghost_move {
        0% {
            transform: translateX(20vh) rotateZ(-90deg);
        }
        100% {
            transform: translateX(-120vw) rotateZ(-90deg);
        }
    }
    .title {
        font-size: 25vmin;
        font-weight: bold;
        color: $WHITE;
    }
    .ghost {
        position: absolute;
        right: 0;
        width: 50px;
        transform: translateX(100vw) rotateZ(-90deg);
        opacity: 0.9;
        mix-blend-mode: exclusion;
        animation: Ghost_move 4s linear infinite;
    }
}
</style>
