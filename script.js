document.addEventListener('DOMContentLoaded', function(){
    let burger= document.querySelector('.mobile-burger')
    let close= document.querySelector('.mobile-close')
    let menu = document.querySelector('.mob-links')

    document.querySelector('.mobile-menu').addEventListener('click',function(){
       
        if(menu.style.display == 'none'){
        menu.style.display = 'flex'
        document.body.style.overflow = 'hidden'
        burger.style.display = 'none';
        close.style.display = 'flex ';
        }

        else if(menu.style.display == 'flex'){
        menu.style.display = 'none'
        document.body.style.overflow = ''
        burger.style.display = 'flex';
        close.style.display = 'none';
        }
     })

     window.addEventListener('resize', function(){
        if(window.innerWidth > 860){
            document.body.style.overflow = '';
            menu.style.display = 'none';
            close.style.display = 'none';
            burger.style.display = 'flex';
        }
     })

})