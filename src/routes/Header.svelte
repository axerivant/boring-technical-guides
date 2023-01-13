<script lang="ts">
	import user from '@/store/user'
	import { LinkButton } from '@/ui'
</script>

<header class="flex justify-between items-start">
	<div class="flex flex-col gap-6">
		<h1>no-nonsense technical guides.</h1>
		<h2 class="w-8/12">
			concise, specific and practical knowledge for software engineers.
		</h2>
	</div>
	{#if $user}
		<div class="text-accent-400">{$user.email}</div>
	{:else}
		<LinkButton href="/auth/signup" label="create a guide" />
	{/if}
</header>
