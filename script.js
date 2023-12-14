const button = document.getElementById('settings');

function light(event){
    event.preventDefault();
    
    document.getElementById('header').style.backgroundColor = '#FFF';
    let tagA = document.getElementsByClassName('nav')[0].getElementsByTagName('a');
    document.getElementsByClassName('slide2')[0].style.backgroundColor = '#FFF';
    document.getElementsByClassName('slide2')[0].style.color = '#000';
    let list = document.getElementsByTagName('li');

    for (let i = 0; i < tagA.length; i++) {
        tagA[i].style.color = '#000';
    };
    for (let i = 0; i < list.length; i++) {
        list[i].style.color = '#000';
    };
    
    document.getElementById('logo').src = 'imgs/Black/Logo.svg';
    document.getElementById('settings').getElementsByTagName('img')[0].src = 'imgs/Black/gearB.svg';
    let imgs = document.getElementById('patchs').getElementsByTagName('img');
    
        for (let i = 0; i < imgs.length; i++){
            switch(i){
                case 0:
                    imgs[i].src = 'imgs/Black/html.svg';
                    break;
                case 1:
                    imgs[i].src = 'imgs/Black/css.svg';
                    break;
                case 2:
                    imgs[i].src = 'imgs/Black/js.svg';
                    break;
                case 3:
                    imgs[i].src = 'imgs/Black/java.svg';
                    break;
                case 4:
                    imgs[i].src = 'imgs/Black/figma.svg';
                    break;
                case 5:
                    imgs[i].src = 'imgs/Black/illustrator.svg';
                    break;
                case 6:
                    imgs[i].src = 'imgs/Black/photoshop.svg';
                    break;
                default:
                    console.log(imgs);
            }
        }
    
    

    button.removeEventListener('click', light);
};

button.addEventListener('click', light);