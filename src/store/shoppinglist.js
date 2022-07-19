import { defineStore } from 'pinia';
// import {createNewList, getAllLists, deleteSingleList, getSingleList, updatelist } from '../services/shoppinglistservice';


export const useShoppingListStore = defineStore("shoppinglist", {
  state: () => ({
    tobuyList: [],
    id: 0
  }),
  actions: {
// in order to be able to add an item to the list. i wrote a add function
// i also need to delete item from the list so i wrote a delete function
// I need the logic to toggle an item added to the list as bought or not bought, The default state is set to false.
// line 16 will add to the list any item idnetified with id as parameter, and id to keep increading by plus 1
// line 21 will filter through the array specified in the call back function and return the element that meets the condition specified
// line 25 when the toggle bought function is evoked, and obj is on the to buy list,will also find the obj in the array where the predicate condition is true and return this or otherwise undefined
    addTobuy(item){
      this.tobuyList.push({item, id: this.id++, bought: false })
    },

    deleteTobuy(itemID){
      this.tobuyList = this.tobuyList.filter((object) => {
        return object.id !==itemID;
      });
    },
    toggleBought(idToFind) {
      const tobuy = this.tobuyList.find((obj) => obj.id === idToFind);
      if (tobuy) {
        tobuy.bought = !tobuy.bought;
      }
    },
  },
})

