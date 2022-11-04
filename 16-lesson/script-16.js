const ID_GET_LOGIN = 'getLogin'
const ID_INPUT = 'input'
const ID_CONTAINER = 'container'
const ID_TEMPLATE = 'template'
const CHANGE_SRS_URL = '[src]'
const CHANGE_PUBLIC_REPOST = '[rep]'
const CHANGE_FOLLOWERS = '[followers]'
const CHANGE_FOLLOWING = '[following]'
const CLASS_AVA = 'ava'
const CLASS_REPOST = 'repost'
const CLASS_FOLLOWERS = 'followers'
const CLASS_FOLLOIWING = 'folloiwing'

const getLoginBtn = document.querySelector(`#` + ID_GET_LOGIN);
const getUrl = document.querySelector(`#` + ID_INPUT)
const containerEl = document.querySelector('#' + ID_CONTAINER)
const templateEl = document.querySelector('#' + ID_TEMPLATE).innerHTML

getLoginBtn.addEventListener('click', onLoginButtonClick)

function onLoginButtonClick(e) {
  fetch('https://api.github.com/users/' + getUsename())
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      errorFind()
    })
    .then((res) => {
      removeTemplate()

      newShowTemplate(res)

      clearInput()
    })
    .catch((err) => {
      console.log(err);
    })
}

function removeTemplate() {
  const avaEl = document.querySelector('.' + CLASS_AVA)
  const repostEl = document.querySelector('.' + CLASS_REPOST)
  const followersEl = document.querySelector('.' + CLASS_FOLLOWERS)
  const folloiwingEl = document.querySelector('.' + CLASS_FOLLOIWING)

  if (avaEl && repostEl && followersEl && folloiwingEl) {
    removeEl(avaEl)
    removeEl(repostEl)
    removeEl(followersEl)
    removeEl(folloiwingEl)
  }
}

function newShowTemplate(res) {
  let newTemplateEl = templateEl

  newTemplateEl = newTemplateEl.replace(CHANGE_SRS_URL, res.avatar_url)
    .replace(CHANGE_PUBLIC_REPOST, res.public_repos)
    .replace(CHANGE_FOLLOWERS, res.followers)
    .replace(CHANGE_FOLLOWING, res.following)

  containerEl.insertAdjacentHTML('beforeend', newTemplateEl)
}

function clearInput() {
  getUrl.value = ''
}

function removeEl(el) {
  el.remove()
}

function getUsename() {
  return getUrl.value
}

function errorFind() {
  alert('error 404')
}