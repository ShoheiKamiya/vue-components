<template>
  <div class="card" @dragstart="dragstart($event)">
    {{ task.title }}
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    dragstart(event) {
      event.dataTransfer.setData('taskId', this.task.id);
    },
  },
};
</script>

<style lang="scss">
.card {
  background: #fff;
  width: 100%;
  padding: 8px;
  border: 1px solid rgba(92, 147, 187, 0.15);
  border-radius: 4px;
}
</style>
