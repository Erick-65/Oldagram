const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today??",
        likes: 152
    }
]

const postsEl =  document.getElementById('main')

for (let i=0; i<posts.length; i++) {
    postsEl.innerHTML += `<section>
                <div class="avatar">
                    <img src=${posts[i].avatar}>
                    <div class="avatar-text">
                        <p class="name">${posts[i].name}</p>
                        <p class="location">${posts[i].location}</p>
                    </div>
                </div>
                <div class="post">
                    <img src=${posts[i].post} alt="" class="post-img">
                </div>
                <div>
                    <div class="icons">
                        <img src="images/icon-heart.png" alt="">
                        <img src="images/icon-comment.png" alt="">
                        <img src="images/icon-dm.png" alt="">
                    </div>
                </div>
                <div class="likes">
                    <p id="likes">${posts[i].likes} likes</p>
                    <p><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </section>`
}

