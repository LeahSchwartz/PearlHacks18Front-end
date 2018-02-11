
var dataList = [
  {
    name:'Joe',
    equal_opp: 3,
    fit: 4,
    mo: 4.5,
    ml: 3.4,
    ss: 2,
    rank: (3+4+4.5+3.4+2)/5
  },
  {
    name:'Uber',
    equal_opp: 5,
    fit: 4,
    mo: 4.5,
    ml: 3.4,
    ss: 1,
    rank: (5+4+4.5+3+1)/5
  },
  {
    name:'Facebook',
    equal_opp: 4,
    fit: 4.5,
    mo: 4.5,
    ml: 3,
    ss: 2.5,
    rank: (4+4.5+4.5+3+2.5)/5
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

      document.getElementById('rankDiv').innerHTML = "Score: " + dataListItem.rank+"/5"

    $("#wRankBox").html("<h1><div id='wRank'>"+dataListItem.rank+"/"+dataList.length+"</div><br>Women Ranking</h1>");
    var chart = c3.generate({
      bindto:"#row",
      data: {
          columns: [
              ['Equal Opportunities', dataListItem.equal_opp],
              ['Females in Top Leadership', dataListItem.fit],
              ['Management Opportunities', dataListItem.mo],
              ['Maternity Leave', dataListItem.ml],
              ['Salary Satisfaction', dataListItem.ss]

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

    document.getElementById('bigDiv').style.display = 'flex'
    document.getElementById('row').style.display = 'flex'
    document.getElementById('criteria').style.display = 'flex'
  } else{
     document.getElementById('bigDiv').style.display = 'none'
      document.getElementById('row').style.display = 'none'
      document.getElementById('criteria').style.display = 'none'
  }

}
