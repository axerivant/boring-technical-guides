<script lang="ts">
	import results from '@/store/search'
</script>

<div class="flex flex-wrap gap-6 w-10/12 cursor-pointer">
	{#each $results as result}
		<a
			href="/read/{result.id}"
			class="aspect-video h-48 bg-base-700 p-6 rounded-sm flex flex-col justify-between hover:brightness-110 transition-all text-left"
		>
			<div class="flex flex-col gap-3">
				<p class="text-lg font-medium text-accent-400">
					{result.title}
				</p>
				<p class="text-base-500">{result.brief}</p>
			</div>
			<p class="text-base-500/60">{result.author}</p>
		</a>
	{/each}
</div>
