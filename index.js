 // ...............about...............................
 var tablinks =document.getElementsByClassName("tab-link");
 var tabcontents =document.getElementsByClassName("tab-contents");
  function opentab(tabname){ 
      for(tablink of tablinks){
          tablink.classList.remove("active-link");
      }
      for(tabcontent of tabcontents){
          tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");

  }// .................... for sidemenu...........
  var sidemen =document.getElementById("sidemenu");
    function openmenu(){
      sidemen.style.right ="0";
    }
    function closemenu(){
        sidemen.style.right="-200px";
         
    }

  
  // ............... for google sheet.............
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzRHyRi6qF2GQTEfG9KbjR1_q2tgBJ8kDU9qPthHPV4Z9bvOlwxKE4iNURSW84pjDa2/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML="massage sent Successfully";
          

          setTimeout(function(){
             msg.innerHTML=""; 
          },1000)
          form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

   