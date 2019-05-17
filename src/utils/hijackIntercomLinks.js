const hijackIntercomLinks = () => {
  document.addEventListener('click', evt => {
    if (evt.target instanceof Element) {
      const el = findIntercomLink(evt.target)

      if (el) {
        evt.preventDefault()
        window.Intercom('show')
        return false
      }
    }

    return true
  })
}

const findIntercomLink = el => {
  if (el instanceof HTMLAnchorElement && el.href.includes('#intercom')) {
    return el
  }

  return el.parentElement && el.parentElement !== null
    ? findIntercomLink(el.parentElement)
    : null
}

export default hijackIntercomLinks
