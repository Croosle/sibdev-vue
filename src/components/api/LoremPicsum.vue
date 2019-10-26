<template lang="html">
  <b-row>
    <b-col lg="4" v-for="(pic, index) in cards" :key="index" class="mb-4">
      <img :src="pic.download_url" width="100%">
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
    this.axios.get('https://picsum.photos/v2/list?page=2&limit=6')
      .then(res => {this.cards = res.data, this.loading = false})
      .catch((e) => {this.error = e, this.loading = false})
  }
}
</script>
