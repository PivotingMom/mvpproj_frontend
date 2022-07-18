<template>
  <div class="container">
    <div class="form-content-area mt-4">
      <!-- <CreateEntryHeader /> -->
      <h4>Create a new note</h4>
      <p>Want to view past entries, <router-link to="/my-entry">Click here</router-link>
      </p>
      <form>
        <div class="form-group mb-4">
          <label for="Title">Entry Title:</label>
          <!-- NOTE: v-model attribute provides automatic access to 2-way reactive binding  -->
          <input type="entrytext" class="form-control" v-model="journalStore.currentEntry.Title"
            placeholder="Enter Title">
        </div>
        <div class="form-group mb-4">
          <label for="Content">Content:</label>
          <input type="text" class="form-control" v-model="journalStore.currentEntry.content" placeholder="Create Note">
        </div>
        <div class="form-group">
          <button class="btn btn-success" @click.prevent="createNote">SAVE</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useJournalStore } from '@/store/journal'

export default {
  setup() {
    const journalStore = useJournalStore();
    return {
      journalStore,
      createNote: () => {
        //console.log(journalStore.$state)
        journalStore.saveNote();
      }
    }
  },
  components: {

  }
}
</script>