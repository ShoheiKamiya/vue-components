<template>
  <table>
    <thead>
      <tr>
        <th>A</th>
        <th>B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <GridCell tabIndex='1' @keydown="move" />
        <GridCell tabIndex='2' @keydown="move" />
      </tr>
      <tr>
        <GridCell tabIndex='3' @keydown="move" />
        <GridCell tabIndex='4' @keydown="move" />
      </tr>
    </tbody>
  </table>
</template>

<script>
import GridCell from './GridCell';

export default {
  data() {
    return {
      minIndex: 1,
      maxIndex: 4,
      columnNumber: 2,
    }
  },
  components: {
    GridCell,
  },
  methods: {
    move(e) {
      const currentTabIndex = e.path[0].tabIndex;
      if (e.key=='ArrowUp') {
        this.moveCell(currentTabIndex - this.columnNumber);
        return
      }
      if (e.key=='ArrowRight') {
        this.moveCell(currentTabIndex + 1);
        return
      }
      if (e.key=='ArrowDown') {
        this.moveCell(currentTabIndex + this.columnNumber);
        return
      }
      if (e.key=='ArrowLeft') {
        this.moveCell(currentTabIndex - 1);
        return
      }
    },
    moveCell(index) {
      if (index > this.maxIndex || index < this.minIndex) {
        return;
      }
      document.querySelector(`[tabindex="${index}"]`).focus()
    }
  }
}
</script>
