import VeeValidate from 'vee-validate'

export default function () {
  /*
    Declara las reglas personalizadas
    https://baianat.github.io/vee-validate/guide/custom-rules.html#creating-a-custom-rule
  */

  VeeValidate.Validator.extend('search', { validate: value => value.length > 0 })

  VeeValidate.Validator.extend('doc_cita_asistencia', { validate: value => value.length > 0 })

  VeeValidate.Validator.extend('radio', { validate: value => value })
}
