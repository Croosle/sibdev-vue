<template lang="html">
  <b-row>
    <b-col cols="12" v-for="(ghibli, index) in cards" :key="index" class="mb-4">
      <h1>{{ ghibli.title }}</h1>
      <p>{{ ghibli.description }}</p>
      <b-row>
        <b-col lg="3">
          <p>Director: {{ ghibli.director }}</p>
        </b-col>
        <b-col lg="3">
          <p>Producer: {{ ghibli.producer }}</p>
        </b-col>
        <b-col lg="3">
          <p>Release date: {{ ghibli.release_date }}</p>
        </b-col>
      </b-row>
    </b-col>

    <base-loading :loading="loading"></base-loading>
    <base-error :error="error"></base-error>
  </b-row>
</template>

<script>
import BaseLoading from '../BaseLoading.vue'
import BaseError from '../BaseError.vue'

export default {
  components: {
    BaseLoading,
    BaseError
  },
  data () {
    return {
      cards: [],
      loading: true,
      error: ''
    }
  },
  mounted () {
    this.axios.get('https://ghibliapi.herokuapp.com/films/')
      .then(res => {this.cards = res.data, this.loading = false})
      .catch((e) => {this.error = e, this.loading = false})
  }
}
</script>
