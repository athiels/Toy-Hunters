import { NavbarTemplate } from '../templates/navbar-template.js'

const Navbar = {
  template: NavbarTemplate,
  data: function() {
    return {
      collapsed: false
    }
  },
  methods: {
    toggleMenu: function() {
      this.collapsed = !this.collapsed;
    }
  }
}

export { Navbar }