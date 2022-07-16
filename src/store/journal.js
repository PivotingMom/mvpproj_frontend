import { createJournalEntry } from '@/services/journal.service';
import { defineStore } from 'pinia';
import { useAuthStore } from './auth';

export const useJournalStore = defineStore('journal', {
  state: () => {
    return {
      currentEntry: {
        entryTitle: '',
        entryBody: '',
      },
    }
  },
  actions: {
    saveNote() {
      const authStore = useAuthStore();
      const { entryTitle: Title, entryBody: content } = this.$state.currentEntry;

      const payload = {
        Title,
        content,
        client_id: authStore.clientId,
        Date: Date.now(),
      }
  
      createJournalEntry(payload).then(response => {
        console.log(response);
      });
    }
  }
})