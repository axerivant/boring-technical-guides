<script lang="ts">
	import { page } from '$app/stores'
	import { marked } from 'marked'
	import sample from './sample'

	const guideID = $page.params.guideID
	//	const guide = $results.find((g) => g.id === guideID)
	const parsed = marked.parse(sample)
	const domParser = new DOMParser()
	const html = domParser.parseFromString(parsed, 'text/html')
	const headings = Array.from(html.getElementsByTagName('h2')).map((el) => {
		return { content: el.innerText, id: el.id }
	})
</script>

<main class="top-0 left-0 gap-3 ">
	<div
		class="flex flex-col gap-3 w-3/12 border-r border-accent-400/5 p-12 sticky top-0"
	>
		{#each headings as { content, id }}
			<a
				class="text-accent-400/40 hover:text-accent-400 text-sm"
				href="#{id}">{content}</a
			>
		{/each}
	</div>
	<div class="w-full flex justify-center p-12">
		<div class="flex flex-col gap-6 w-8/12">
			{@html parsed}
		</div>
	</div>
</main>

<style>
	main {
		@apply w-full min-h-screen flex;
	}
</style>
