<template>
    <div class="Text3">
        <div class="box">
            <span v-for="item in 16" :style="{ '--i': item }">
                EAT<mark>SLEEP</mark>RAVE
            </span>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
@import "assets/style/Style.scss";

.Text3 {
    @include div50;
    @include flexCenter;
    background-color: $BLACK;

    @keyframes animate {
        0% {
            transform: perspective(500px) rotateX(0deg) rotate(5deg);
        }
        100% {
            transform: perspective(50px) rotateX(360deg) rotate(5deg);
        }
    }

    .box {
        transform-style: preserve-3d;
        //animation: animate 7s ease-in-out infinite alternate;

        span {
            position: absolute;
            text-transform: uppercase;
            color: $WHITE;
            font-size: 3.5em;
            white-space: nowrap;
            font-weight: bold;
            transform: translate(-50%, -50%) rotateX(calc(var(--i) * 22.5deg)) translateZ(109px);
            transform: translate(-50%, -50%) rotateX(calc(var(--i) * 22.5deg));
            //transform: translate(-50%, -50%) translateZ(109px);
            //transform: rotateX(calc(var(--i) * 22.5deg)) translateZ(109px);

            mark {
                color: $GOLD;
            }
        }
    }
}
</style>
