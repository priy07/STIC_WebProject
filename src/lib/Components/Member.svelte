<script>
	export let obj;
	// id: 1,
	// 		name: 'Ishita Porwal',
	// 		position: 'President',
	// 		photo: '/teamimages/Ishita.png',
	// 		insta: 'https://www.instagram.com/ishitaporwal_/',
	// 		linkedin: 'https://www.linkedin.com/in/ishita-porwal-4b36341bb/',
	// 		github: ''
</script>

<div class="m-10 w-60 border">
	<div class="relative w-44 m-auto">
		<img src={obj.photo} alt="" srcset="" class="h-40 w-44 rounded-2xl z-10" />
		<div
			class="w-full h-14 bottom-0 absolute z-10 bg-gradient-to-t from-white via-[rgba(200,200,200,0.4]) to-[rgba(190,190,190,0.1)]"
		/>
	</div>
	<div class="mt-5 w-full text-center flex space-y-2 flex-col">
		<p>
			<b>Position: </b>
			{obj.position}
		</p>
		<p>
			<b>Name: </b>{obj.name}
		</p>
		<div class="mt-10">
			<a href={obj.insta}
				><i><iconify-icon icon="mdi:instagram" class=" text-2xl text-pink-500" /></i>
			</a>
			<a href={obj.linkedin}
				><i><iconify-icon icon="mdi:linkedin" class=" text-2xl text-blue-500" /></i>
			</a>
			<a href={obj.github}><i><iconify-icon icon="mdi:github" class=" text-2xl" /></i> </a>
		</div>
	</div>
</div>

<style>
</style>
