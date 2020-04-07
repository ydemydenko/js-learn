
document.querySelectorAll('.box').forEach(el => {
  if (el.classList[1] == 'red') {
    el.addEventListener('click', function(e) {
      console.log('You clicked on ' + this.classList[1].toUpperCase() + ' and phase is ' + e.eventPhase);
    }, {capture: true});
  }
  else if (el.classList[1] == 'pink') {
    el.addEventListener('click', function(e) {
      if (e.offsetX < 46) {
        console.log('You clicked on ' + this.classList[1].toUpperCase() + ' and phase is ' + e.eventPhase);
        e.stopPropagation();
      }
    });
  }
  else {
    el.addEventListener('click', function(e) {
      console.log('You clicked on ' + this.classList[1].toUpperCase() + ' and phase is ' + e.eventPhase);
    });
  }

})
