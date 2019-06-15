import Vue from 'vue'
import VueI18Next from '@panter/vue-i18next'
import i18next from 'i18next'

/**
 * Carga un archivo de idioma y lo agrega como recurso a i18next.
 *
 * @param {string} language - El idioma a ser cargado
 *
 * @returns {Promise} La promesa de carga del archivo de idioma
 */
const loadLanguage = async (language) => {
  return import(`./${language}.json`)
    .then(resources => {
      i18next.addResourceBundle(language, 'translation', resources.default)
      return resources
    })
}

// Inicializa el motor de internacionalización.
i18next.init({
  lng: 'es'
})

// Carga idioma español y marcamos i18n como activo.
loadLanguage('es')
loadLanguage('en')
loadLanguage('fr')
loadLanguage('pt')
Vue.use(VueI18Next)
export default new VueI18Next(i18next)
