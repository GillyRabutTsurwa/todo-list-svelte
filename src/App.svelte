<script>
	import Header from "./components/Header.svelte";
</script>

<style type="text/scss">
	$color-primary: #009579;
	.container {
		width: 50rem;
		background-color: $color-primary;
	}

	// I put font definition in global.css
	// :global(.container *) {

	// }

	// h1 {
	// 	color: $color;
	// 	text-transform: uppercase;
	// 	font-size: 4em;
	// 	font-weight: 100;
	// }
</style>

<!-- <main> -->
<div class="container">
	<Header />
	sample text
</div>
<!-- </main> -->
