<template>
  <div class="container">
    <h4 class="mt-4">My Journal Entry</h4>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Entry Title</th>
            <th scope="col">Content</th>
            <th scope="col"> Date</th>
          </tr>
        </thead>
        <tbody v-for="(entry, index) in entry" :key="entry.id">
          <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ entry.Title }}</td>
            <td>{{ entry.content}}</td>
            <td>{{ entry.created_at }}</td>
            
            <td>
              <button class="btn btn-success edit-btn" @click="editEntry(entry.id)">Edit</button>
              <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"
                @click="promptDelete(entry.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="arrow bounce" v-if="windowWidth < 960">
        <i class="bi-arrow-right"></i>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Delete Entry</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete entry?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
            <button type="button" class="btn btn-danger" @click="deleteEntry">Yes</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


  <script>
  import "bootstrap-icons/font/bootstrap-icons.css"
  import { defineComponent } from 'vue'
  import { useJournalStore } from '@/store/journal' 
  import { useRouter } from "vue-router"
  var entryId = null
  
  export default defineComponent({
    data() {
      return {
        windowWidth: window.innerWidth,
      }
    },
  
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize)
      })
    },
  
    methods: {
      onResize() {
        this.windowWidth = window.innerWidth
      }
    },
  
    async setup() {
      const journalStore = useJournalStore();
      const router = useRouter()

      function editEntry(id) {
        this.$router.push(`/edit-entry/${id}`);
      }
  
      function promptDelete(id) {
        entryId = id
      }
  
      function deleteEntry() {
        journalStore.deleteSelectedEntry(entryId)
      }

      console.log(router.query)
  
      await journalStore.fetchAllEntry();
      console.log(journalStore.allEntries)

  
      return {
        journalStore,
        entry: journalStore.allEntries,
        editEntry,
        promptDelete,
        deleteEntry
      }
    },
  })
  </script>

  <style scoped>
  .edit-btn {
    margin-right: 2%;
  }
  
  .bi-arrow-right {
    float: right;
    font-size: 30px;
  }
  
  .arrow {
    text-align: center;
    margin: 8% 0;
  }
  
  .bounce {
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
  
    0%,
    20%,
    40%,
    60%,
    80%,
    100% {
      transform: translateX(0);
    }
  
    40% {
      transform: translateX(-30px);
    }
  
    60% {
      transform: translateX(-15px);
    }
  }
  </style>
