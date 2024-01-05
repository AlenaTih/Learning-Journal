import morePosts from '/data.js'

const mobileNavHome = document.getElementById("mobile-nav-home")
const mobileNavPosts = document.getElementById("mobile-nav-posts")
const mobileNavMe = document.getElementById("mobile-nav-me")

const viewMoreButton = document.getElementById("view-more-button")
const moreRecentPostsFeed = document.getElementById("recent-posts-more-feed")
const viewEvenMoreButton = document.getElementById("view-even-more-button")

const newPost = {
    image: "images/blog-image.png",
    alt: "recent post image",
    info: "JULY 23, 2022",
    title: "Blog four",
    preview: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
    }

mobileNavHome.addEventListener("click", function() {
    mobileNavHome.innerHTML = `
    <ul>
        <li><a href="posts.html">Recent posts</a></li>
        <li><a href="about-me.html">About me</a></li>
    <ul>`
})

mobileNavPosts.addEventListener("click", function() {
    mobileNavPosts.innerHTML = `
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about-me.html">About me</a></li>
    <ul>`
})

mobileNavMe.addEventListener("click", function() {
    mobileNavMe.innerHTML = `
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="posts.html">Recent Posts</a></li>
    <ul>`
})

viewMoreButton.addEventListener("click", showMorePosts)

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

viewEvenMoreButton.addEventListener("click", function() {
    console.log("clicked")

    morePosts.push(newPost)
    morePosts.push(newPost)
    morePosts.push(newPost)    

    showMorePosts()
})


