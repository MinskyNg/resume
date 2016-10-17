var addWechat = document.getElementById('addWechat');
var wechat = document.getElementById('wechat');


function showAddWechat(){
    addWechat.style.visibility = 'visible';
    addWechat.style.opacity = 1;
    setTimeout(function() {
        wechat.removeEventListener('click', showAddWechat);
        document.addEventListener('click', closeAddWechat);
    }, 100);
}

function closeAddWechat(){
    addWechat.style.visibility = 'hidden';
    addWechat.style.opacity = 0;
    setTimeout(function() {
        document.removeEventListener('click', closeAddWechat);
        wechat.addEventListener('click', showAddWechat);
    }, 100);
}


wechat.addEventListener('click', showAddWechat);

