const body = document.querySelector("body");
const darkmodeswitch = document.getElementById("change-dark-mode");
const textonlyswitch = document.getElementById("text-only-toggle");
const batterysaverswitch = document.getElementById("battery-saver-toggle");

//battery check first time
check_battery();

function dark_mode (percentlevel){
    console.log("dark mode function");
    const header = document.querySelector('header');
    const body = document.querySelector('body');
    const sidebar = document.querySelector('.rightbar');

    if (this.checked || percentlevel < 10) {
        body.classList.add('dark-mode');
        sidebar.classList.add('dark-mode-rightbar');
        header.classList.add('dark-mode-header');
    } else {
        body.classList.remove('dark-mode');
        sidebar.classList.remove('dark-mode-rightbar');
        header.classList.remove('dark-mode-header');
    }
};


function text_only(percentlevel){
    console.log("text only function");
    var images = document.querySelectorAll('img.image:not(.icon)');

    if (this.checked || percentlevel < 10) {
        for (var i = 0; i < images.length; i++) {
            images[i].style.display = 'none';
        }
    } else {
        for (var i = 0; i < images.length; i++) {
            images[i].style.display = 'block';
        }
    }
};


function check_battery(){
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            var percentlevel = Number(battery.level) * 100;
            document.getElementById('battery-level').textContent = percentlevel + "%";
            
            if(percentlevel < 10){
                console.log("battery less than 10");
                dark_mode(percentlevel),
                text_only(percentlevel);
            }
        });
    } else {
        console.log('Battery API not available');
    }
};


darkmodeswitch.addEventListener('change', dark_mode);
textonlyswitch.addEventListener('change', text_only);
batterysaverswitch.addEventListener('change', dark_mode);
batterysaverswitch.addEventListener('change', text_only);

setInterval(check_battery, 5000);
