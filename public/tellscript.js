
    //   var scrolly = d3.select("#scrolly__section");
    //   var chart = scrolly.select(".scrolly__chart");
    //   var content = scrolly.select(".scrolly__content");
    //   var step = content.selectAll(".step");
    //   var wrapper = document.getElementById("wrappa");
    // var scrollyChartDiv = document.querySelector('.scrolly__chart');
    // var scrollyChartIframe = scrollyChartDiv.querySelector('iframe');
    var miframe = document.getElementById("miframe");
      var i = 1;


    

      function handleScroll() {
       
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const windowHeight = document.documentElement.clientHeight || window.innerHeight;
  const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;

  if (scrollPercentage > 70) {
    console.log('Scroll position is over 40%');
    i = 2;
  } else {
    console.log('Scroll position is below 40%');
    i = 1;
  }
        

        // add color to current step only
        if (miframe) {
            const linkHead = 'https://flo.uri.sh/story/1894096/embed#slide-'
        miframe.src = (linkHead + "" + i);
        } else {
            var miframe = document.getElementById("miframe");
            const linkHead = 'https://flo.uri.sh/story/1894096/embed#slide-'
        miframe.src = (linkHead + "" + i);
        }
    

        
      
      }

    
      window.addEventListener('scroll', handleScroll);

