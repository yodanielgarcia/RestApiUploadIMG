<template>
<b-row>
  <b-col md="6">
    <b-card-body title="Subida de Imagen" class="text-left">
    <b-row>
        <b-col md="6">
        <label for="nameQuery">{{ $t('SelectIMG') }}</label>
        <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file..."
          drop-placeholder="Drop file here..."
          accept=".jpg, .png, .gif"
          v-on:change="onChangeFileUpload()"
        ></b-form-file>
        </b-col>
    </b-row>    
    <br>
    <b-col>
      <b-button variant="success" @click="submitForm" style="margin-right: 4px">{{ $t('lbl_guardar') }}</b-button>
    </b-col>
    </b-card-body>
  </b-col>
</b-row>
</template>
<script>
import axios from 'axios'
export default {
  name: 'searchIMG',
  data () {
    return {
      file:''
    }
  },
   methods: {
      submitForm(){
            let formData = new FormData();
            formData.append('file', this.file);
  
            axios.post('http://localhost:8000/api/create',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(data){
              alert('subido con exito')
            })
            .catch(function(){
            });
      },
  
      onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>