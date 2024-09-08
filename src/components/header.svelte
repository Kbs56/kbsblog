<script>
	import { FileText } from 'lucide-svelte';
	import { GithubIcon } from 'lucide-svelte';
</script>

<nav>
	<div class="navbar bg-base-100">
		<div class="flex-1">
			<a class="btn btn-ghost text-xl" href="/">ksheldon.tech</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/resume">Resume<FileText /></a></li>
				<li><a href="https://github.com/Kbs56" target="_blank">Github<GithubIcon /></a></li>
			</ul>
		</div>
	</div>
</nav>
