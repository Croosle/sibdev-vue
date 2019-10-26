<template lang="html">
  <div>
    <h3>Kanye West quote</h3>
    <p>{{ quote }}</p>
    <base-loading :loading="loading"></base-loading>
    <base-error :error="error"></base-error>
    <b-button @click="generateQuote()">Another quote</b-button>
  </div>
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
      quote: '',
      loading: true,
      error: ''
    }
  },
  mounted () {
    this.generateQuote()
  },
  methods: {
    generateQuote () {
      this.axios.get('https://api.kanye.rest/')
        .then(res => {this.quote = res.data.quote, this.loading = false})
        .catch((e) => {this.error = e, this.loading = false})
    }
  }
}
</script>
