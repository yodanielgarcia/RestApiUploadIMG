<template>
  <div class="menu-container">
  <b-navbar toggleable="md" type="dark" id="menu-principal">
    <b-row style="width: 100%;margin-left:0%">
      <b-col lg="8" style="text-align: left">
        <h6>
          <span class="txt-white">
            {{ $t('lbl_bienvenido') }}
            <span class="fas fa-user"><a href=""></a></span>
          </span>
        </h6>
      </b-col>
      <b-col lg="4" class="text-right" id="menu-derecho">
        <h6>
            <span class="flagLanguage flagLanguage-es" title="ES" v-on:click="changeLang('es')"></span>
            <span class="flagLanguage flagLanguage-en" title="EN" v-on:click="changeLang('en')"></span>
            <span class="flagLanguage flagLanguage-fr" title="FR" v-on:click="changeLang('fr')"></span>
            <span class="flagLanguage flagLanguage-pt" title="PT" v-on:click="changeLang('pt')"></span>
            <a @click="logout" class="margin-nav txt-white-hd-md">
            <span class="far fa-times-circle"></span>
            {{ $t('lbl_salir') }}
          </a>
        </h6>
      </b-col>
      <b-col style="display: -webkit-inline-box;" class="mega-menu-container">
        <a class="logo__link" href="#">
          <img class="logo" src="../assets/img/logo.png">
        </a>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="">
            <b-nav-item href="">{{ $t('lbl_inicio') }}</b-nav-item>
            <span>
              <b-nav-item-dropdown text="Menu">
                <ul class="nav navbar-nav text-rignt">
                  <b-dropdown-item to="/searchIMG" style="color: #469ec3;font-weight: bold;">{{ $t('searchImg') }}
                  </b-dropdown-item>
                  <b-dropdown-item to="/CreateIMG" style="color: #469ec3;font-weight: bold;">{{ $t('SaveIMG') }}
                  </b-dropdown-item>
                </ul>
              </b-nav-item-dropdown>
            </span>
          <!-- Right aligned nav items -->
          </b-navbar-nav>
        </b-collapse>
      </b-col>
    </b-row>
  </b-navbar>
  </div>
</template>
<script>
import i18next from 'i18next'
export default {
  name: 'navbarComponet',
  data () {
    return {
    }
  },
  beforeMount () {
  },
  methods: {
    changeLang: function (Idiom) {
      i18next.changeLanguage(Idiom, (err, t) => {
        if (err) return console.log('something went wrong loading', err)
        t('key') // -> same as i18next.t
      })
    },
    logout: function () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
