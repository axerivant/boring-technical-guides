<script lang="ts">
	import Header from './Header.svelte'
	import SearchBox from './SearchBox.svelte'
	import SearchResults from './SearchResults.svelte'
</script>

<main class="flex flex-col gap-24">
	<Header />
	<div class=" flex flex-col gap-12">
		<SearchBox />
		<SearchResults />
	</div>
</main>
