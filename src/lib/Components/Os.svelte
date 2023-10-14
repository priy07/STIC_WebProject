<script>
	export let image = 'Google Drive Image';
	export let name = 'Your Name';
	export let college = 'You College';
	export let skills = ['your', 'Skills'];
	function randColor() {
		var letters = 'BCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * letters.length)];
		}
		return color;
	}
</script>

<main class="m-5 p-5 border border-slate-700 w-80 text-lg shadow-lg hover:scale-105 transition-all">
	<img
		src={`https://drive.google.com/uc?export=view&id=${image}`}
		alt="Loading..."
		srcset=""
		class="w-60 h-52"
	/>
	<p class="p-3">
		<b>Name: </b>
		{name}
	</p>
	<p class="p-3">
		<b>College: </b>
		{college}
	</p>
	<div class="flex space-x-1 mx-2 pt-3 flex-wrap">
		<p><b>Skills:</b></p>
		{#each skills as skill}
			<p
				class=" px-2 text-slate-800 text-center rounded-full"
				style={`background-color:${randColor()}`}
			>
				{skill}
			</p>
		{/each}
	</div>
</main>
