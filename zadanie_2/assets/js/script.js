const nav = new Array(...document.querySelectorAll('.nav-list>li'));
const images = new Array(...document.querySelectorAll('.nav-list-image'))
const home = document.querySelector('#home');
const schedule = document.querySelector('#schedule');
const speakers = document.querySelector('#speakers');
const loc = document.querySelector('#location');

window.addEventListener('scroll', changeMenu, false);

nav.forEach(e => e.addEventListener('click', changeMenu, false));

function changeMenu(e)
{
    if(e.target.localName=='img')
        return;

    //po naciśnięciu na przycisk menu
    if(e.type=='click')
    {
        window.removeEventListener('scroll', changeMenu);
        const target = e.target;
        
        switch(target.id)
        {
            case 'nav_home':
            {
                scroll({left:0,top:home.offsetTop,behavior:'smooth'});
                break;
            }

            case 'nav_schedule':
            {
                scroll({left:0,top:schedule.offsetTop,behavior:'smooth'});
                break;
            }

            case 'nav_speakers':
            {
                scroll({left:0,top:speakers.offsetTop,behavior:'smooth'});
                break;
            }

            case 'nav_location':
            {
                scroll({left:0,top:loc.offsetTop,behavior:'smooth'});
                break;
            }
        }
       
        image = target.childNodes[0];
        targetClass = target.classList;
        change();

        setTimeout(function()
        {
            window.addEventListener('scroll', changeMenu,false);
        },250);

        return;
    }

    //po scrollu do odpowiedniego miejsca
    if(pageYOffset < schedule.offsetTop - home.clientHeight/2)
    {
        change(0);
    }
    else if(pageYOffset > schedule.offsetTop - schedule.clientHeight/2 && pageYOffset < speakers.offsetTop - schedule.clientHeight/2)
    {
        change(1);
    }
    else if(pageYOffset > speakers.offsetTop - speakers.clientHeight/2 && pageYOffset < loc.offsetTop - speakers.clientHeight/2 )
    {
        change(2);
    }
    else if(pageYOffset > speakers.offsetTop - loc.clientHeight/2 )
    {
        change(3);
    }

    function change(number = -1)
    {
        if(number != -1)
        {
            try 
            {
                images.forEach(e => e.style.display="none");
                nav.forEach(e => e.classList.remove('active'));

                images[number].style.display="flex";
                nav[number].classList.add('active');

            } catch (e) {
               console.log(e)

            } finally
            {
                return;
            }
        }

        nav.forEach(e => e.classList.remove('active'));
        targetClass.add('active');

        images.forEach(e => e.style.display="none");
        image.style.display="flex";
    }


}