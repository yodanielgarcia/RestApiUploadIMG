// actions
import axios from 'axios'
import store from '@/store'

const navbarMenuAll = (context) => {
  // url = endpoint Api lumen/laravel
  let url = process.env.VUE_APP_API_HW
  url += '/api/serviceMenu?usr_log=' + store.state.auth.userInfo + '&menu=MNU_Cre_de_asi'
  return axios.get(url)
    .then(response => {
      context.commit('NAVBAR_MENU_ALL', response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

const roomByUser = (context) => {
  // url = endpoint Api lumen/larvel
  let url = process.env.VUE_APP_API_HW
  url += '/api/roomByUser?usr_log=' + store.state.auth.userMail
  return axios.get(url)
    .then(response => {
      context.commit('ROOM_OF_USER_LOG', response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default {
  navbarMenuAll,
  roomByUser
}
