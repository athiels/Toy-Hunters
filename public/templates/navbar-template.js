const NavbarTemplate = `<nav>
  <ul>
    <li @click="toggleMenu">COLLAPSE</li>
    <span v-show="!collapsed" >
      <li v-for="toy in $store.state.$toys">
        <img :src="'./img/toys/' + toy.img + '' + (toy.collected ? '' : '_black') + '.png'"/>
      </li>
      <span class="items">
        <li v-for="item in $store.state.$items">
          <img :src="'./img/items/' + item.img + '.png'"/>
        </li>
      </span>
    </span>
  </ul>
</nav>`

export { NavbarTemplate }