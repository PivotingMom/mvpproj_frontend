<template>
  <div>
    <!-- input form to collect a to-buy item -->
    <form @submit.prevent="addItemAndClear(tobuy)">
      <input v-model="tobuy" type="text" /><button>Add</button>
      <div class="alert-div">
        <!-- input v-model="tobuy" connects to a ref in the script below to make this property reactive so it updates as the user writes the item into the input -->
        <div v-show="store.showAlert" class="alert">
          Please type something...
        </div>
      </div>
    </form>
  </div>
</template>

<script>

// before the submit button can trigger  add function  to the tobuy list, I had to somehow invoke the addTobuy action in the store. To use a Pinia store in a component, I needed to import the store and then set a const store to the invoked store function.
const store = useShoppingListStore()
// this "const store" gave me access to state, actions, and getters in the store

// this next function will do two things:  add an item to tobuyList array in the store aand also resets the tobuy ref to being an empty string after item is added to the list.
// triggers function in the store & is added to line 4 above form's @submit event listener in the template
import { ref, } from "vue";
import { useShoppingListStore } from "@/store/shoppinglist";

export default ({
    setup() {
      const tobuy = ref("");
      
      const store = useShoppingListStore()

    function addItemAndClear(item) {
      if (item.length === 0) {
        return;
      }
      store.addTobuy(item) 
      tobuy.value = '';
    }
    return { tobuy, addItemAndClear };
  },
});

    
</script>

<style scoped>
form {
  margin-bottom: 15px;
}

input {
  margin-top: 25px;
  margin-bottom: 15px;
  height: 20px;
  width: 50%;
}

button {
  margin-left: 30px;
  background-color: #2f6089;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  color: white;
  width: 15%;
}

.alert-div {
  min-height: 25px;
}

.alert {
  color: #d1495b;
  font-size: 1em;
  font-weight: 600;
}
</style>
