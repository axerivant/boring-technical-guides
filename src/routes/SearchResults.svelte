<script lang="ts">
	const results: SearchResult[] = [
		{
			title: 'JavaScript Promises',
			brief: 'A general guide to using JS promises, in the client and on the web.',
			author: 'Axer Ivant'
		},
		{
			title: 'jQuery Basics',
			brief: 'A general guide to using jQuery, from fundamentals to advanced techniques.',
			author: 'Ramya Sin'
		},
		{
			title: 'Object-Oriented JavaScript',
			brief: 'A guide to building object-oriented code in the JavaScript language.',
			author: 'Kai Tyler'
		},
		{
			title: 'React Components',
			brief: 'Understanding and building components in React.js.',
			author: 'Cora Rios'
		},
		{
			title: 'AJAX Requests',
			brief: 'An introductory guide to making AJAX requests and fetching data.',
			author: 'Fei Yang'
		},
		{
			title: 'Data Structures',
			brief: 'An overview of the different data structures available in JavaScript.',
			author: 'Toby Prescott'
		},
		{
			title: 'Node.js Basics',
			brief: 'A guide to getting started with Node.js and server-side development.',
			author: 'Bart Holden'
		},
		{
			title: 'Object-Oriented Design',
			brief: 'An introduction to the concepts of object-oriented design.',
			author: 'Yolanda Ortega'
		},
		{
			title: 'ES6 Features',
			brief: 'An introduction to the features of the modern JavaScript language.',
			author: 'Jamal Johnson'
		},
		{
			title: 'Debugging JavaScript',
			brief: 'A guide to troubleshooting and debugging code in JavaScript.',
			author: 'Kirk Mann'
		},
		{
			title: 'CSS Animations',
			brief: 'An introduction to creating animations and transitions with CSS.',
			author: 'Dalia Ramos'
		}
	]
</script>

<div class="flex flex-wrap gap-6 w-10/12 cursor-pointer">
	{#each results as result}
		<button
			class="aspect-video h-48 bg-base-700 p-6 rounded-sm flex flex-col justify-between hover:brightness-110 transition-all text-left"
		>
			<div class="flex flex-col gap-3">
				<p class="text-lg font-medium text-accent-400">
					{result.title}
				</p>
				<p class="text-base-500">{result.brief}</p>
			</div>
			<p class="text-base-500/60">{result.author}</p>
		</button>
	{/each}
</div>
