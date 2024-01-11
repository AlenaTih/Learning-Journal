import morePosts from './data.js'
import footer from './footer.js'

const mobileNavHome = document.getElementById("mobile-nav-home")
const mobileNavPosts = document.getElementById("mobile-nav-posts")
const mobileNavMe = document.getElementById("mobile-nav-me")
const mobileNav = document.querySelector(".mobile-nav")

const moreRecentPostsFeed = document.getElementById("recent-posts-more-feed")

const newPost = {
    image: "images/blog-new-image.png",
    alt: "recent post image",
    info: "JAN 9 2024",
    title: "Blog",
    preview: "I'm excited to share what I learn and build in Scrimba's Frontend Development course!",
    }

document.addEventListener("click", function(e) {
    if (e.target.id === "hamburger-home") {
        showMenuHome()
    } else if (e.target.id === "hamburger-posts") {
        showMenuPosts()
    } else if (e.target.id === "hamburger-about") {
        showMenuAbout()
    } else if (e.target.id === "view-more-button") {
        showMorePosts()
    } else if (e.target.id === "view-even-more-button") {
        showEvenMorePosts()
    }
})

window.addEventListener("click", rootClick)

function showMenuHome() {
    mobileNavHome.innerHTML = `
    <div class="mobile-menu-container" id="mobile-menu-container-home">
        <ul>
            <li><a href="posts.html">Recent posts</a></li>
            <li><a href="about-me.html">About me</a></li>
        <ul>
    </div>`
    document.getElementById("mobile-menu-container-home").style.display = "flex"
}

function showMenuPosts() {
    mobileNavPosts.innerHTML = `
    <div class="mobile-menu-container" id="mobile-menu-container-posts">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about-me.html">About me</a></li>
        <ul>
    </div>`
    document.getElementById("mobile-menu-container-posts").style.display = "flex"
}

function showMenuAbout() {
    mobileNavMe.innerHTML = `
    <div class="mobile-menu-container" id="mobile-menu-container-me">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="posts.html">Recent posts</a></li>
        <ul>
    </div>`
    document.getElementById("mobile-menu-container-me").style.display = "flex"
}

function showMorePosts() {
    document.querySelector(".more-feed").style.display = "block"
    document.querySelector(".recent-posts-more").style.display = "grid"

    let morePostsHtml = ""

    morePosts.forEach( (post) => {
        morePostsHtml += `
        <div class="recent-post">
            <img src="${post.image}" class="recent-post-image" alt="${post.alt}">
            <p class="post-info">${post.info}</p>
            <h3 class="recent-post-title">${post.title}</h3>
            <p class="recent-post-preview">${post.preview}</p>
        </div>`

    })

    moreRecentPostsFeed.innerHTML = morePostsHtml

    document.getElementById("button-container-top").style.display = "none"

}

function showEvenMorePosts() {

    morePosts.push(newPost)
    morePosts.push(newPost)
    morePosts.push(newPost)

    showMorePosts()
}

// Refactor this
function rootClick(e) {
    if (mobileNavHome &&
        document.getElementById("mobile-menu-container-home").style.display === "flex" &&
        e.target.id !== "mobile-nav-home" &&
        e.target.id !== "hamburger-home" &&
        e.target.id !== "mobile-menu-container-home" &&
        !mobileNavHome.contains(e.target)) {
        // Element clicked was not the mobile nav or its children — close the mobile nav
        document.getElementById("mobile-menu-container-home").style.display = "none"
        mobileNav.innerHTML = `
        <i class="fa-solid fa-bars" id="hamburger-home"></i>`
        } else if (
            mobileNavPosts &&
            document.getElementById("mobile-menu-container-posts").style.display === "flex" &&
            e.target.id !== "mobile-nav-posts" &&
            e.target.id !== "hamburger-posts" &&
            e.target.id !== "mobile-menu-container-posts" &&
            !mobileNavPosts.contains(e.target)
        ) {
            // Element clicked was not the mobile nav or its children — close the mobile nav
            document.getElementById("mobile-menu-container-posts").style.display = "none"
            mobileNav.innerHTML = `
            <i class="fa-solid fa-bars" id="hamburger-posts"></i>`
        } else if (
            mobileNavMe &&
            document.getElementById("mobile-menu-container-me").style.display === "flex" &&
            e.target.id !== "mobile-nav-me" &&
            e.target.id !== "hamburger-about" &&
            e.target.id !== "mobile-menu-container-me" &&
            !mobileNavMe.contains(e.target)
        ) {
            // Element clicked was not the mobile nav or its children — close the mobile nav
            document.getElementById("mobile-menu-container-me").style.display = "none"
            mobileNav.innerHTML = `
            <i class="fa-solid fa-bars" id="hamburger-about"></i>`
        }
}

function renderFooter() {

    const footerEl = document.querySelector("footer")
    footerEl.innerHTML = footer
}

renderFooter()
