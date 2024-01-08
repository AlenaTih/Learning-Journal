import morePosts from '/data.js'
import footer from '/footer.js'

const mobileNavHome = document.getElementById("mobile-nav-home")
const mobileNavPosts = document.getElementById("mobile-nav-posts")
const mobileNavMe = document.getElementById("mobile-nav-me")

const moreRecentPostsFeed = document.getElementById("recent-posts-more-feed")

const newPost = {
    image: "images/blog-one-image.png",
    alt: "recent post image",
    info: "JULY 23, 2022",
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

function showMenuHome() {
    mobileNavHome.innerHTML = `
    <div class="mobile-menu-container">
        <ul>
            <li><a href="posts.html">Recent posts</a></li>
            <li><a href="about-me.html">About me</a></li>
        <ul>
    </div>`
}

function showMenuPosts() {
    mobileNavPosts.innerHTML = `
    <div class="mobile-menu-container">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about-me.html">About me</a></li>
        <ul>
    </div>`
}

function showMenuAbout() {
    mobileNavMe.innerHTML = `
    <div class="mobile-menu-container">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="posts.html">Recent posts</a></li>
        <ul>
    </div>`
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

function renderFooterHome() {
    const footerHome = document.getElementById("footer-container-home")
    if (footerHome) {
        footerHome.innerHTML = footer
    }
}

function renderFooterPosts() {
    const footerPosts = document.getElementById("footer-container-posts")
    if (footerPosts) {
        footerPosts.innerHTML = footer
    }
}

function renderFooterAbout() {
    const footerAbout = document.getElementById("footer-container-about")
    if (footerAbout) {
        footerAbout.innerHTML = footer
    }
}

renderFooterHome()
renderFooterPosts()
renderFooterAbout()
