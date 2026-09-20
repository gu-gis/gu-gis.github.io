window.document.addEventListener("DOMContentLoaded", function (event) {
  // Email
  const emailSpan = document.createElement('div')
    const emailText = 'Christy Hsu '
    const emailLink = document.createElement('a')
      emailLink.href = 'mailto:th1010@georgetown.edu'
      emailLink.target = '_blank'
    const emailIcon = document.createElement('i')
      emailIcon.classList.add('bi')
      emailIcon.classList.add('bi-envelope-at')
      emailIcon.classList.add('ps-1')
      emailIcon.classList.add('pe-1')
    emailLink.appendChild(emailIcon)
    emailSpan.append(emailText, emailLink)
    emailSpan.classList.add('sidebar-subtitle')

  // Term
  const termSpan = document.createElement('div')
    termSpan.textContent = 'Georgetown University'
    termSpan.classList.add('sidebar-subsubtitle')
  
  const sidebarDiv = document.getElementsByClassName('sidebar-title')[0]
  sidebarDiv.append(emailSpan)
  sidebarDiv.append(termSpan)
  
});
