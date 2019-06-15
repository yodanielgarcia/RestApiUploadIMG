<template lang="pug">
  #app
    navBar
    router-view
</template>
<script>
import navBar from '@/components/navBar'

export default {
  name: 'App',
  components: {
    navBar
  }
}
</script>
