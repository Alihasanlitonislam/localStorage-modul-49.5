const Quintity = (id) => {
      let quintityAdd = {};
      // chack the local storage item
      const chackQuinitity = localStorage.getItem('this is add to cart')
      if(chackQuinitity){
            quintityAdd = JSON.parse(chackQuinitity)
      }
      else{
            quintityAdd ={}
      }
      // add to local Storage 
      const localDb = quintityAdd[id];
      if(localDb){
            quintityAdd[id] = localDb + 1;
      }
      else{
            quintityAdd[id] = 1
      }
      localStorage.setItem('this is add to cart', JSON.stringify(quintityAdd))
}
// remoce the  local storage item 
const QuintityRemove = id => {
      const deleteItem = localStorage.getItem('this is add to cart')
      if(deleteItem){
            const newDelet = JSON.parse(deleteItem)
            if(id in newDelet){
                  delete newDelet[id]
                  localStorage.setItem('this is add to cart',JSON.stringify(newDelet))
            }
      }

}
export { Quintity, QuintityRemove }
