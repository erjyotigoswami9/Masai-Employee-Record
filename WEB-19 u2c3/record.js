// fill in javascript code here
var input_name = document.getElementById("name");
var emp_id = document.getElementById("employeeID");
var dept = document.getElementById("department");
var exp = document.getElementById("exp");
var email = document.getElementById("email");
var mobile = document.getElementById("mbl");
var submit = document.querySelector("form");
var arr=[];
submit.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let obj ={};
    obj.id = Math.floor(Math.random()*100000+1);
    obj.name = input_name.value;
    obj.employeeID = emp_id.value;
    obj.department = dept.value ;
    obj.experience = exp.value ;
    obj.email = email.value ;
    obj.mobile = mobile.value ;
    //console.log(obj)
    if(Number(obj.experience)>5) 
    {
        obj.role = 'Senior' ;
    }
    else if(Number(obj.experience)>=2){
        obj.role = 'Junior' ;
    }
    else if(Number(obj.experience)<=1){
        obj.role = 'Fresher' ;
    }
    arr.push(obj);
   // console.log(obj)
    handleAppend();
}

function handleAppend(){
    
    let tbd = document.querySelector("tbody");
    tbd.innerHTML='' ;

    arr.forEach(function(ele){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let td8_btn = document.createElement("button");

        td1.innerText = ele.name ;
        td2.innerText = ele.employeeID ;
        td3.innerText = ele.department ; 
        td4.innerText = ele.experience ;
        td5.innerText = ele.email ;
        td6.innerText = ele.mobile ;
        td7.innerText = ele.role ;
        td8_btn.innerText = 'Delete' ;
        td8.append(td8_btn);
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbd.append(tr) ;

        td8_btn.addEventListener('click',function(){
            deleteData(ele.id);
        });
    })
}

function deleteData(id){
    //console.log("deleting...")

     arr=arr.filter(function(ele){
         return id!=ele.id ;
     });
     //console.log(arr)
     handleAppend();
}
