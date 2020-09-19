<template>
  <div class="trello">
    <TrelloList class="trello__list" category="A" @dropTask="updateCategory">
      <TrelloCard
        v-for="task in categoryA"
        :key="task.id"
        draggable
        :task="task"
      />
    </TrelloList>

    <TrelloList class="trello__list" category="B" @dropTask="updateCategory">
      <TrelloCard
        v-for="task in categoryB"
        :key="task.id"
        draggable
        :task="task"
      />
    </TrelloList>
  </div>
</template>

<script>
import TrelloList from '@/projects/02-trello-clone/TrelloList';
import TrelloCard from '@/projects/02-trello-clone/TrelloCard';
import tasks from '@/projects/02-trello-clone/tasks';

export default {
  components: {
    TrelloList,
    TrelloCard,
  },
  data() {
    return {
      tasks: tasks,
    };
  },
  computed: {
    categoryA() {
      return this.tasks.filter(task => task.category === 'A');
    },
    categoryB() {
      return this.tasks.filter(task => task.category === 'B');
    },
  },
  methods: {
    updateCategory(newTask) {
      const index = this.tasks.findIndex(task => task.id === newTask.id);
      this.tasks.splice(index, 1, { ...this.tasks[index], ...newTask });
    },
  },
};
</script>

<style lang="scss" scoped>
.trello {
  display: flex;

  &__list {
    margin-right: 1em;
  }
}
</style>
