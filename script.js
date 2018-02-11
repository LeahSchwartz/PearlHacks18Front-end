
var dataList = [
  {
    name:'Joe',
    rank: 12,
    forbes_rank: 31,
  },
  {
    name:'Jack',
    rank: 14,
    forbes_rank: 9
}
]
var companyHTML
for (let i = 0; i < dataList.length; i++){
  companyHTML += '<option value="' + dataList[i].name + '">'
}
window.onload = function(){
  document.getElementById('companyList').innerHTML = companyHTML
}
