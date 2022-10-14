
// change theme setting

let themeSetting = document.querySelector('.theme-setting')
let themeOption = document.querySelector('.theme-option')
let themeBack = document.querySelector('.theme-back')

themeSetting.addEventListener('click', () => {
    themeOption.classList.add('show');
    settings.classList.remove('show')
})

themeBack.addEventListener('click', () => {
    settings.classList.add('show');
    themeOption.classList.remove('show')
})

let themeActive = document.querySelectorAll('.theme-option li')
let themeApp = document.querySelector('.theme-setting .theme')

themeActive.forEach((t) => {
    t.addEventListener('click', () =>{
        themeActive.forEach((i) => {
            i.classList.remove('active')
        })
        t.classList.add('active');
        themeOption.classList.remove('show');

        if(t.classList.contains('dark-mode')){
            document.body.classList.remove('light')
            themeApp.innerHTML = "Dark"
        }else{
            document.body.classList.add('light')
            themeApp.innerHTML = "Light"
        }
    })
})

// show search small screen
let showSearchBtn = document.querySelector('.search-show')
let searchbar = document.querySelector('.searchbar')
let backSearch = document.querySelector('.searchbar .back')

showSearchBtn.addEventListener('click', () => {
    searchbar.classList.add('showsearch')
})
backSearch.addEventListener('click', () => {
    searchbar.classList.remove('showsearch')
})
document.addEventListener('click', (e) => {
    if(!showSearchBtn.contains(e.target) && searchbar.classList.contains('showsearch')){
        searchbar.classList.remove('showsearch')
    }
})


// more setting options

let settingsIcon = document.querySelector('.topbar .settings-icon');
let settings = document.querySelector('.topbar .alloptions');

settingsIcon.addEventListener('click', () => {
    settings.classList.toggle('show');
    themeOption.classList.remove('show')
})
document.addEventListener('click', function (e) {
    if (!settings.contains(e.target) && !settingsIcon.contains(e.target) && !themeOption.contains(e.target)) {
        settings.classList.remove('show')
        themeOption.classList.remove('show');
    }
})


// toggle sidebar

let navToggle = document.querySelector('.topbar .nav-toggle')
let sidebar = document.querySelector('.sidebar')

navToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show')
})