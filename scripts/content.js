const box = document.querySelector(".bxce")
const content = document.querySelector(".bxce-scroller")
const scroller = document.querySelector(".bxce-scrollbar")

if (content && box && scroller) {
    box.style.height = 'auto'
    content.style.height = '1100px';
    scroller.style.height = '1100px';
}

const saveBtn = document.querySelector("input.adm-btn-save");
const applyBtn = document.querySelector("input[name='apply']");
const container = document.querySelector(".adm-detail-toolbar");

if (container && saveBtn && applyBtn) {
    const prependApply = applyBtn.cloneNode(true);
    prependApply.id = "prependApply";
    prependApply.addEventListener('click', function () {
        applyBtn.click();
    })

    const prependSave = saveBtn.cloneNode(true);
    prependSave.id = "prependSave";
    prependSave.addEventListener('click', function () {
        saveBtn.click();
    })

    container.prepend(prependApply)
    container.prepend(prependSave)
}


const workingArea = document.querySelector(".adm-workarea-wrap");
const crumbs = document.querySelectorAll(".adm-navchain-item");
const title = document.querySelector(".adm-title");

if (workingArea && crumbs) {
    workingArea.style.backgroundImage = 'url("https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg")';
    workingArea.style.backgroundSize = 'contain'
    workingArea.style.backgroundAttachment = "fixed";

    workingArea.style.backgroundPosition = "center center";
    workingArea.style.backgroundRepeat = "no-repeat";

    crumbs.forEach(crumb => crumb.style.backgroundColor = 'aliceblue');
    title.style.backgroundColor = 'aliceblue'

}
