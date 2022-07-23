<template>
  <div class="container">
    <div class="form-content-area mt-4">
      <h4>Edit Entry</h4>

      <form @submit.prevent="update(entry)">
        <div class="form-group mb-4">
          <label for="EntryTitle">Enter new Title</label>
          <input type="entrytext" class="form-control" placeholder="make changes" v-model="entry.Title">
        </div>

        <div class="form-group mb-4">
          <label for="Content">Enter new content</label>
          <input type="entrytext" class="form-control" placeholder="make changes" v-model="entry.content">
        </div>
        <div class="form-group">
          <button class="btn btn-success">Update Entry</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useJournalStore } from '../../store/journal';

export default ({
  async setup() {
    const journalStore = useJournalStore();
    const route = useRoute();
    await journalStore.fetchSingleEntry(route.params.id)

//const { singleJournal } = storeToRefs(journalStore);
    const form = ref(journalStore.currentEntry);

    function update(entry) {
      console.log(entry);
      journalStore.update_entry(route.params.id, entry)
    }
  
    return {
      entry: journalStore.currentEntry,
      form,
      update,
    }
  },
})
</script>