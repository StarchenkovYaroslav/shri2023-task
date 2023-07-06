class Header {
  constructor() {
    this.header = document.querySelector('.header')
    this.button = this.header.querySelector('.header__menu')
    this.text = this.header.querySelector('.header__menu-text')
    this.links = this.header.querySelector('.header__links')

    this.expanded = false
    this.toggled = false

    this.button.addEventListener('click', this.onClick)
  }

  onClick = () => {
    if (!this.toggled) {
      this.toggled = true
    }
    this.expanded = !this.expanded

    this.update()
  }

  update() {
    this.button.setAttribute('aria-expanded', this.expanded ? 'true' : 'false')
    this.text.textContent = this.expanded ? 'Закрыть меню' : 'Открыть меню'
    this.links.className = 'header__links' + (this.expanded ? ' header__links_opened' : '') + (this.toggled ? ' header__links-toggled' : '')
  }
}

new Header()

class Tab {
  constructor() {
    this.activeTab = new URLSearchParams(location.search).get('tab') || 'all'
    this.hasRightScroll = false

    this.tabs = document.querySelectorAll('.section__tab')
    this.panels = document.querySelectorAll('.section__panel')
    this.panelsWrapper = document.querySelector('.section__panel-wrapper')
    this.select = document.querySelector('.section__select')

    this.init()
    this.update()
  }

  onTabClick = (evt) => {
    const tabName = evt.target.id.replace('tab_', '')
    this.activeTab = tabName

    this.update()
  }

  update() {
    this.tabs.forEach(tab => {
      const tabName = tab.id.replace('tab_', '')

      tab.setAttribute('aria-selected', tabName === this.activeTab ? 'true' : 'false')
      tab.tabIndex = tabName === this.activeTab ? '0' : undefined
      tab.className = 'section__tab' + (tabName === this.activeTab ? ' section__tab_active' : '')

    })

    this.panels.forEach(panel => {
      const panelName = panel.id.replace('panel_', '')
      const panelList = panel.querySelector('.section__panel-list')

      panel.className = 'section__panel' + (panelName === this.activeTab ? '' : ' section__panel_hidden')
      panel.setAttribute('aria-hidden', panelName === this.activeTab ? 'false' : 'true')
      panelList.className = 'section__panel-list' + (panelName === this.activeTab ? ' section__panel-list_active' : '')
    })

    this.updateRightScroll()

    if (this.hasRightScroll) {
      this.renderArrow()
    } else {
      this.removeArrow()
    }
  }

  init() {
    this.initTabs()
    this.initSelect()
  }

  initTabs() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', this.onTabClick)
    })
  }

  initSelect() {
    this.select.addEventListener('input', (evt) => {
      this.activeTab = evt.target.value
      this.update()
    })
  }

  renderArrow() {
    const arrow = document.createElement('div')
    arrow.className = 'section__arrow'
    arrow.addEventListener('click', this.onArrowClick)

    this.panelsWrapper.appendChild(arrow)

    this.arrow = arrow
  }

  removeArrow() {
    if (this.arrow) {
      this.arrow.remove()
      this.arrow = null
    }
  }

  updateRightScroll() {
    const totalWidth = Array.from(document.querySelectorAll('.section__panel-list_active .event'))
      .reduce((acc, item) => acc + item.offsetWidth, 0)

    const newHasRightScroll = totalWidth > this.panelsWrapper.offsetWidth;
    if (newHasRightScroll !== this.hasRightScroll) {
      this.hasRightScroll = newHasRightScroll
    }
  }

  onArrowClick = () => {
    const scroller = this.panelsWrapper.querySelector('.section__panel:not(.section__panel_hidden)');
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: 'smooth'
      });
    }
  }
}

new Tab()
