document.querySelectorAll('.tablinks').forEach((selector)=>{
  selector.addEventListener('click', openTab);
});

function openTab(event) {
  const tabName = event.target.name;
  const tabContent = document.getElementsByClassName('tabcontent');
  const tablinks = document.getElementsByClassName('tablinks');
  Object.keys(tabContent).forEach(tab => tabContent[tab].style.display = 'none');
  Object.keys(tablinks).forEach((elem)=>{
    tablinks[elem].className = tablinks[elem].className.replace(' active', '');
  });
  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.className += ' active';
}