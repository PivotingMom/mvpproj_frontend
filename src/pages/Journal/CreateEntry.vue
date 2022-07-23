<!--contains a parent container, a header a  form element for with an input field, router link helps with navigation, button element with special class attributes bindings, a v-model attribute that provides  2-way data binding for our reactive references , the v-model attribute- makes it easier to bind reactive data to a form input so that whether the data is modified by the user via the input or by the code the data always in sync. I added the v-model here to help access the value of the input from within our application specifically within the script section of the vue application so that it can then be added to our array of items.  ---->
<template>
  <div class="container">
    <div class="form-content-area mt-4">
      <h4>Create a new note</h4>
      <p>Want to view past entries, <router-link to="/my-entry">Click here</router-link>
      </p>
      <form>
        <div class="form-group mb-4">
          <label for="Title">Entry Title:</label>
<!-- by creating a new reactive ref, called currentEntry & initializing it to an empty string,
currentEntry=ref('') store & adding v-model to our input and assiging a value of currentEntry, a 2-way data binding was established btw the store and the input form, that way they always stay in-sync-->
          <input type="entrytext" class="form-control" v-model="journalStore.currentEntry.Title"
            placeholder="Enter Title">
        </div>
        <div class="form-group mb-4">
          <label for="Content">Content:</label>
          <input type="text" class="form-control" v-model="journalStore.currentEntry.content" placeholder="Create Note">
<!--btn wrapped in a div, below I'm listening to the click event using the v-on click  directive, that gets triggered when a user presses the button -SAVE, looks like this v-on: click=Entry.push({{id: Entry.lenght +1 (generates a new id), label: currentEntry}}), .prevent modifier prevents the default page/window  refresh setting. @submit event lets us use both our enter key and aded benefit of on:click -->
        </div>
        <div class="form-group">
          <button class="btn btn-success" @click.prevent="createNote">SAVE</button>
<!-- encapsulating click=Entry.push()into a function -createNote , I then called the method in the script below on the submit event, parathese are optional when you are calling a method on events like this in vue-->
        </div>
      </form>
    </div>
  </div>
</template>

<!-- to enable the createNote function above, I had to  invoke the saveNote action in the store & To use a Pinia store in a component, I needed to import the store and then set a const store to the invoked store function.this "const journalStore" gave me access to state,&  actions in the store  -->
<script>
import { useJournalStore } from '@/store/journal'
// setup because its composition API
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

<!-- // to be able to access the value of a kind of reactive reference I needed to use a special property named this.value, because vue uses proxies in other to create reactive data entrys.value.push({id:entry.this.value.lenght + 1, label: currentEntry.this.value}) whenever you call a ref function what is returned is a reactive object with the actual data stored on the value property. -->