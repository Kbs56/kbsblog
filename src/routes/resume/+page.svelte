<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="text-center mb-4">
	<button class="btn" on:click={() => console.log('Download')}>Download a Copy!</button>
</div>

<article>
	<div class="prose py-4 px-4">
		<hgroup>
			<h1>{data.meta.title}</h1>
		</hgroup>

		<div>
			<svelte:component this={data.content} />
		</div>
	</div>
</article>
