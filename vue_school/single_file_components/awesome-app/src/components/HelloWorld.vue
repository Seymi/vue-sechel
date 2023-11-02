<template>
  <div class="hello">
    <button @click="showUsername = !showUsername">User Profil</button>
    <div v-if="showUsername">
      <big-yellow-username username="Not registered"></big-yellow-username>
    </div>


  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
//import BigYellowUsername from './BigYellowUsername.vue';
export default {
  name: 'HelloWorld',
  //components: { BigYellowUsername: defineAsyncComponent(() => import(/* webpackChunkName: "BigYellowUsername" */ './BigYellowUsername.vue')) },
  components: { BigYellowUsername: defineAsyncComponent(() => import(/* webpackPrefetch: true */ './BigYellowUsername.vue')) },

  props: {
    msg: String
  },
  data() {
    return {
      showUsername: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
