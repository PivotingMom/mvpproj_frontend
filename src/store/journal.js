import { defineStore } from 'pinia';
import { createJournalEntry, getAllEntry, getSingleEntry, deleteSingleEntry, updateEntry} from '@/services/journal.service';
import { useAuthStore } from './auth';
// import { DOMErrorCodes } from '@vue/compiler-dom';
// //i saw this in a video travesy media on youtube for JS DOM manipulation where the guy  had added this library to help handle errors. 
// import { keyFor } from 'core-js/fn/symbol';
// /* keyFor() is an inbuilt function in JS which is used to retrieve the key which has been shared with the given symbols and this key is retrieved from the global symbol registry. Syntax: Symbol  but never used it */

/* first I define the pinia store as per doc, the v-model helps to transmit the input to the store state and return object based on corresponding data key, while the 'this' will help to access the data property of the created object inside each callback functions*/
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
      //captures the local date and time of user and transmits into DB) 
      }
/* to ensure an old item doesnt stick around in in oue input after saveNote method/action has been completed we reset our addNewitem function,to do ensure this I  pass an empty string in this case the state.value */

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



