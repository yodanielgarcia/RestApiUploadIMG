class ExampleServices {
  axios
  baseUrl

  constructor (axios) {
    this.axios = axios
    this.baseUrl = process.env.VUE_APP_API_FX + '/api/ENDPOINT'
  }

  getAll () {
    return this.axios.get(this.baseUrl)
  }

  get (id) {
    return this.axios.get(`${this.baseUrl}/${id}`)
  }

  add (config) {
    return this.axios.post(this.baseUrl, config)
  }

  remove (id) {
    return this.axios.delete(`${this.baseUrl}/${id}`)
  }

  update (id, config) {
    return this.axios.put(`${this.baseUrl}/${id}`, config)
  }
}

export default TemplateTypeServices
