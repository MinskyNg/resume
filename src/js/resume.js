var addWechat = document.getElementById('addWechat');
var wechat = document.getElementById('wechat');
var downPdf = document.getElementById('downPdf');


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


function downLoadPdf() {
    var downUrl = document.createElement("a");
    document.body.appendChild(downUrl);
    downUrl.target = '_blank';
    downUrl.href = '/前端实习-吴佳立.pdf';
    downUrl.click();
    document.body.removeChild(downUrl);
}

downPdf.onclick = function() {
    downPdf.style.width = '50px';
    downPdf.style.height = '50px';
    downPdf.style.background = '#656D78';
    downPdf.innerHTML = '<span class="tick"></span>';
    downPdf.style.borderRadius = '50%';
    downPdf.style.marginLeft = '147px';
    setTimeout(downLoadPdf, 800);
    downPdf.onclick = function() {
        downLoadPdf();
    }
}

