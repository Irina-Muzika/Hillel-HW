const URL_ALBUMS_LINKS = 'https://jsonplaceholder.typicode.com/albums'
const URL_ALBUMS_PICTURES = 'https://jsonplaceholder.typicode.com/photos?albumId='
const DEFAULT_ID_IMG = '1'

const albumLinksList = document.querySelector('.listAlbums')
const albumPicturesList = document.querySelector('.listImg')

albumLinksList.addEventListener('click', onalbumLinksListClick)

getList(URL_ALBUMS_LINKS, renderLinks)
getList(`${URL_ALBUMS_PICTURES}${DEFAULT_ID_IMG}`, renderImg)

function onalbumLinksListClick(e) {
    e.preventDefault()

    if (e.target.classList.contains('link')) {
        const linkId = getID(e.target)

        getList(`${URL_ALBUMS_PICTURES}${linkId}`, renderImg)
    }
}

function getID(el) {
    return el.dataset.id
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
    alert(err.message)
}