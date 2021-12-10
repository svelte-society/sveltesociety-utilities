<script lang="ts">
	import periodicFetch from '$lib/store/periodicFetch'
	
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