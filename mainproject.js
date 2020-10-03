function a(){
    document.getElementById('tab-1-content').style.display="grid";
    document.getElementById('tab-2-content').style.display="none";
    document.getElementById('tab-3-content').style.display="none";
}

function b(){
    document.getElementById('tab-1-content').style.display="none";
    document.getElementById('tab-2-content').style.display="block";
    document.getElementById('tab-3-content').style.display="none";
}

function c(){
    document.getElementById('tab-1-content').style.display="none";
    document.getElementById('tab-2-content').style.display="none";
    document.getElementById('tab-3-content').style.display="block";
}