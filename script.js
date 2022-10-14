// hide sidebar

let navToggle = document.querySelector('.topbar .nav-toggle')
let sidebar = document.querySelectorAll('.sidebar')

navToggle.addEventListener('click', () => {
    sidebar.forEach((i) => {
        i.classList.toggle('hide');
    })
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


// show more short video
let showshorts = document.querySelector('.showshorts')
let shortsContainer = document.querySelector('.shortvideo')

showshorts.addEventListener('click', () => {
    shortsContainer.style.height = "auto";
    showshorts.style.display = "none";
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


// hover on video

let video = document.querySelectorAll('.allvideo .video')
video.forEach(function (i) {
    i.addEventListener('mouseenter', () => {
        let hover = i.cloneNode(true);
        let btnOption = document.createElement('div');
        btnOption.classList.add('btn-option');
        btnOption.innerHTML = `
    <button><i class="material-icons">watch_later</i> Watch later</button>
    <button><i class="material-icons">playlist_play</i> Add to queue</button>`
        setTimeout(() => {
            hover.appendChild(btnOption);
        }, 1500);

        hover.classList.add('hover')
        hover.classList.remove('video')
        i.appendChild(hover);

        hover.addEventListener('mouseover', () => {
            hover.classList.add('scale')
        })

        hover.addEventListener('mouseleave', () => {
            i.removeChild(hover);
        })
    })
})



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