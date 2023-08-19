<template>
    <div class="HelloWorld">
        <span>console.<mark>log</mark>("</span>
        <div class="container">
            <div class="string">
                <span class="greeting en">Hello World!</span>
                <span class="greeting es">¡Hola Mundo!</span>
                <span class="greeting de">Hallo Welt!</span>
                <span class="greeting it">Ciao Mondo!</span>
            </div>
        </div>
        ");
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "assets/style/Style.scss";
.HelloWorld {
    @include flexCenter;
    @include div50;
    background-color: $BLACK;
    color: $WHITE;
    font-size: 20px;
    @keyframes move {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        25% {
            transform: translateY(-25%);
            opacity: 1;
        }
        50% {
            transform: translatey(-50%);
        }
        75% {
            transform: translatey(-75%);
        }
    }
    .container {
        font-size: 20px;
        position: relative;
        height: 1.3em;
        overflow: hidden;
    }
    mark {
        color: $GOLD;
    }
    .string {
        animation: move 4s infinite;
        white-space: nowrap;
        span {
            display: block;
        }
    }
    .en {
        color: $GOLD;
    }
    .es {
        color: $WHITE;
    }
    .de {
        color: $GREEN;
    }
    .it {
        color: $WHITE;
    }
}

</style>
