export const useMainStore = defineStore('main', {
    state() {
        return {
            counter: 0,
        };
    },
    actions: {
        increment() {
            this.counter++;
        },
    }
})