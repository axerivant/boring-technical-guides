<script lang="ts">
	import { page } from '$app/stores'
	import results from '@/store/search'
	import { marked } from 'marked'
	import sample from './sample'

	const guideID = $page.params.guideID
	const guide = $results.find((g) => g.id === guideID)

	const parsed = marked.parse(sample)
</script>

<div>
	{@html parsed}
</div>

<style>
	div {
		@apply flex flex-col gap-6;
	}
</style>
