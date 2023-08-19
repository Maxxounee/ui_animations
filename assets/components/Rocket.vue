<template>
    <div class="Rocket">
        <div class="container">
            <div class="image-box">
                <img src="@/assets/images/rocket.png" alt="rocket"/>
            </div>
            <span
                v-for="(letter, index) in reversedTextArr"
                :key="index"
                :style="{ '--i': index / 3.8 + 's'}"
                v-html="letter"
            ></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 'heading into space heading into space',
        };
    },
    computed: {
        reversedTextArr() {
            return this.text.split('').reverse();
        },
    },
}
</script>

<style lang="scss" scoped>
@import "assets/style/Style.scss";
.Rocket {
    @include div50;
    @include flexCenter;
    background-color: $BLACK;
    $top0: -1.2em;
    $top100: calc(100% + 0.3em);
    $left0: -1.3em;
    $left100: calc(100% + 0.3em);
    @keyframes Rocket_show {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes Rocket_imgScale {
        0% {
            scale: 1;
        }
        50% {
            scale: 1.05;
        }
        100% {
            scale: 1
        }
    }
    @keyframes Rocket_frameMove {
        0% {
            top: $top0;
            left: $left0;
            transform: rotate(0deg);
        }
        24% {
            top: $top0;
            left: $left100;
            transform: rotate(0);
        }
        25% {
            transform: rotate(90deg);
        }
        49% {
            top: $top100;
            left: $left100;
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(180deg);
        }
        74% {
            top: $top100;
            left: $left0;
            transform: rotate(180deg);
        }
        75% {
            transform: rotate(270deg);
        }
        99% {
            transform: rotate(270deg);
        }
        100% {
            top: $top0;
            left: $left0;
            transform: rotate(360deg);
        }
    }
    .container {
        &:hover {
            .image-box {
                img {
                    scale: 1.04;
                }
            }
        }
        span {
            color: $GOLD;
        }
    }
    .image-box {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        overflow: hidden;
        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
            animation: Rocket_imgScale 10s ease-in-out infinite;
        }
    }
    .container {
        position: relative;
        width: 36vh;
        height: 36vh;
    }
    span {
        display: block;
        font-size: 22px;
        text-align: center;
        width: 1em;
        height: 1em;
        animation: Rocket_frameMove 10s linear infinite, Rocket_show 1s linear forwards;
        position: absolute;
        animation-delay: var(--i);
        opacity: 0;
        text-transform: uppercase;
    }
}
</style>
