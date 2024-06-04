
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");



//...... array to store data of object ......
var datalist = [];
//...... array to store data of object ......

//............. check if localstorage contain data.......
if(localStorage.getItem("storagedata") != null)
    {

        //..........get item from localstorage.............
        datalist = JSON.parse(localStorage.getItem("storagedata"));

        //..........get item from localstorage.............
        
        displayData();
    }
//............. check if localstorage contain data.......




function submitBtn()
{
    //........ object ..............
    var data = 
    {
        name: siteName.value,
        url: siteUrl.value
    }
    //........ object ..............


    //...... push data.............
    datalist.push(data);
    //...... push data.............

    //.............. localstorage ............
    localStorage.setItem("storagedata", JSON.stringify(datalist));
    //.............. localstorage ............




    //........... call display data...........
    displayData();
    //........... call display data...........



    //..... call clearfrom function..........
    clearForm();
    //..... call clearfrom function..........
}


//............function to  display data ..............
function displayData()
{
    cartona = "";
    for(var i =0; i<datalist.length; i++)
        {
            cartona+=
            `
            <tr>
            <td>${i+1}</td>
            <td>${datalist[i].name}</td>
            <td>
              <a href="${datalist[i].url}" target="_blank"><button class="btn btn-visit btn-sm"><i class="fa-solid fa-eye"></i> Visit</button></a>
            </td>
            <td>
              <button class="btn btn-delete btn-sm" onclick="deleteItem(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button>
            </td>
          </tr>

            `
        }
        var tableData = document.getElementById("tableData");
        tableData.innerHTML = cartona;

}
//............function to  display data ..............



//............ function to delete.........
function deleteItem(index)
{

    datalist.splice(index, 1);
    localStorage.setItem("storagedata" , JSON.stringify(datalist));
    displayData();
}
//............ function to delete.........

























//.............function to clear form ................
function clearForm()
{
    siteName.value = '';
    siteUrl.value = '';
}
//............. function to clear form ...............

