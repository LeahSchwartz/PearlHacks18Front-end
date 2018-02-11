var dataList = [
  {
    name:'Joe',
    rank: 12,
    forbes_rank: 31,
  },
  {
    name:'Uber',
    rank: 8,
    forbes_rank: 1
  },
  {
    name:'Facebook',
    rank: 14,
    forbes_rank: 9
}
]
var companyHTML
let tableData="";
for (let i = 0; i < dataList.length; i++){
  companyHTML += '<option id="' + dataList[i].name.toLowerCase() + '" value="' + dataList[i].name + '">';
  tableData+= "<tr> <td>"+dataList[i].name+"</td> <td>"+dataList[i].rank+"</td> </tr>";
  console.log("<tr> <td>"+dataList[i].name+"</td> <td>"+dataList[i].rank+"</td> </tr>");
}
$("#womensListBody").html(tableData);
window.onload = function(){
  document.getElementById('companyList').innerHTML = companyHTML
  document.getElementById('womensListBody').innerHTML = tableData
  $("#womensList").DataTable( {
    order: [[1, 'desc']]
  });
  $("#wRankBox").html("<h1><div id='wRank'>"+dataList[0].rank+"/"+dataList.length+"</div><br>Women Ranking</h1>");
  var chart = c3.generate({
    bindto:"#criteria",
    data: {
        columns: [
            ['Equal Opportunities', 3.0],
            ['Females in Top Leadership', 1.6],
            ['Management Opportunities', 3.9],
            ['Maternity Leave', 4.3],
            ['Salary Satisfaction', 2.1]

        ],
        type: 'bar',
        colors: {
        'Equal Opportunities'  : '#202020',
        'Females in Top Leadership' : '585858',
        'Management Opportunities' : '#808080',
        'Maternity Leave' : '#B8B8B8',
        'Salary Satisfaction' : '#DCDCDC'

        }
    },
    axis: {
      rotated: true
    }

});
}

function makeCompanyName(){
  var companyName = document.getElementById('searchBar').value
  document.getElementById('companyDiv').innerHTML = '<img src="https://logo.clearbit.com/' + companyName + '.com">'
  if (document.getElementById('companyList').options.namedItem(companyName.toLowerCase()) !== null){
    var dataListItemName = document.getElementById('companyList').options.namedItem(companyName.toLowerCase()).value
    document.getElementById('companyDiv').innerHTML += dataListItemName
    var dataListItem
    for (var j = 0; j<dataList.length; j++){
      if (dataList[j].name === dataListItemName){
        dataListItem = dataList[j]
        break
      }
    }
    document.getElementById('rankDiv').innerHTML = "Rank: " + dataListItem.rank

    document.getElementById('bigDiv').style.display = 'flex'
  } else{
      document.getElementById('bigDiv').style.display = 'none'
  }

}
