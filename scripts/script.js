function openModalAndLockScroll({target: buttonOpener}) {
  const dialogID = buttonOpener.getAttribute('aria-controls')
  const dialogElement = document.querySelector(`#${dialogID}`)
  dialogElement.showModal()
  document.body.classList.add("scroll-lock")
}

function returnScroll() {
  document.body.classList.remove("scroll-lock")
}
