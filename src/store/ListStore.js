import { writable } from "svelte/store";

//our store will have an array by default. an array of objects
const ListStore = writable([
  {
    id: 1,
    text: "Take out the rubbish",
    completed: true,
  },
  {
    id: 2,
    text: "Polish up Nuxt Portfolio",
    completed: false,
  },
]);

export default ListStore;
