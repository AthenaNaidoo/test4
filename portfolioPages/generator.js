function generateWebsite(){

    let newWebsite = document.getElementById('websitename');
    let link = document.getElementById('websiteLink');

    let websites = [];
    let links = [];

    websites[0] = "cinni's dream home - one of my facorite places to hangout on the web";
    links[0] = "https://cinni.net/";

    websites[1] = "Whispering Pines - video art";
    links[1] = "https://archive.org/details/whispering-pines-2002-2019";

    websites[2] = "An Omnichord emulator!";
    links[2] = "https://onlineomnichord.com/";

    websites[3] = "Hekate - a cool neocities page ";
    links[3] = "https://hekate.neocities.org/";

    websites[4] = "I'm not really sure... a bunch of funny weird articles";
    links[4] = "http://seikyusho.jp/";

    websites[5] = "Windows93";
    links[5] = "http://www.windows93.net/";

    websites[6] = "Swirl - cute neocities site";
    links[6] = "https://swirl.neocities.org/";

    websites[7] = "Alf's room";
    links[7] = "https://alf-s-room.com/";

    websites[8] = "Pixel castle generator";
    links[8] = "https://end.city/";

    let i = Math.floor(Math.random()* websites.length);


    newWebsite.innerHTML = websites[i];
    link.innerHTML = links[i];
}