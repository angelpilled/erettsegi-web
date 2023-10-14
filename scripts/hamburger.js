const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.left');
  const navLinks = document.querySelectorAll('.left li');
  const close = document.querySelector('.close');
  const bodyTag = document.getElementsByTagName("BODY")[0]
  
  //Toggle Nav
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
    
    //Animate Links
    navLinks.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation = ''
      }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;

      }
    });
    
    //burger animation
    burger.classList.toggle('toggle');
	bodyTag.classList.toggle("no-scroll")
    
    
  });

	close.addEventListener('click', ()=> {
		nav.classList.toggle('nav-active');
		bodyTag.classList.toggle("no-scroll")
	});
  
  
  
  
}

navSlide();
