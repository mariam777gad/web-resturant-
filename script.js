// menu
document.addEventListener('DOMContentLoaded',function()
{
    let togg=document.getElementById('togg');
    let hom= document.getElementById('hom') ;
    function showHome()
    {
        hom.classList.add('show');
    }
    if(togg)
    {
        togg.addEventListener('click',showHome);
    }
    function toggleMenu() 
    {
        hom.classList.toggle("active");
    }

    // dark light mode :
 let light=document.getElementById('light');
 let body=document.body;
 light.addEventListener('click', function() {
    light.classList.toggle('fa-moon');
    
    if (light.classList.contains('fa-moon')) {
        body.style.background = 'black';
        body.style.color = 'white';
        light.classList.remove('fa-sun'); // Change icon to moon
        light.classList.add('fa-moon');   // Ensure moon icon is displayed
    } else {
        body.style.background = 'white';
        body.style.color = 'black';
        light.classList.remove('fa-moon'); // Change icon back to sun
        light.classList.add('fa-sun');      // Ensure sun icon is displayed
    }
   body.style.transition = '2s';
});

}  )

// // order confirmation

function confirmation()
{
    const confirmation = window.prompt("Confirming Your Order");
    if (confirmation) 
    {
        alert(" Tanks For Dealing With US");
    }
}