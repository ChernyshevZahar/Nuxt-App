<template>
  <div class="container">
    <div>

      <div v-for="item in items"
          v-bind:key="item.id"
      >
      {{item.table}}
      </div>

    </div>
  </div>
</template>

<script>
import { messageQuery } from '~/graphql/query.js'
export default {
    data(){
      return {
          items:[]
      }
    },
    apollo:{
        items:{
          prefetch:true,
          query:messageQuery
        }
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
