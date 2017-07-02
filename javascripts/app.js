/*

  Interaction
  - New Entry
  - Add Entry

*/
const $newEntry = document.querySelector('[data-interaction="new-entry"]');
const $addEntry = document.querySelector('[data-interaction="add-entry"]');
var newEntry = false;
$newEntry.addEventListener('click', function(){
  if (newEntry) {
    newEntry = false;
  }
  else {
    newEntry = true;
  }
  toggleClass(this, ['bg-blue', 'bg-red', 't-r45d']);
  toggleClass($addEntry, ['t-s0', 't-s1']);
});
/* Add Entry */
// $add_entry.addEventListener('click', function(){
//   console.log(this.innerHTML);
// });
/*

  Function
  - Toggle Class

*/
function toggleClass (element, classList) {
  classList.forEach(function(className){
    element.classList.toggle(className);
  });
}
