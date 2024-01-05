import morePosts from '/data.js'

const viewMoreButton = document.getElementById("view-more-button")
const moreRecentPostsFeed = document.getElementById("recent-posts-more-feed")
const viewEvenMoreButton = document.getElementById("view-even-more-button")

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
}

const newPost = {
        image: "images/blog-image.png",
        alt: "recent post image",
        info: "JULY 23, 2022",
        title: "Blog four",
        preview: "I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.",
        }

viewEvenMoreButton.addEventListener("click", function() {
    console.log("clicked")

    morePosts.push(newPost)
    morePosts.push(newPost)
    morePosts.push(newPost)    

    showMorePosts()
})
