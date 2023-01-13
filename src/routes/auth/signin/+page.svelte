<script lang="ts">
	import { FieldText, Submit } from '@/ui/form'
	import { createForm } from 'felte'
	import { signInUser } from '@B/api'
	import { goto } from '$app/navigation'

	let isEmailValid: boolean = false
	let isPasswordValid: boolean = false
	$: isSubmissionEnabled = !(isEmailValid && isPasswordValid)

	let error: boolean
	const handleSubmit = async (email: string, password: string) => {
		try {
			const user = await signInUser(email, password)
			goto('/')
		} catch (err) {
			error = true
		}
	}

	const { form } = createForm({
		validate: (values) => {
			if (Object.keys(values).length === 0) return
			if (
				values.email &&
				/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(values.email)
			) {
				isEmailValid = true
			} else isEmailValid = false

			if (values.password && values.password.length > 8) {
				isPasswordValid = true
			} else isPasswordValid = false
		},
		onSubmit: async ({ email, password }) => {
			// console.log('SUBMIT:  ', {email, password})
			handleSubmit(email, password)
		}
	})
</script>

<main class="flex flex-col gap-24 w-full">
	<h1>Sign back in to continue reading boring technical guides.</h1>
	<form class="flex flex-col gap-6 w-4/12 min-h-[30rem]" use:form>
		<div class="flex flex-col gap-3">
			<FieldText name="email" type="email" label="email address" />
			<FieldText name="password" type="password" label="password" />
		</div>
		<p class="text-accent-400/40">
			You have already agreed to our imaginary terms of service.
		</p>
		{#if error}
			<div class="text-red-400">Unkown error occured.</div>
		{/if}
		<Submit label="sign in" isDisabled={isSubmissionEnabled} />
	</form>
</main>
