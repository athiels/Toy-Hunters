import Vue from './vue.js'

import { Navbar } from './components/navbar.js'

import { MainTemplate } from './templates/main-template.js'

import { routes } from './routes.js'
import { toys } from './game/toys.js'
import { items } from './game/items.js'
import { Item } from './game/item.js';
import { Store } from './store.js';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})

Vue.prototype.$store = new Store({
  $toys: toys,
  $items: items,
  $tookKey: false,
  $tookLamp: false,
  $tookMan2: false
});

Vue.prototype.collectItem = function(img) {
  this.$store.state.$items.push(new Item(img));
}

Vue.prototype.collectToy = function(toy) {
  var toyObject = this.$store.state.$toys.find(t => t.img == toy);
  if (toyObject) {
    Vue.set(toyObject, "collected", true);
  }
}

new Vue({
    el: '#app',
    components: {
        'navbar': Navbar
    },
    router,
    template: MainTemplate
})