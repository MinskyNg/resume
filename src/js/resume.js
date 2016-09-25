//弹出微信二维码
function showAddWechat(){
    document.getElementById('addWechat').style.display='block';
}

//关闭微信二维码
function closeAddWechat(){
    this.style.display='none';
}

document.getElementById('addWechat').onclick = closeAddWechat;
