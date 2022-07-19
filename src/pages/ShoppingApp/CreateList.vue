<template>
  <div class="shoppinglist-app">
    <h1>Shopping App</h1>
    <ShoppingForm />
    <ShoppingList />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {ShoppingForm} from "@/components/ShoppingList/ShoppingForm.vue";
import {ShoppingList} from "@/components/ShoppingList/ShoppingList.vue";

export default defineComponent({
  name: "ShoppingListApp",

  components: {
      ShoppingForm,
      ShoppingList
      },

  setup() {
    return {};
  },
});
</script>


<style scoped>
.shoppinglist-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
}
</style>