import { defineStore } from 'pinia';
import { createJournalEntry, getAllEntry, getSingleEntry, deleteSingleEntry, updateEntry} from '@/services/journal.service';
import { useAuthStore } from './auth';


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
/* to ensure an old item doesnt stick around in our input after saveNote method/action has been completed we reset our addNewitem function,to do ensure this I  pass an empty string in this case the state.value */

      createJournalEntry(payload).then(response => {
        console.log(response);
      });
    },
   // // here action is async, then I await the dynamic import of the JSON instead of static & needs to be access under a .default property as the dynamic import returns the JSON under a dafault key
  async fetchAllEntry() {
   // Call getAllEntry() journal service, then set all entries in journal store state with response data array
        await getAllEntry()
        .then((response) => {
            console.log('All Entry data')
            console.log(response);
            // map items' properties from db tuples
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
            this.allEntries = []
        })
    },
    async deleteSelectedEntry(entryId) {
        await deleteSingleEntry(entryId)
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
    async fetchSingleEntry(entryId) {
        await getSingleEntry(entryId)
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
    async update_entry(entryId, payload) {
        await updateEntry(entryId, payload)
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
  }
})

/* import { DOMErrorCodes } from '@vue/compiler-dom';
// //i saw this in a video travesy media on youtube for JS DOM manipulation where the guy  had added this library to help handle errors. 
import { keyFor } from 'core-js/fn/symbol';
// /* keyFor() is an inbuilt function in JS which is used to retrieve the key which has been shared with the given symbols and this key is retrieved from the global symbol registry. Syntax: Symbol  but never used it */ 

