import { createJournalEntry, getAllEntry, getSingleEntry, deleteSingleEntry, updateEntry} from '@/services/journal.service';
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
    },
  async fetchAllEntry() {
        await getAllEntry()
        .then((response) => {
            console.log('All Entry data')
            console.log(response);
            this.Journal = response.data.map(entry => {
                return {
                    id: entry[0],
                    Title: entry[1],   
                    content:entry[2],
                    clientId: entry[3],
                    // Date: item[4],
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
            this.singleEntry = {
                    id: item[0],
                    clientId: item[1],
                    Title:  item[2],   
                    content: item[3],
                    Date: item[4],
            }
        })
        .catch((err) => {
            this.singleEntry = {}
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