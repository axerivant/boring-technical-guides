import { writable, type Writable } from 'svelte/store'

export const dummyResults: SearchResult[] = [
	{
		id: crypto.randomUUID(),
		title: 'JavaScript Promises',
		brief: 'A general guide to using JS promises, in the client and on the web.',
		author: 'Axer Ivant'
	},
	{
		id: crypto.randomUUID(),
		title: 'jQuery Basics',
		brief: 'A general guide to using jQuery, from fundamentals to advanced techniques.',
		author: 'Ramya Sin'
	},
	{
		id: crypto.randomUUID(),
		title: 'Object-Oriented JavaScript',
		brief: 'A guide to building object-oriented code in the JavaScript language.',
		author: 'Kai Tyler'
	},
	{
		id: crypto.randomUUID(),
		title: 'React Components',
		brief: 'Understanding and building components in React.js.',
		author: 'Cora Rios'
	},
	{
		id: crypto.randomUUID(),
		title: 'AJAX Requests',
		brief: 'An introductory guide to making AJAX requests and fetching data.',
		author: 'Fei Yang'
	},
	{
		id: crypto.randomUUID(),
		title: 'Data Structures',
		brief: 'An overview of the different data structures available in JavaScript.',
		author: 'Toby Prescott'
	},
	{
		id: crypto.randomUUID(),
		title: 'Node.js Basics',
		brief: 'A guide to getting started with Node.js and server-side development.',
		author: 'Bart Holden'
	},
	{
		id: crypto.randomUUID(),
		title: 'Object-Oriented Design',
		brief: 'An introduction to the concepts of object-oriented design.',
		author: 'Yolanda Ortega'
	},
	{
		id: crypto.randomUUID(),
		title: 'ES6 Features',
		brief: 'An introduction to the features of the modern JavaScript language.',
		author: 'Jamal Johnson'
	},
	{
		id: crypto.randomUUID(),
		title: 'Debugging JavaScript',
		brief: 'A guide to troubleshooting and debugging code in JavaScript.',
		author: 'Kirk Mann'
	},
	{
		id: crypto.randomUUID(),
		title: 'CSS Animations',
		brief: 'An introduction to creating animations and transitions with CSS.',
		author: 'Dalia Ramos'
	}
]

const results: Writable<SearchResult[]> = writable(dummyResults)
export default results
