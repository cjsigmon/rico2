      var i = 1;
      const linkHead = 'https://flo.uri.sh/story/1894096/embed#slide-'

      


    

      function handleScroll() {
       
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const windowHeight = document.documentElement.clientHeight || window.innerHeight;
  const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;

  if (scrollPercentage > 50) {
    console.log('Scroll position is over 40%');
    i = 2;
  } else {
    console.log('Scroll position is below 40%');
    i = 1;
  }
        

        // add color to current step only
      
            var miframe = document.getElementById("miframe");
            if (miframe) {
                miframe.src = (linkHead + "" + i);
            }        
      }

    
      let scrollTimeout;
      if (window) {
        window.addEventListener('scroll', () => {
            // clear any existing timeout
            clearTimeout(scrollTimeout);
            var miframe = document.getElementById("miframe");
            
            // set a new timeout to delay the handleScroll() function
            scrollTimeout = setTimeout(() => {
          
              handleScroll();
            }, 500); // 500 milliseconds delay
          });
      }


