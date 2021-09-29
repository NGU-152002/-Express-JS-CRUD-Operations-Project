let tableForm = document.getElementById("tableform");


let jsonData = null;
let url = "http://localhost:3000/employee";

// get employee data from database
fetch(url,{method:"GET"})
.then(function (res){
    return res.json();

}).then(function (data){
    jsonData = data;
    jsonData.forEach(function (data){
        let tableData = document.createElement("tbody");
        tableData.innerHTML =  `<td data-label="ID">${data.id}</td>
                        <td data-label="Name">${data.name}</td>
                        <td data-label="Email">${data.email}</td>
                        <td data-label="Gender">${data.gender}</td>
                        <td data-label="Job-Type">${data.jobType}</td>
                        <td data-label="Salary">${data.salary}</td>
                        <td data-label="Options" class="table-icons">
                    <div class="update-icon" id="id-update-icon"><img  src="assests/pencil.svg" alt="update"></div>
                    <div class="delete-icon" id="id-delete-icon"><img src="assests/delete.svg" alt="delete"></div>
                </td>`
                tableForm.appendChild(tableData);
                
    })

})
// update the user
.then(function(){
    let updateTheUser = document.getElementById("id-update-icon")
    updateTheUser.addEventListener("click",function (e){
        let e_id =parseInt(prompt("Enter Employee Id"));
        let e_name = prompt("Enter Employee name");
        let e_email = prompt("Enter Employee email");
        let e_gender = prompt("Enter Employee gender");
        let e_jobType = prompt("Enter Employee jobType");
        let e_salary =parseInt(prompt("Enter Employee salary"));
        let dataToSend = JSON.stringify({id:e_id,name:e_name,email:e_email,gender:e_gender,jobType:e_jobType,salary:e_salary});
    
        fetch(url,{method:"put",headers:{"Content-Type":"application/json"},"body":dataToSend,})
        .then((res)=>{
            if(res.status!=200|| null){
                alert("Something went wrong. Try again later");
            } else{
                alert("succesfully updated");
            }
        })
    })

})
// delete the user
.then(function(){
    let deleteTheUser = document.querySelector(".delete-icon")
    deleteTheUser.addEventListener("click",function (e){
        let e_id =parseInt(prompt("Enter Employee Id"));
        
        let dataToSend = JSON.stringify({id:e_id});
    
        fetch(url,{method:"delete",headers:{"Content-Type":"application/json"},"body":dataToSend,})
        .then((res)=>{
            
            if(res.status!=200|| null){
                alert("Given id doesn't exist");
            } else{
                alert("succesfully updated");
            }
        })
    })
})





// create new user

let newUserBtn = document.querySelector(".new-user-btn");
newUserBtn.addEventListener("click",function (e){
    let e_id =parseInt(prompt("Enter Employee Id"));
    let e_name = prompt("Enter Employee name");
    let e_email = prompt("Enter Employee email");
    let e_gender = prompt("Enter Employee gender");
    let e_jobType = prompt("Enter Employee jobType");
    let e_salary =parseInt(prompt("Enter Employee salary"));
    let dataToSend = JSON.stringify({id:e_id,name:e_name,email:e_email,gender:e_gender,jobType:e_jobType,salary:e_salary}); 
    console.log(dataToSend)
    fetch(url,{method:"post",headers:{"Content-Type":"application/json"},"body":dataToSend,})
    .then((res)=>{
        if(res.text == 0 || res.status!=200|| null){
            alert("Something went wrong. Try again later");
        } else{
            alert("succesfully uploaded to database");
        }
    })

})








