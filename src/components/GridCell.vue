<template>
  <td :tabindex="tabIndex" @keydown.prevent="keydown">cell</td>
</template>

<script>
export default {
  props: {
    tabIndex: {
      type: String,
      required: true,
    }
  },
  methods: {
    keydown(e) {
      this.$emit('keydown', e)
    }
  }
}
</script>
