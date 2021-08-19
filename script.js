let articles = document.querySelector(".articles");

fetch("https://api.github.com/users/alt-art/repos?type=owner&sort=created").then(res => {
    return res.json()
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
        link.append(article);
        link.target = "_blank"
        articles.append(link);
    })
}).catch(reason => {
    console.error("Error when requesting repos from alt-art", reason);
})
