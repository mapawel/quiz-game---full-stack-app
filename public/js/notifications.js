(notifications = () => {
  let deleteButtonsElements;
  let notificationsElements;

  const close = (element, time) => {
    element.style.opacity = '1';
    element.style.transition = `opacity ${time}s cubic-bezier(1,.01,.87,.62)`;
    window.setTimeout(() => element.style.opacity = '0', 0)
    window.setTimeout(() => element.remove(), time*1000)
  }

  const deleteNotyfication = (e) => {
    const notification = e.target.closest('.notification')
    close(notification, .3)
  }

  const prepareDOMelements = () => {
    deleteButtonsElements = document.querySelectorAll('.delete')
    notificationsElements = document.querySelectorAll('.notification')
  }

  const start = () => {
    deleteButtonsElements.forEach(btn => btn.addEventListener('click', (e) => deleteNotyfication(e)))
    notificationsElements.forEach(el => {
      if (el.classList.contains('self-close')) close(el, 3)
    })
  }

  const main = () => {
    prepareDOMelements();
    start();
  }

  document.addEventListener('DOMContentLoaded', main)
})()