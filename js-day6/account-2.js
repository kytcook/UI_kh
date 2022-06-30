export let count = 0;
export function increase() {
  count ++;
  console.log('increase : '+ count);
}
export function getCount(){
  return count;
}