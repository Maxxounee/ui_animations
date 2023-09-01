<template>
    <div class="OpenEyes">
        <p class="container">
            <span
                v-for="(word, index) in arrText"
                :key="index"
                :data-text="word"
                :style="{'--i': index / 10 + 's'}"
                v-html="word"
            ></span>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 'Open your eyes, look up to the skies and see'
        };
    },
    computed: {
        arrText() {
            return this.text.split(' ');
        },
    },
}
</script>

<style lang="scss" scoped>
@import "assets/style/Style.scss";
.OpenEyes {
    @include flexCenter;
    @include div50;
    background-color: $BLACK;
    color: $WHITE;
    @keyframes OpenEyes_paint {
        0% {
            max-height: 0;
            max-width: 0;
        }
        50% {
            max-height: 100%;
            max-width: 100%;
        }
        100% {
            max-height: 0;
            max-width: 0;
        }
    }
    .container {
        font-size: 3rem;
        line-height: 3rem;
        max-width: 20rem;
        span {
            display: inline-block;
            position: relative;
            margin-right: 0.2em;
            &:before {
                animation: OpenEyes_paint 4.4s ease-in-out infinite;
                color: $GOLD;
            }
            &:after {
                animation: OpenEyes_paint 4s ease-in-out infinite;
                color: $GREEN;
            }
            &:before,
            &:after {
                content: attr(data-text);
                animation-delay: var(--i);
                left: 0;
                top: 0;
                overflow: hidden;
                position: absolute;
                z-index: 1;
            }
        }
    }
}

</style>
