var i = 1;
const linkHead = 'https://flo.uri.sh/story/1894096/embed#slide-';
const isBrowser = typeof window !== "undefined";


function handleScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const windowHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;

    if (scrollPercentage > 75) {
        console.log('Scroll position is above 75%');
        i = 4;
    } else if (scrollPercentage > 50) {
        console.log('Scroll position is above 50%');
        i = 3;
    }
    else if (scrollPercentage > 25) {
        console.log('Scroll position is above 25%');
        i = 2;
    } else {
        i = 1;
    }

            var miframe = document.getElementById("miframe");
            if (miframe) {
                miframe.src = (linkHead + "" + i);
            }        
      }

    
      let scrollTimeout;
      if (isBrowser) {
        window.addEventListener('scroll', () => {
            // clear any existing timeout
            clearTimeout(scrollTimeout);
            var miframe = document.getElementById("miframe");
            
            // set a new timeout to delay the handleScroll() function
            scrollTimeout = setTimeout(() => {
          
              handleScroll();
            }, 100); // 500 milliseconds delay
          });
      }


