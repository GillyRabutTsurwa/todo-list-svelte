<script>
    import { onMount } from "svelte";
    import ListStore from "../store/ListStore";
    import TodoAPI from "../API/todoAPI";

    const handleNewItem = (e) => {};
    const handleUpdate = (e) => {};
    const handleDelete = (e) => {};

    onMount(async () => {
        // fetch todo lists from API
        $ListStore = await TodoAPI.getAllTodos();
        console.log($ListStore);
    });
</script>

<p>I am the list item (or will be anyways)</p>
