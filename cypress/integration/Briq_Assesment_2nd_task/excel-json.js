let selectedFile;

document.getElementById('input').addEventListener("change",(event)=>{
    selectedFile = event.target.files[0];
})

document.getElementById('button').addEventListener("click",()=>{
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event) => {
            console.log(event.target.result)
            let data = event.target.result;
            let workbook = XLSX.read(data,{type:"binary"});
            console.log(workbook)
            workbook.sheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.sheets[sheet]);
                console.log('rowObject')
                document.getElementById("jsondata").innerHTML=JSON.stringify(rowObject,undefined,4)
            });

        }
    }

})