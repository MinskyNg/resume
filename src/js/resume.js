var addWechat = document.getElementById('addWechat');
var close = document.getElementById('close');
var downPdf = document.getElementById('downPdf');


function showAddWechat(){
    addWechat.style.display = 'block';
    setTimeout('addWechat.style.opacity = 1;', 100);
    document.addEventListener('click', closeAddWechat);
}

function closeAddWechat(){
    addWechat.style.opacity = 0;
    setTimeout('addWechat.style.display = "none";', 300);
    document.removeEventListener('click', closeAddWechat);
}

addWechat.onmouseover = function() {
    close.style.opacity = 1;
};

addWechat.onmouseout = function() {
    close.style.opacity = 0;
};

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
    downPdf.style.background = '#2BCB96';
    downPdf.innerHTML = '<span class="tick"></span>';
    downPdf.style.borderRadius = '50%';
    downPdf.style.marginLeft = '147px';
    setTimeout(downLoadPdf, 800);
    downPdf.onclick = function() {
        downLoadPdf();
    }
}

