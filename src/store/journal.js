import { defineStore } from 'pinia';
import { createJournalEntry, getAllEntry, getSingleEntry, deleteSingleEntry, updateEntry} from '@/services/journal.service';
import { useAuthStore } from './auth';

export const useJournalStore = defineStore('journal', {
  state: () => {
    return {
      currentEntry: {
        Title: '',
        content: '',
      },
      allEntries: []
    } 
  },
  actions: {
    saveNote() {
      const authStore = useAuthStore();
      const { Title, content } = this.$state.currentEntry;

      const payload = {
        Title,
        content,
        client_id: authStore.clientId,
        Date: Date.now(),
      }
  
      createJournalEntry(payload).then(response => {
        console.log(response);
      });
    },
  async fetchAllEntry() {
        await getAllEntry()
        .then((response) => {
            console.log('All Entry data')
            console.log(response);
            this.allEntries = response.data.map(item => {
                return {
                    id: item[0],
                    Title: item[1],   
                    content:item[2],
                    clientId: item[3],
                    created_at: item[4]
                }
            })
          })
          .catch((err) => {
            console.log(err)
            this.entry = []
        })
    },
    async deleteSelectedEntry(journalId) {
        await deleteSingleEntry(journalId)
        .then((response) => {
            alert("Entry deleted successfully");
            window.location.reload();
            console.log(response.data)
        })
        .catch((err) => {
            alert("Unable to delete entry");
            console.log(err)
        })
    },
    async fetchSingleEntry(journalId) {
        await getSingleEntry(journalId)
          .then((response) => {
            const item = response.data;
            console.log(response.data)
            this.currentEntry = {
              id: item[0],
              clientId: item[1],
              Title:  item[2],   
              content: item[3],
              Date: item[4],
            }
        })
        .catch((err) => {
            this.currentEntry = {}
            console.log(err)
        })
    },
    async update_entry(journalId, payload) {
        await updateEntry(journalId, payload)
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
  }
})



// https://www.koderhq.com/tutorial/vue/http-axios/