const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});



function changeBak(){
    document.getElementById("div1").style.backgroundImage="url('../images/firefox.jpg')";
    document.getElementById("div2").style.backgroundImage="url('../images/29bfeef37eef4ca3bcf962274c1c7766.png')";
    document.getElementById("div3").style.backgroundImage="url('../images/Google_Chrome_icon_(February_2022).svg.png')";
    document.getElementById("div4").style.backgroundImage="url('../images/Windows 10 Manager.jpg')";
    document.getElementById("div11").style.backgroundImage="url('../images/TweakNow WinSecret.png')";
    document.getElementById("div22").style.backgroundImage="url('../images/MediaInfo.jpg')";
    document.getElementById("div33").style.backgroundImage="url('../images/W10Privacy.png')";
    document.getElementById("div44").style.backgroundImage="url('../images/Windows 11 Manager.png')";
    document.getElementById("div44").style.backgroundImage="url('../images/Winaero Tweaker.jpg')";
    document.getElementById("div111").style.backgroundImage="url('../images/Glary-Utilities.jpg')";
    document.getElementById("div222").style.backgroundImage="url('../images/Glary Malware Hunter.jpg')";
    document.getElementById("div333").style.backgroundImage="url('../images/Windows 11 Manager.png')";
    document.getElementById("div444").style.backgroundImage="url('../images/hwinfo.jpg')";
    

}