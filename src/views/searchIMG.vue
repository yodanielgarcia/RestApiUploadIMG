<template>
<b-row>
  <b-col md="6">
    <b-card-body title="Buscar Imagen" class="text-left">
    <b-row>
        <b-col md="6">
        <label for="nameQuery">{{ $t('NameIMG') }}</label>
        <b-form-input v-model="data" type="text" required></b-form-input>
        </b-col>
    </b-row>    
    <br>
    <b-col>
      <b-button variant="secondary" @click="searchIMG" style="margin-right: 4px">Buscar</b-button>
      <a v-bind:href="urlss">Descargar</a>
    </b-col>
    </b-card-body>
</b-col>
</b-row>
</template>
<script>
import axios from "axios";
export default {
  name: 'searchIMG',
  data () {
    return {
      data:'',
      response: '',
      urlss: 'http://localhost:8000/api/getImg?name='
    }
  },
  methods: {
    searchIMG() {
      axios.get('http://localhost:8000/api/example?name='+this.data).then(function(data){
              alert(data.data)
            })
      let name = this.data
      console.log(name)
      this.urlss = 'http://localhost:8000/api/getImg?name='+ name
    }
  }
}
</script>
