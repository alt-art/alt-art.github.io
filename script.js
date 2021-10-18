const articles = document.querySelector('.articles');
const avatarDiv = document.querySelector('.avatar');
fetch('https://api.github.com/users/alt-art')
  .then((res) => res.json())
  .then((user) => {
    const img = document.createElement('img');
    img.src = user.avatar_url;
    img.alt = 'Github avatar';
    avatarDiv.appendChild(img);
  })
  .catch((reason) => {
    console.error('Error when requesting avatar image from alt-art', reason);
  });

fetch('https://api.github.com/users/alt-art/repos?type=owner&sort=updated')
  .then((res) => res.json())
  .then((data) => {
    data
      .filter((repo) => !repo.fork)
      .forEach((repo) => {
        addRepo(repo);
      });
  })
  .catch((reason) => {
    console.error('Error when requesting repos from alt-art\n', reason);
  });

function addRepo(repo) {
  const link = document.createElement('a');
  const article = document.createElement('article');
  const title = document.createElement('h3');
  const description = document.createElement('p');
  title.innerText = repo.name;
  description.innerText = repo.description;
  link.href = repo.html_url;
  article.append(title);
  article.append(description);
  if (repo.language != null) {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.innerText = repo.language;
    article.append(tag);
  }
  link.append(article);
  link.target = '_blank';
  link.rel = 'noreferrer';
  articles.append(link);
}
