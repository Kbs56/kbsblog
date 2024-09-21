<script>
	import { Download, FileText } from 'lucide-svelte';
	import { GithubIcon } from 'lucide-svelte';
	import { page } from '$app/stores';
</script>

<nav>
	<div class="navbar bg-base-100">
		<div class="flex-1">
			<a class="btn btn-ghost text-xl" href="/">ksheldon.tech</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				{#if $page.url.pathname === '/resume'}
					<li>
						<a href="path to pdf" download="KennethSheldonResume">Download My Resume<Download /></a>
					</li>
				{/if}
				<li><a href="/resume">Resume<FileText /></a></li>
				<li><a href="https://github.com/Kbs56" target="_blank">Github<GithubIcon /></a></li>
			</ul>
		</div>
	</div>
</nav>
