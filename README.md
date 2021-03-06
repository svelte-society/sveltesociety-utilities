# Svelte Society Utilities

A library of utilities, actions, components and stores for your Svelte projects

## Usage

### Stores

#### periodicFetch

This custom store will re-fetch from a URL every N (default 5000ms) seconds. Pass in `url` and `time`.
```svelte
<script>
	import { periodicFetch } from 'sveltesociety/store'
	const url = "https://www.swapi.tech/api/people/";
	
	const starWarsPeople = periodicFetch(url)
</script>

<pre>{JSON.stringify($starWarsPeople, undefined, 2)}</pre>
```

[REPL Example](https://svelte.dev/repl/c491ee1fd52c401baf9fe1fa5e6e3adc?version=3.44.2)