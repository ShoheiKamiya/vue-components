<template>
  <div
    class="card"
    :class="{ dragging: isDragging }"
    @dragstart="dragstart($event)"
    @dragend="dragend"
  >
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
  data() {
    return {
      isDragging: false,
    };
  },
  methods: {
    dragstart(event) {
      event.dataTransfer.setData('taskId', this.task.id);
      this.isDragging = true;
    },
    dragend() {
      this.isDragging = false;
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

.dragging {
  opacity: 0.3;
}
</style>
