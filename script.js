let articles = document.querySelector(".articles");
let avatar_img = document.querySelector(".avatar")

fetch("https://api.github.com/users/alt-art").then(res => {
    return res.json();
}).then(user => {
    avatar_img.src = user.avatar_url;
}).catch(reason => {
    console.error("Error when requesting avatar image from alt-art", reason);
})


fetch("https://api.github.com/users/alt-art/repos?type=owner&sort=created").then(res => {
    return res.json();
}).then(data => {
    data.forEach(repo => {
        let link = document.createElement("a");
        let article = document.createElement("article");
        let title = document.createElement("h3");
        let description = document.createElement("p");
        title.innerText = repo.name;
        description.innerText = repo.description;
        link.href = repo.html_url;
        article.append(title);
        article.append(description);
        if (repo.language != null) {
            let tag = document.createElement("span");
            tag.className = "tag";
            tag.innerText = repo.language;
            article.append(tag);
        }
        link.append(article);
        link.target = "_blank"
        articles.append(link);
    })
}).catch(reason => {
    console.error("Error when requesting repos from alt-art", reason);
})
