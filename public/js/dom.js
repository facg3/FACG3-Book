addListener('#submit' , 'submit' function(event){
  event.preventDefult();
  var form =event.target ;

  const name_input = document.getElementsByTagName('input')[0];
  const post_input = document.getElementsByTagName('textarea')[0];
  const child = document.createElemenet('p');
  child.innerHTML(name_input.innerHTML + post_input.innerHTML);
  wall.appendChild(child);
})
