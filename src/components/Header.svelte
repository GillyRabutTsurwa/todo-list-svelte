<script>
    // importing the store data
    import ListStore from "../store/ListStore";
    let listOfItems = $ListStore;

    $: totalItemCount = listOfItems.length;
    $: completedItemCount = listOfItems.filter(
        (currentList) => currentList.completed
    ).length;
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem;
        color: #fff;
        font-weight: bold;
        font-size: 2.75rem;
        background-color: rgba(0, 0, 0, 0.1);
    }
</style>

<header class="header">
    <span>Gilbert's To-Do List</span>
    <span>{completedItemCount}/{totalItemCount}</span>
</header>
