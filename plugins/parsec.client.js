// import { createApp } from 'vue'
// import App from './App.vue'
// import { log } from "util";
import { defineNuxtPlugin } from "#app";

// const app = createApp(App)

console.log('test')

function ParsecClient(Vue) {
	const observerOptions = { rootMargin: `${Math.max(window.innerHeight, window.innerWidth) / 10}px` }
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(({ target, isIntersecting }) => {
			target.setAttribute('intersecting', isIntersecting.toString())
		})
	}, observerOptions)
	const elements = {}

	class Element {
		constructor(el, binding) {
			this.el = el
			this.initialPosition = this.setInitialPosition()
			this.binding = binding
			this.id = this.getUniqueId()
			this.initialSign = this.setInitialSign()
			elements[this.id] = this;
		}

		resetStyleParameters() {
			console.log('resetbefore', this.el.style)
			this.el.style.transform = `translate3d(0, 0, 0)`
			this.el.style.opacity = 1;
			this.el.style.rotate = 0;
			console.log('resetafter', this.el.style)
		}

		setInitialPosition() {
			const parentHeight = this.el.offsetParent.getBoundingClientRect().height
			const parentOffset = this.el.offsetParent.offsetTop
			return parentOffset + (parentHeight - window.innerHeight) / 2
		}

		getUniqueId() {
			let id
			do {
				id = Math.random() * 1000 ^ 0
			} while (id in elements)
			return id
		}

		setInitialSign() {
			return Math.sign(this.initialPosition - window.scrollY)
		}
	}

	window.addEventListener('scroll', () => {
		Object.values(elements).forEach(setStyleToElement)
	})
	window.addEventListener('resize', (e) => {
		Object.values(elements).forEach((element) => {
			console.log(element)
			element.resetStyleParameters()
			element.el.style.rotate = 0
			element.setInitialPosition()
			element.setInitialSign()
			setStyleToElement(element)
		})
	})

	function breakDown(element) {
		element.resetStyleParameters()
		observer.unobserve(element.el)
		delete elements[element.id]
	}

	function setStyleToElement(element) {
		const { value, modifiers } = element.binding
		const offset = element.initialPosition - window.scrollY
		if (modifiers.stop && Math.sign(offset) !== element.initialSign) {
			breakDown(element);
			return;
		}
		window.requestAnimationFrame(() => {
			if (value?.translateX || value?.translateY) {
				const x = value?.translateX ? (value?.translateX) * offset : 0;
				const y = value?.translateY ? (value?.translateY) * offset : 0;
				element.el.style.transform = `translate3d(${x}px, ${y}px, 0)`
			}
			if (element.el.getAttribute('intersecting') === 'true' || !element.el.getAttribute('intersecting')) {
				if (value?.opacity) {
					element.el.style.opacity = (1 - value.opacity * (Math.abs(offset / window.innerHeight)))
				}
				if (value?.rotate) {
					element.el.style.rotate = `${(value.rotate * 360 * offset / window.innerHeight)}deg`;
				}
			}
		})
	}

	function main(el, binding) {
		const element = new Element(el, binding);
		if (!(binding.value?.translateX && binding.value?.translateY)) {
			observer.observe(el)
		}
		setStyleToElement(element)
	}

	Vue.vueApp.directive('parsec', main)
}

export default defineNuxtPlugin(ParsecClient);
// app.use(ParsecClient)
// app.mount('#app')
