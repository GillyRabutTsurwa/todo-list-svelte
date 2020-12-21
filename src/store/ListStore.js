import { writable } from "svelte/store";

//our store will have an array by default. an array of objects
const ListStore = writable([
  // removed the placeholder list of todos
]);

export default ListStore;
