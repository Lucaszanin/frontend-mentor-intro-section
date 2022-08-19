const dropMenu = document.querySelector('#dropdown')
const company = document.querySelector('#company')
const ItemMenu = document.querySelector('.arrow')
const companyDrop = document.querySelector('#company-drop')


function showDropDow() {

    company.classList.toggle('active-dropdown')
    dropMenu.classList.toggle('active-dropdown')

    if (dropMenu.classList.contains('active-dropdown')) {
        company.classList.remove('active-dropdown')
    }
    else{
        dropMenu.classList.remove('active-dropdown')
    }
}

ItemMenu.addEventListener('click', showDropDow)
companyDrop.addEventListener('click', showDropDow)


