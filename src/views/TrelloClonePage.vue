<template>
  <div class="home">
    <TrelloList />
    <TrelloCard />
  </div>
</template>

<script>
import TrelloList from '@/projects/02-trello-clone/TrelloList';
import TrelloCard from '@/projects/02-trello-clone/TrelloCard';

export default {
  components: {
    TrelloList,
    TrelloCard,
  },
};
</script>
