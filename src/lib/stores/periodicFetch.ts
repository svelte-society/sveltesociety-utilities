import { type Writable, writable } from 'svelte/store';

type Content<T> = {
	data: T;
	status: 'done' | 'loading' | 'error';
	message: String?;
};

type PeriodicFetchStore<T> = {
	subscribe: Writable<Content<T>>['subscribe'];
};

function periodicFetch(url: string, interval: number = 5000): PeriodicFetchStore<T> {
	let intervalId;
	const { set, update, subscribe } = writable({ status: 'loading' }, () => {
		return () => {
			clearInterval(intervalId);
		};
	});

	function initiate(): void {
		if (!intervalId) {
			intervalId = setInterval(async () => {
				update((current) => ({ ...current, status: 'loading' }));
				const response = await fetch(url);
				set({ data: await response.json(), status: 'done', message: undefined });
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
