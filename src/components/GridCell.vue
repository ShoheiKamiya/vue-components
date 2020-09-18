<template>
  <td
    ref="cell"
    :tabindex="tabIndex"
    @keydown="keyAcion"
    @dblclick="showEditor"
  >
    <input
      v-show="editting"
      ref="editor"
      type="text"
      :value="value"
      @keydown.enter="updateValue"
      @blur="hideEditor"
    />
    <span v-show="!editting">{{ value }}</span>
  </td>
</template>

<script>
export default {
  props: {
    tabIndex: {
      type: String,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    colKey: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editting: false,
    };
  },
  methods: {
    keyAcion(e) {
      if (e.key === 'Enter') {
        this.showEditor();
        return;
      }
      // if (e.key=='Escape') {
      //   this.hideEditor();
      //   return
      // }
      this.$emit('keydown', e);
    },
    showEditor() {
      this.editting = true;
      this.$nextTick(() => this.$refs.editor.focus());
    },
    hideEditor() {
      this.editting = false;
      this.$refs.cell.focus();
    },
    updateValue() {
      const cell = {
        rowIndex: this.rowIndex,
        colKey: this.colKey,
        oldValue: this.value,
        newValue: this.$refs.editor.value,
      };
      this.$nextTick(() => this.$refs.editor.blur());

      this.$emit('update', cell);
    },
  },
};
</script>
