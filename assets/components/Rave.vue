<template>
    <div class="Rave">
        <div class="box">
            <span
                v-for="item in 24"
                :key="item"
                :style="{ '--i': item }"
            >
                EAT<mark>SLEEP</mark>RAVE
            </span>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
@import "assets/style/Style.scss";
.Rave {
    @include div50;
    @include flexCenter;
    background-color: $BLACK;
    @keyframes Rave_animate {
        0% {
            transform: perspective(500px) rotateX(0deg) rotate(5deg);
        }
        100% {
            transform: perspective(100px) rotateX(360deg) rotate(5deg);
        }
    }
    .box {
        transform-style: preserve-3d;
        animation: Rave_animate 7s ease-in-out infinite alternate;
        span {
            position: absolute;
            text-transform: uppercase;
            color: $WHITE;
            font-size: 3.5em;
            white-space: nowrap;
            font-weight: bold;
            transform: translate(-50%, -50%) rotateX(calc(var(--i) * 15deg)) translateZ(200px);
            mark {
                color: $GOLD;
            }
        }
    }
}
</style>
