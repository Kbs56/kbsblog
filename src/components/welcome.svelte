<script lang="ts">
	import { onMount } from 'svelte';

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
		}
	};

	const typing = () =>
		setInterval(
			() =>
				typeChars(() => {
					subTypeWriter = subTyping();
				}),
			100
		);

	const subTyping = () => setInterval(typeSubChars, 60);

	onMount(() => {
		typeWriter = typing();
	});
</script>

<div class="bg-red flex flex-col pt-56">
	<h1 class="font-mono text-6xl flex justify-center mb-8">{typedChars}</h1>
	<h1 class="font-mono text-2xl flex justify-center">{subTypedChars}</h1>
</div>
