<script lang="ts">
	export let label: string
	export let isDisabled: boolean = false
</script>

<button disabled={isDisabled} type="submit">{label}</button>

<style>
	button {
		@apply bg-accent-400 p-3 py-3 rounded-sm font-medium transition-all brightness-95 outline-none select-none;
	}
	button:active {
		@apply translate-y-2;
	}
	button:hover {
		@apply brightness-110;
	}
	button:disabled {
		@apply brightness-50 pointer-events-none;
	}
</style>
