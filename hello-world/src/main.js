import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Eduardo',
		lastName: 'Flores'

	}
});

export default app;
