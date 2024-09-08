<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let link;
	export let title;
	export let summary;
	export let date;
</script>

<div
	class="min-w-72 min-h-72 rounded-xl border border-slate-400 bg-none hover:bg-black/10 relative"
	role="button"
	tabindex="0"
	on:keydown={() => console.log('Hello')}
	on:click={() => console.log('Hello')}
>
	<div class="pl-4 pt-4 text-3xl"><a href="/{link}">{title}</a></div>
	<div class="pt-6 px-4 pb-4">{formatDate(date)}</div>
	<div class="pt-6 px-4 pb-4">{summary}</div>
	<div class="p-2 absolute bottom-0 right-0">
		<a role="button" class="btn btn-outline btn-sm" href="/blog">Read</a>
	</div>
</div>
