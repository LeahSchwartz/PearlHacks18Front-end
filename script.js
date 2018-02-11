function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

var dataList = [
  {
    name:'Walmart',
    equal_opp: 3,
    fit: 4,
    mo: 4.5,
    ml: 3.4,
    ss: 2,
    rank: 0
  },
  {
    name:'Uber',
    equal_opp: 5,
    fit: 4,
    mo: 4.5,
    ml: 3.4,
    ss: 1,
    rank: 0
  },
  {
    name:'Facebook',
    equal_opp: 4,
    fit: 4.5,
    mo: 4.5,
    ml: 3,
    ss: 2.5,
    rank: 0
},
{
  name:'Walmart',
  equal_opp: 3,
  fit: 4,
  mo: 4.5,
  ml: 3.4,
  ss: 2,
  rank: 0
},
{
  name:'Walmart',
  equal_opp: 3,
  fit: 4,
  mo: 4.5,
  ml: 3.4,
  ss: 2,
  rank: 0
},
{
  name:'Walmart',
  equal_opp: 3,
  fit: 4,
  mo: 4.5,
  ml: 3.4,
  ss: 2,
  rank: 0
},
{
  name:'Walmart',
  equal_opp: 3,
  fit: 4,
  mo: 4.5,
  ml: 3.4,
  ss: 2,
  rank: 0
},
{
  name:'Walmart',
  equal_opp: 3,
  fit: 4,
  mo: 4.5,
  ml: 3.4,
  ss: 2,
  rank: 0
},
{
  name:'GM',
  equal_opp: 3.3,
  fit: 3.7,
  mo: 3.3,
  ml: 3.2,
  ss: 3.4,
  rank: 0
},
{
  name:'IBM',
  equal_opp: 3,
  fit: 3.7,
  mo: 3.5,
  ml: 3.7,
  ss: 3.0,
  rank: 0
},
{
  name:'Twitter',
  equal_opp: 3.1,
  fit: 2.4,
  mo: 3.0,
  ml: 4.4,
  ss: 3.2,
  rank: 0
},
{
  name:'3M',
  equal_opp: 3.2,
  fit: 2.6,
  mo: 4.5,
  ml: 3.5,
  ss: 3.2,
  rank:0
},
{
  name:'Ford',
  equal_opp: 3.4,
  fit: 2.6,
  mo: 3.1,
  ml: 3.2,
  ss: 3.4,
  rank:0
}
]
var companyHTML
for (h = 0; h <dataList.length; h++){
  dataList[h].rank = round((dataList[h].equal_opp + dataList[h].fit + dataList[h].mo + dataList[h].ml + dataList[h].ss)/5,2)
}
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
