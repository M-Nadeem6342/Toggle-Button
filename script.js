function toggleMood(){
    let happyEmojis = document.getElementsByClassName("emoji")[0];
    let sadEmojis = document.getElementsByClassName("emoji")[1];

   happyEmojis.classList.toggle('visible');
   sadEmojis.classList.toggle('visible');

   document.body.classList.toggle('black-bg')
   
    // if(happyEmojis.classList.contains('visible'))
    // {
    //     happyEmojis.classList.remove('visible');
    //     sadEmojis.classList.add('visible');

    // }
    // else{
    //     happyEmojis.classList.add('visible');
    //     sadEmojis.classList.remove('visible');

    // }

}

document.addEventListener('click',toggleMood);
