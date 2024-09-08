<script lang="ts">
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';
	import BlogCard from './blogCard.svelte';

	let animate = !$navigating;
	let loaded = false;
	let animating = true;

	let phrase = 'ksheldon.tech';
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
		<div class="flex flex-col mt-12 md:mt-36 h-auto pb-8 md:pb-16 sm:pb-2 px-2">
			<h1 class="font-mono text-4xl md:text-6xl text-center mb-4 md:mb-8">{typedChars}</h1>
			<h2 class="font-mono text-xl md:text-2xl text-center">{subTypedChars}</h2>
		</div>
		<div class="flex flex-col md:flex-row justify-center items-center gap-4">
			{#if animating}
				<progress class="progress w-40 md:w-56"></progress>
			{:else}
				<a role="button" class="btn btn-wide" href="/about">About Me</a>
				<a role="button" class="btn btn-wide" href="/blog">Blog</a>
			{/if}
		</div>
		{#if !animating}
			<div class="container mx-auto mt-8 md:mt-12">
				<div
					class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center px-4 pb-4"
				>
					<BlogCard
						title={'This is a title'}
						summary={'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description'}
					/>
					<BlogCard title={'This is a title'} summary={'This is a description'} />
					<BlogCard title={'This is a title'} summary={'This is a description'} />
					<BlogCard title={'This is a title'} summary={'This is a description'} />
					<BlogCard title={'This is a title'} summary={'This is a description'} />
					<BlogCard title={'This is a title'} summary={'This is a description'} />
					<BlogCard title={'This is a title'} summary={'This is a description'} />
					<BlogCard title={'This is a title'} summary={'This is a description'} />
				</div>
			</div>
		{/if}
	{/if}
{:else}
	<div class="flex flex-col mt-12 md:mt-36 h-auto pb-8 md:pb-16 sm:pb-2 px-2">
		<h1 class="font-mono text-4xl md:text-6xl text-center mb-4 md:mb-8">ksheldon.tech</h1>
		<h2 class="font-mono text-xl md:text-2xl text-center">
			A blog, portfolio, and knowledge sharing site.
		</h2>
	</div>
	<div class="flex flex-col md:flex-row justify-center items-center gap-4">
		<a role="button" class="btn btn-wide" href="/about">About Me</a>
		<a role="button" class="btn btn-wide" href="/blog">Blog</a>
	</div>
	<div class="container mx-auto mt-8 md:mt-12">
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center px-4 pb-4"
		>
			<BlogCard
				title={'This is a title'}
				summary={'This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description This is a description'}
			/>
			<BlogCard title={'This is a title'} summary={'This is a description'} />
			<BlogCard title={'This is a title'} summary={'This is a description'} />
			<BlogCard title={'This is a title'} summary={'This is a description'} />
			<BlogCard title={'This is a title'} summary={'This is a description'} />
			<BlogCard title={'This is a title'} summary={'This is a description'} />
			<BlogCard title={'This is a title'} summary={'This is a description'} />
			<BlogCard title={'This is a title'} summary={'This is a description'} />
		</div>
	</div>
{/if}
