<script>
	let students = [];
	import { onMount } from 'svelte';
	import Os from '../../lib/Components/Os.svelte';
	async function getD() {
		let fetchh = await fetch('./os/jsonLoad.json');
		let res = await fetchh.json();
		students = res;
		console.log(res[0]);
	}
	onMount(() => {
		getD();
	});
</script>

<body class="bg-[#0E0D0D] text-slate-300">
	<h1
		id="heading"
		class="font-outfit font-semibold text-4xl leading-140 text-transparent bg-gradient-to-r from-blue-800 to-cyan-300 bg-clip-text text-center leading-[120%] lg:text-8xl md:text-7xl sm:text-5xl mb-10"
	>
		Student’s Technical and<br /> Innovation Club's
	</h1>
	<h1 class="lg:text-7xl mb-10 md:text-6xl sm:text-4xl text-center font-bold">
		Open Source program
	</h1>
	<div id="container " class="flex space-x-5 flex-wrap">
		{#each students as student}
			<Os
				image={student.image}
				name={student.name}
				skills={student.skill}
				college={student.college}
			/>
		{/each}
	</div>
</body>
