<template lang="html">
  <b-row>
    <b-col lg="6" v-for="(video, index) in cards" :key="index" class="mb-4">
      <h3>{{ video.videoTitle }}</h3>
      <iframe width="100%" height="315" :src="`https://www.youtube.com/embed/${video.videoCode}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    this.axios.get('https://thereportoftheweek-api.herokuapp.com/reports?between=2018-8-1|2019-1-1')
      .then(res => {this.cards = res.data, this.loading = false})
      .catch((e) => {this.error = e, this.loading = false})
  }
}
</script>
