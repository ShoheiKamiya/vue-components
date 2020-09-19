<template>
  <div class="list" @drop="emitDropTask($event)" @dragover.prevent>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitDropTask(event) {
      const task = {
        id: Number(event.dataTransfer.getData('taskId')),
        category: this.category,
      };

      this.$emit('dropTask', task);
    },
  },
};
</script>

<style>
.list {
  width: 300px;
  height: 500px;
  border-radius: 18px;
  padding: 28px 20px;
  background: rgb(237, 245, 255);
}
</style>
