<template>
  <td
    :tabindex="tabIndex"
    @keydown="keyAcion"
    @dblclick="showEditor"
    ref='cell'
  >
    <input
      type='text'
      ref='editor'
      v-show="editting"
      :value="value"
      @keydown.enter="updateValue"
      @blur="hideEditor"
    >
    <span v-show="!editting">{{value}}</span>
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
    },
    colKey: {
      type: String,
    },
    value: {
      type: String,
    }
  },
  data() {
    return {
      editting: false,
    }
  },
  methods: {
    keyAcion(e) {
      if (e.key=='Enter') {
        this.showEditor();
        return
      }
      // if (e.key=='Escape') {
      //   this.hideEditor();
      //   return
      // }
      this.$emit('keydown', e)
    },
    showEditor() {
      this.editting = true;
      this.$nextTick(() => this.$refs.editor.focus())
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
      }
      this.$nextTick(() => this.$refs.editor.blur())
      
      this.$emit('update', cell);
    }
  }
}
</script>
