
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
let tableData="";
for (let i = 0; i < dataList.length; i++){
  companyHTML += '<option value="' + dataList[i].name + '">';
  tableData+= "<tr> <td>"+dataList[i].name+"</td> <td>"+dataList[i].rank+"</td> </tr>";
  console.log("<tr> <td>"+dataList[i].name+"</td> <td>"+dataList[i].rank+"</td> </tr>");
}
$("#womensListBody").html(tableData);
window.onload = function(){
  document.getElementById('companyList').innerHTML = companyHTML
  document.getElementById('womensListBody').innerHTML = tableData
}
