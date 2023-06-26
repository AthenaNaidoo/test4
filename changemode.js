document.getElementById('themebutton').addEventListener('click',function (){
    const css = document.getElementById('cssheet');
    const theme= document.getElementById('themebutton');

    if (theme.innerHTML == 'change theme') {
        css.setAttribute('href','darkstyle.css');
        theme.innerHTML = 'change theme back';
    }
    
    else{
        css.setAttribute('href','stylesheet.css');
        theme.innerHTML = 'change theme';

    }


});