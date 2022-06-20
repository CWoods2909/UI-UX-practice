const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item")
console.log(tabItems);
// select tab content item
const selectItem = (e) =>{
    removeBorder()
    // Add border to current tab
    this.classList.add('tab-border');
}

const removeBorder = () =>{
    tabItems.forEach(item => item.classList.remove("tab-border"))
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
