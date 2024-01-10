
// side nav route
const clickMyListing=()=>{
    document.querySelector('#my-listing-page').style.display = 'block'
    document.querySelector('#my-profile-page').style.display = 'none'
    document.querySelector('#my-favorite-page').style.display = 'none'
    document.querySelector('#my-announcement-page').style.display = 'none'

}
const clickMyProfile=()=>{
    document.querySelector('#my-listing-page').style.display = 'none'
    document.querySelector('#my-favorite-page').style.display = 'none'
    document.querySelector('#my-announcement-page').style.display = 'none'
    document.querySelector('#my-profile-page').style.display = 'block'
}
const clickMyFavorite=()=>{
    document.querySelector('#my-listing-page').style.display = 'none'
    document.querySelector('#my-profile-page').style.display = 'none'
    document.querySelector('#my-announcement-page').style.display = 'none'
    document.querySelector('#my-favorite-page').style.display = 'block'
}
const clickMyAnnouncement=()=>{
    document.querySelector('#my-listing-page').style.display = 'none'
    document.querySelector('#my-profile-page').style.display = 'none'
    document.querySelector('#my-favorite-page').style.display = 'none'
    document.querySelector('#my-announcement-page').style.display = 'block'
}

// side nav active route
const sideNavLinks = document.querySelectorAll('.nav-links');
sideNavLinks.forEach(sideNavLink=>{
    sideNavLink.addEventListener('click', ()=>{
        document.querySelector('.active-route')?.classList.remove('active-route');
        sideNavLink.classList.add('active-route')
    })
})


// My Listing active route
const navLinkEls = document.querySelectorAll('.nav-link');
navLinkEls.forEach(navLinkEl=>{
    navLinkEl.addEventListener('click', ()=>{
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active');
    })
})

// my listing nav route
const clickAllListing=()=>{
    document.querySelector('.all-listing').style.display = 'block'
    document.querySelector('.publish').style.display = 'none'
    document.querySelector('.pending').style.display = 'none'
    document.querySelector('.expired').style.display = 'none'
}

const clickPublish=()=>{
    document.querySelector('.all-listing').style.display = 'none'
    document.querySelector('.pending').style.display = 'none'
    document.querySelector('.expired').style.display = 'none'
    document.querySelector('.publish').style.display = 'block'

}
const clickPending=()=>{
    document.querySelector('.all-listing').style.display = 'none'
    document.querySelector('.expired').style.display = 'none'
    document.querySelector('.publish').style.display = 'none'
    document.querySelector('.pending').style.display = 'block'

}
const clickExpired=()=>{
    document.querySelector('.all-listing').style.display = 'none'
    document.querySelector('.pending').style.display = 'none'
    document.querySelector('.publish').style.display = 'none'
    document.querySelector('.expired').style.display = 'block'

}

