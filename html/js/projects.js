const clearActive = () => {
    const tabItem = document.querySelector(".tab-item.active");
    const content = document.querySelector(".products-content.active");

    if (tabItem) {
        tabItem.classList.remove('active');
    } 
    if (content) {
        content.classList.remove('active');
    }
}

const handleClickAddActive = () => {
    const tabsList = document.querySelectorAll(".tab-item");
    const contentList = document.querySelectorAll(".products-content");

    for (let i = 0; i < tabsList.length; i++) {
        tabsList[i].addEventListener("click", () => {
            clearActive();
            tabsList[i].classList.add('active');
            contentList[i].classList.add('active');
        })
    }
}
handleClickAddActive();