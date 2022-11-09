class Tabs {
	static CLASS_DIV_LIST = 'tabs_divs'
	static CLASS_NAV_LIST = 'tabs_nav'
	static CLASS_BUTTON = 'tab_button'
	static CLASS_CONTENT = 'tab_content'
	static CLASS_NAVBUT = `tabs_nav_button`
	static CLASS_DIVSCHILD = `tabs_divs_div`
	static INDEX_NAV_ITEM = 0
	static INDEX_DIV_ITEM = 1
	static DEFAULT_CURRENT_ITEM = 0
	



	constructor(parentEl) {
		this.parentEl = parentEl
		this.currentTab = Tabs.DEFAULT_CURRENT_ITEM
		this.bindStylish()
		this.parentEl.addEventListener('click', this.onParentElClick.bind(this))
		
	}

	bindStylish() {
		this.getParentElChild(Tabs.INDEX_NAV_ITEM, this.currentTab).classList.add(Tabs.CLASS_BUTTON)
		this.getParentElChild(Tabs.INDEX_DIV_ITEM, this.currentTab).classList.add(Tabs.CLASS_CONTENT)
		this.parentEl.children[Tabs.INDEX_DIV_ITEM].classList.add(Tabs.CLASS_DIV_LIST)
		this.parentEl.children[Tabs.INDEX_NAV_ITEM].classList.add(Tabs.CLASS_NAV_LIST)

		const navEl = this.parentEl.children[Tabs.INDEX_NAV_ITEM].children
		const divEl = this.parentEl.children[Tabs.INDEX_DIV_ITEM].children

		
		for (let i = 0; i < navEl.length && i < divEl.length; i++) {
			navEl[i].classList.add(Tabs.CLASS_NAVBUT)
			divEl[i].classList.add(Tabs.CLASS_DIVSCHILD)
			

		}
	}

	onParentElClick(e) {
		if (e.target.classList.contains(Tabs.CLASS_NAVBUT)) {

			if (this.isTabElContEl()) {
				this.getParentElChild(Tabs.INDEX_NAV_ITEM, this.currentTab).classList.remove(Tabs.CLASS_BUTTON)
				this.getParentElChild(Tabs.INDEX_DIV_ITEM, this.currentTab).classList.remove(Tabs.CLASS_CONTENT)
			}

			this.changeCurrentTab(e.target)

			this.getParentElChild(Tabs.INDEX_DIV_ITEM, this.currentTab).classList.add(Tabs.CLASS_CONTENT)
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

	changeCurrentTab(buttonETarg) {
		const arr = this.parentEl.children[Tabs.INDEX_NAV_ITEM].children

		for (let a = 0; a < arr.length; a++) {
			if (arr[a] === buttonETarg) {
				this.currentTab = a
				buttonETarg.classList.add(Tabs.CLASS_BUTTON)
			}
		}
	}
}