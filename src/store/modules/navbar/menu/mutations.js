const NAVBAR_MENU_ALL = (state, navbarMenu) => {
  state.navbarMenu = navbarMenu.data
  state.status = 'success'
}
const I18NREADY = (state, data) => {
  state.i18nReady = data.data
}

const VAR_PRIVATE_AZURE = (state, varAux) => {
  state.navbarAzure = varAux
}
export default {
  NAVBAR_MENU_ALL,
  I18NREADY,
  VAR_PRIVATE_AZURE
}
