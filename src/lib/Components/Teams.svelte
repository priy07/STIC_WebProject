
<script src="https://kit.fontawesome.com/e837e124f1.js" crossorigin="anonymous">
     const handles = [{
        id:1,
        name:'Ishita Porwal',
        position:"President",
        photo:'/teamimages/Ishita.png',
        insta:'https://www.instagram.com/ishitaporwal_/',
        linkedin:'https://www.linkedin.com/in/ishita-porwal-4b36341bb/',
        github:''
    },{
        id:2,
        name:'Aviral Jain',
        position:"Vice-President",
        photo:'/teamimages/Aviral.png',
        insta:'https://www.instagram.com/aviraljainn_/',
        linkedin:'https://www.linkedin.com/in/jainaviral/',
        github:''
    },{
        id:3,
        name:'Chaitanya Shrimali',
        position:"Technical Head",
        photo:'/teamimages/Chaitanya.jfif',
        insta:'https://www.instagram.com/chaitanya_shrimali/',
        linkedin:'https://www.linkedin.com/in/chaitanyashrimali2002/',
        github:''
    },{
        id:4,
        name:'Darshita Porwal',
        position:"Non-Technical Head",
        photo:'/teamimages/darshita.jfif',
        insta:'https://instagram.com/_inside_minds__?igshid=YmMyMTA2M2Y=',
        linkedin:'https://www.linkedin.com/in/darshitaporwal',
        github:'https://github.com/Darshita2307'
    },{
        id:5,
        name:'Shreyash Chauhan',
        position:"Treasurer",
        photo:'/teamimages/shreyash.jfif',
        insta:'https://www.instagram.com/shreyashchauhan/',
        linkedin:'https://www.linkedin.com/in/shreyash-chauhan/',
        github:''
    }]
</script>

<main>
     <!-- NavBar -->
     <nav class="mx-10 px-10">
        <ul class=" md:break-normal sm:break-normal flex justify-around py-10 ">

            <li class=" md:break-normal sm:break-normal "><a href="http://">STIC Members</a></li>


        </ul>

    </nav>
    <!-- navbarEnd -->

    <!-- heading -->
    <div class="font-bold  text-center sm:text-center">
        Core Team
    </div>
    <!-- heading End -->

    <!-- card Started -->
    <section class="flex-wrap flex sm:flex-wrap  sm:flex-shrink justify-around my-10 ">
        {#each handles as {id,name,position,photo,insta,linkedin,github}, index (handles.id)}
		
	
        <div class="card sm:flex-wrap flex-wrap px-24 pb-8 ">
            <img class="rounded-full h-36 w-36 pl-2" src={photo}
                height="200" width="200">

            <h1 class="font-bold mt-5 text-xl px-5">{name}</h1>
            <h2 class="text-center text-zinc-500 my-2 -ml-4">{position}</h2>


            <section class="flex mx-4 ">
                <div class="rounded">
                    <a href={linkedin} target="_blank"
                        rel="noopener noreferrer" class="mx-2 px-2 py-2 hover:bg-blue-200 ">
                        <i class="fa-brands fa-linkedin-in" style="color: #008cb4;"></i></a>
                </div>

                <div class="rounded ">
                    <a href={insta} target="_blank" rel="noopener noreferrer"
                        class="mx-2 px-2 py-2 hover:bg-pink-200 "><i class="fa-brands fa-instagram "
                            style="color: #61177c;"></i></a>
                </div>
                <div class="rounded">
                    <a href={github} target="_blank" rel="noopener noreferrer"
                        class="mx-2 px-2 py-2 hover:bg-blue-200 "><i class="fa-brands fa-github"></i></a>
                
                    </div>
            </section>
        </div>
        {/each}
                
    </section>
</main>