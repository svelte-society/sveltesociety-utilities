# Svelte Society Utilities

A library of utilities, actions, components and stores for your Svelte projects

## Usage

### Stores

#### periodicFetch

This custom store will re-fetch from a URL every N (default 5000ms) seconds. Pass in `url` and `time`.
```svelte
<script>
	import periodicFetch from '$lib/stores/periodicFetch'
	const url = "https://www.swapi.tech/api/people/";
	
	const starWarsPeople = periodicFetch(url)
</script>

<pre>{JSON.stringify($starWarsPeople, undefined, 2)}</pre>
```

(REPL Example)[]