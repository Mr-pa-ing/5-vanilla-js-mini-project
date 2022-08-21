const progressBar = document.querySelector('.progress-bar');
const downloadBtn = document.querySelector('.download-btn');
const seturl = "https://linkedin.com";

downloadBtn.addEventListener("click", function(){
    let setwidth = 0;
    downloadBtn.setAttribute("disabled", true);

    const setinc = setInterval(progressinc, 100);

    function progressinc() {
        if(setwidth >= 100){
            setwidth = 0
            clearInterval(setinc);
            window.location.href = seturl;
        }else {
            setwidth++;
            progressBar.style.width = `${setwidth}%`;
            progressBar.setAttribute("data-inc", `${setwidth}%`)
        }
    }

})