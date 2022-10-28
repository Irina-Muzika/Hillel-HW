class Tabs {
	static CLASS_DIV_LIST = 'tabs_divs'
	static CLASS_NAV_LIST = 'tabs_nav'
	static CLASS_BUTTON = 'tab_button'
	static CLASS_CONTENT = 'tab_content'
	static CLASS_NAVBUT = `tabs_nav_button`
	static CLASS_DIVSCHILD = `tabs_divs_div`



	constructor(parentEl) {
		this.parentEl = parentEl
		this.currentTab = 0
		this.bindStylish()
		this.parentEl.addEventListener('click', this.onParentElClick.bind(this))
		this.getParentElChild(0, this.currentTab).classList.add(Tabs.CLASS_BUTTON)
		this.getParentElChild(1, this.currentTab).classList.add(Tabs.CLASS_CONTENT)
	}

	bindStylish() {
		this.parentEl.children[1].classList.add(Tabs.CLASS_DIV_LIST)
		this.parentEl.children[0].classList.add(Tabs.CLASS_NAV_LIST)

		const a = this.parentEl.children[0].children
		const b = this.parentEl.children[1].children

		for (let i = 0; i < a.length && i < b.length; i++) {
			a[i].classList.add(Tabs.CLASS_NAVBUT)
			b[i].classList.add(Tabs.CLASS_DIVSCHILD)
		}
	}


	onParentElClick(e) {
		if (e.target.classList.contains(Tabs.CLASS_NAVBUT)) {

			if (this.isTabElContEl()) {
				this.getParentElChild(0, this.currentTab).classList.remove(Tabs.CLASS_BUTTON)
				this.getParentElChild(1, this.currentTab).classList.remove(Tabs.CLASS_CONTENT)
			}

			this.changeCurrentTab(e)

			this.getParentElChild(1, this.currentTab).classList.add(Tabs.CLASS_CONTENT)
		}
	}

	getParentElChild(num, current) {
		return this.parentEl.children[num].children[current]
	}

	isTabElContEl() {
		const findTabsEl = document.querySelectorAll('.' + Tabs.CLASS_BUTTON)
		const findContEl = document.querySelectorAll('.' + Tabs.CLASS_CONTENT)
		return findTabsEl && findContEl
	}

	changeCurrentTab(e) {
		const buttonETarg = e.target
		const arr = this.parentEl.children[0].children

		for (let a = 0; a < arr.length; a++) {
			if (arr[a] === buttonETarg) {
				this.currentTab = a
				buttonETarg.classList.add(Tabs.CLASS_BUTTON)
			}
		}
	}
}