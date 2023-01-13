<script lang="ts">
	export let name: string
	export let label: string
	export let type: 'text' | 'password' | 'email' = 'text'

	const fieldID = `field-${name}`
</script>

<div class="w-full">
	<input id={fieldID} {type} placeholder={label} {name} />
	<!-- <label for={fieldID}>{label}</label> /-->
</div>

<style>
	input {
		@apply bg-accent-400/5 border border-accent-400/20 rounded-sm p-3 transition-all outline-none text-accent-400 w-full;
	}
	input::placeholder {
		@apply text-accent-400/40 font-light;
	}
	input:focus {
		@apply bg-accent-400/10 border border-accent-400/80;
	}
</style>
