# Svelte Society Utilities

A library of utilities, actions, components and stores for your Svelte projects

## Usage

### Stores

#### periodicFetch

This custom store will re-fetch from a URL every N (default 5000ms) seconds. Pass in `url` and `time`.
```svelte
<script lang="ts">
	import periodicFetch from '$lib/stores/periodicFetch'
	
	let url = "https://www.swapi.tech/api/people/";
	
	type Person = {
		uid: String,
		name: String,
		url: String
	}
	
	type People = {
		message: String,
		total_records: Number,
		total_pages: Number,
		previous: String | null,
		next: String,
		results: Array<Person>
	}
	
	const starWarsPeople = periodicFetch(url)
</script>

<h1>Svelte Society Utilities</h1>
<h2>Periodic Fetch</h2>
<pre>{JSON.stringify($starWarsPeople, undefined, 2)}</pre>
```