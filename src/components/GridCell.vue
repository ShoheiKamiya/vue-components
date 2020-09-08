<template>
  <td :tabindex="tabIndex" @keydown.prevent="keydown">{{value}}</td>
</template>

<script>
export default {
  props: {
    tabIndex: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    }
  },
  methods: {
    keydown(e) {
      this.$emit('keydown', e)
    }
  }
}
</script>
