<template>
  <div v-for="tobuy in tobuyList" :key="tobuy.id">
    <div>
      <span :class="{bought: tobuy.bought }">{{ tobuy.item }}</span>
      <span @click.stop="toggleBought(tobuy.id)">&#10004;</span>
      <span @click="deleteTobuy(tobuy.id)" class="x">&#10060;</span>
        <!-- a checkmark emoji as an event listener to listen for a click on the checkmark -->
      </div>
    </div>
</template>

<!-- I want to use store properties (each tobuy item that will be displayed on the tobuy shopping list component will come from the store) and to be able to do that while keeping its reactivity I need to use storeToRefs(),a helper method to destructure the returned object without losing reactivity.it will create refs for every reactive property https://pinia.vuejs.org/core-concepts/#using-the-store-->

<!-- to access to the tobuyList that's in the store (which will have the data to represent the items  added to the list), so in the shopping List.vue component I brought in the store, just like I did in shopping Form.vue. I also set const store to the invoked store function.

Then I had to wrap the todoList property that I want to pull from the store in the function storeToRefs -->
<!-- // toggleBought is an action method that will be destructured https://javascript.info/destructuring-assignment and not a reactive state property hence doesn't require using storeToRefs -->

<script>
import { useShoppingListStore } from "@/store/shoppinglist";
import { storeToRefs } from "pinia";
export default ({
  setup() {
    const store = useShoppingListStore();

    const { tobuyList } = storeToRefs(store);
    const { toggleBought, deleteTobuy } = store;

    return { tobuyList,
      toggleBought, 
      deleteTobuy 
      };
  },
});
</script>

<style>
span {
  margin: 0 10px;
  cursor: pointer;
}

.bought {
  text-decoration: line-through;
}

/* .list {
  display: flex;
  justify-content: center;
}

.item {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px; */

</style>