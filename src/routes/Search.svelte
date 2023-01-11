<script lang="ts">
	let isFocused = false
</script>

<div
	class="flex gap-3 border-b border-base-500 w-96 pb-4 transition-all
        {isFocused && 'brightness-125'}"
>
	<img src="/search.svg" alt="" width="30" />
	<input
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
		class="bg-transparent outline-none text-white/80 placeholder:text-base-500"
		type="text"
		placeholder="search by technology"
	/>
</div>
