import Vue from 'vue'
import VeeValidate from 'vee-validate'
import customRules from './customRules'
import i18n from '../i18n'

/**
  Carga un archivo de idioma y genera el diccionario de mensajes para las validaciones.
  @param {string} language - El idioma a ser cargado
  @returns {Promise} La promesa de carga del archivo de idioma
*/
const generateDictionary = async (language) => {
  return import(`../i18n/${language}.json`)
    .then(lang => {
      let dictionary = {}
      Object.keys(lang.validations).map(x => {
        dictionary.messages = {
          ...dictionary.messages,
          [x]: field => i18n.t('validations.' + x, { field })
        }
      })
      return dictionary
    })
}

/**
  Carga el diccionario y lo setea junto la localizacion para traducir las validaciones.
  @param {string} lang - El idioma a ser cargado y seteado, ejemplo: es, en, de, etc (segun los json que se tengan traducidos en i18n)
*/
export function loadLangVeeValidate (lang) {
  generateDictionary(lang).then(dictionary => {
    VeeValidate.Validator.localize(lang, dictionary)
  })
}

export default (function () {
  // Ejecuta las reglas personalizadas
  customRules()

  // Genera y carga un idioma
  loadLangVeeValidate('es')

  // Inicializa y aplica VeeValidate
  Vue.use(VeeValidate, {
    classes: true,
    classNames: {
      valid: 'ay-form__field_valid',
      invalid: 'ay-form__field_invalid'
    }
  })
})()
