<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in mapColumns" :key="column[0]">{{ column[1] }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="row.id">
        <GridCell
          v-for="(column, colIndex) in mapColumns"
          :key="column[0]"
          :row-index="rowIndex"
          :col-key="column[0]"
          :value="row[column[0]]"
          :tab-index="`${rowIndex * 5 + colIndex}`"
          @update="updateValue"
          @keydown="move"
        />
      </tr>
    </tbody>
  </table>
</template>

<script>
import GridCell from './GridCell';
import records from './records';
import columns from './columns';

export default {
  components: {
    GridCell,
  },
  data() {
    return {
      data: records,
      columns: columns,
    };
  },
  computed: {
    mapColumns() {
      return new Map(Object.entries(this.columns));
    },
    maxIndex() {
      return this.data.length * this.mapColumns.size;
    },
    minIndex() {
      return 0;
    },
    columnLength() {
      return this.mapColumns.size;
    },
  },
  methods: {
    move(e) {
      const currentTabIndex = e.path[0].tabIndex;
      if (e.key === 'ArrowUp') {
        this.moveCell(currentTabIndex - this.columnLength);
        return;
      }
      if (e.key === 'ArrowRight') {
        this.moveCell(currentTabIndex + 1);
        return;
      }
      if (e.key === 'ArrowDown') {
        this.moveCell(currentTabIndex + this.columnLength);
        return;
      }
      if (e.key === 'ArrowLeft') {
        this.moveCell(currentTabIndex - 1);
      }
    },
    moveCell(index) {
      if (index >= this.maxIndex || index < this.minIndex) {
        return;
      }
      document.querySelector(`[tabindex="${index}"]`).focus();
    },
    updateValue(cell) {
      const record = this.data[cell.rowIndex];
      const newRecord = { ...record, [cell.colKey]: cell.newValue };
      this.data.splice(cell.rowIndex, 1, newRecord);
    },
  },
};
</script>
