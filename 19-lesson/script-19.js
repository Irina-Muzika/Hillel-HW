const URL_ALBUMS_LINKS = 'https://jsonplaceholder.typicode.com/albums'
const URL_ALBUMS_PICTURES = 'https://jsonplaceholder.typicode.com/photos?albumId='

const albumLinksList = document.querySelector('.listAlbums')
const albumPicturesList = document.querySelector('.listImg')

albumLinksList.addEventListener('click', onalbumLinksListClick)

getList(URL_ALBUMS_LINKS, renderLinks)

function onalbumLinksListClick(e) {
    e.preventDefault()

    if (e.target.classList.contains('link')) {
        const linkId = e.target.dataset.id

        getList(`${URL_ALBUMS_PICTURES}${linkId}`, renderImg)
    }
}

function getList(URL_ALBUMS_LINKS, method) {
    AlbumAPI.getList(URL_ALBUMS_LINKS)
        .then(method)
        .catch(showError)
}

function renderLinks(linksList) {
    html = linksList.map(getTempalteLink).join('')

    albumLinksList.innerHTML = html
}

function renderImg(imgList) {
    html = imgList.map(getTempalteImg).join('')

    albumPicturesList.innerHTML = html
}

function getTempalteLink(link) {
    return `
    <a href="#" class="link" data-id="${link.id}">${link.title}</a>
    `
}

function getTempalteImg(img) {
    return `
    <img src="${img.thumbnailUrl}" class="imgItem" alt="">
    `
}

function showError(err) {
    console.log(err);
    alert(err.message)
}