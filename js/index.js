const panels = document.querySelectorAll('.panel')

for(const panel of panels){
    panel.addEventListener('click', function(){
        removeActiveClasses()
        panel.classList.add('active')
    })
}

function removeActiveClasses() {
  for(const panel of panels){
    panel.classList.remove('active')
  }
}