import { Writable, writable } from 'svelte/store';

type Content<T> = {
	data: T;
	status: 'done' | 'loading' | 'error';
	message: String;
};

type PeriodicFetchStore<T> = {
	subscribe: Writable<Content<T>>['subscribe'];
};

function periodicFetch<Payload>(url: string, interval: number = 5000): PeriodicFetchStore<Payload> {
	let intervalId;
	const { update, subscribe } = writable({ status: 'loading' }, () => {
		return () => {
			clearInterval(intervalId);
		};
	});

	function initiate(): void {
		if (!intervalId) {
			intervalId = setInterval(async () => {
				update((current) => ({ ...current, status: 'loading' }));
				const response = await fetch(url);
				const data = await response.json()
				update((current) => ({ ...current, status: 'done' }));
			}, interval);
		}
	}

	try {
		initiate();
	} catch (error) {
		update((current) => ({ ...current, status: 'error', message: error }));
	}

	return {
		subscribe
	};
}

export default periodicFetch;
