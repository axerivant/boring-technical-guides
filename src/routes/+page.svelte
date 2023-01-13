<script lang="ts">
	import { enlistAuthStateListener } from '@/backend/firebase/auth'
	import Header from './Header.svelte'
	import SearchBox from './SearchBox.svelte'
	import SearchResults from './SearchResults.svelte'

	// enlist local auth state change listener
	enlistAuthStateListener()
</script>

<main class="flex flex-col gap-24">
	<Header />
	<div class=" flex flex-col gap-12">
		<SearchBox />
		<SearchResults />
	</div>
</main>
