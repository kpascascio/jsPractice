let filterInput  = document.getElementById('filterInput')

filterInput.addEventListener('keyup', function(){
  // console.log(a.key)

  let filterValue = document.getElementById('filterInput').value.toUpperCase();

  // Get names ul
  let namesUL = document.getElementById('names')

  let li = namesUL.querySelectorAll('li.collection-item');

  for(let i = 0; i < li.length; i++){
    let a = li[i].getElementsByTagName('a')[0];

    let condtion = a.innerHTML.toUpperCase().indexOf(filterValue) > -1
    console.log(filterValue)

    if(condtion){
      li[i].style.display = '';
    }else {
      li[i].style.display = 'none';
    }

  }
})
