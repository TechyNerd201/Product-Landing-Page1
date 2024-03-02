function openNav() {
    document.querySelector('.Collapsable-Sidebar').style.display ='block';
    let crossButton =document.querySelector('.cross-option');
    if(window.innerWidth <950){
        crossButton.style.display='block';
    }
    document.querySelector('.menu-option').style.display ='none';
    // .style.display ='block';
}

function closeNav(){
    document.querySelector('.Collapsable-Sidebar').style.display = 'none';
    document.querySelector('.cross-option').style.display ='none';
    let menuOption=document.querySelector('.menu-option');
    if(window.innerWidth<950){
    menuOption.style.display ='block';
    }
}


