<template>
  <div id="app">
  <div id="navBar">
  <div id="logo"><a href="./home"><img class="logo" alt=" logo" src="./assets/nika-logog.webp"></a></div>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/shop">Shop</router-link>
  </div>
  </div>

  <router-view/>
  <div id="footer">
    <MyNavigation/>
    <div id="socialmedia">
    <a id="instagram"
      :href="instagram.url"
      :target="instagram.target"
      :tabindex="instagram.tabindex"
      v-text="instagram.title"
    /> |
    <a id="facebook"
      :href="facebook.url"
      :target="facebook.target"
      :tabindex="facebook.tabindex"
      v-text="facebook.title"
    />
    </div>
  </div>
  </div>
</template>

<script>
/* Import all components */
/*import Demos from './components/Shop'*/
import SimpleNav from './components/SimpleNav'


export default {
  data() {
    return {
      instagram: {
        url: 'https://instagram.com/nika_schmuck/',
        target: '_blank',
        tabindex: '0',
        title: 'Folge uns auf Instagram'
      },
      facebook: {
        url: 'https://de-de.facebook.com/nika.schmuck/',
        target: '_blank',
        tabindex: '0',
        title: 'Folge uns auf Facebook'
      }
    }
  },
 components: {
  MyNavigation: SimpleNav,
  }
}
</script>

<style lang="scss">
//demo-03
//Import of global-style
@import 'styles/global';
</style>
