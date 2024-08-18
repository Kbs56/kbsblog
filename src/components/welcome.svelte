<script lang="ts">
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';

	let animate = !$navigating;
	let loaded = false;
	let animating = true;

	let phrase = 'Welcome to ksheldon.dev';
	let typedChars = '';
	let index = 0;
	let typeWriter: number;

	let subPhrase = 'A blog, portfolio, and knowledge sharing site.';
	let subTypedChars = '';
	let subIndex = 0;
	let subTypeWriter: number;

	const typeChars = (callback: () => void) => {
		if (index < phrase.length) {
			typedChars += phrase[index];
			index += 1;
		} else {
			clearInterval(typeWriter);
			if (callback) callback();
		}
	};

	const typeSubChars = () => {
		if (subIndex < subPhrase.length) {
			subTypedChars += subPhrase[subIndex];
			subIndex += 1;
		} else {
			clearInterval(subTypeWriter);
			animating = false;
		}
	};

	const typing = () =>
		setInterval(
			() =>
				typeChars(() => {
					subTypeWriter = subTyping();
				}),
			80
		);

	const subTyping = () => setInterval(typeSubChars, 60);

	onMount(() => {
		typeWriter = typing();
		loaded = true;
	});
</script>

{#if animate}
	{#if loaded}
		<div class="flex flex-col mt-36 h-auto pb-16">
			<h1 class="font-mono text-6xl flex justify-center mb-8">{typedChars}</h1>
			<h1 class="font-mono text-2xl flex justify-center">{subTypedChars}</h1>
		</div>
		<div class="flex justify-center gap-6">
			{#if animating}
				<progress class="progress w-56"></progress>
			{:else}
				<a role="button" class="btn btn-wide" href="/about">About Me</a>
				<a role="button" class="btn btn-wide" href="/">Blog</a>
			{/if}
		</div>
	{/if}
{:else}
	<div class="flex flex-col mt-36 pb-16 h-auto">
		<h1 class="font-mono text-6xl flex justify-center mb-8">Welcome to ksheldon.dev</h1>
		<h1 class="font-mono text-2xl flex justify-center">
			A blog, portfolio, and knowledge sharing site.
		</h1>
	</div>
	<div class="flex justify-center gap-6">
		<a role="button" class="btn btn-wide" href="/about">About Me</a>
		<a role="button" class="btn btn-wide" href="/">Blog</a>
	</div>
{/if}
