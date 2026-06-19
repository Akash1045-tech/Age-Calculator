let inp = document.querySelector("input");
let but = document.querySelector("button");
let c = document.querySelector(".container");
function getDaysInMonth(y,m){
    return new Date(y,m,0).getDate();

}
function age(){
    let year , month , day ;
    let current = new Date();
    let birthdate = new Date(inp.value);
          
    if(birthdate > current){
        console.log("Are You From Future");
        return ;
    }
    if(inp.value == ""){
        alert("Enter  input please");
        return ;
    }
    year = current.getFullYear() - birthdate.getFullYear();
            month = current.getMonth() - birthdate.getMonth();
            day = current.getDate() - birthdate.getDate();


        if(birthdate.getMonth() > current.getMonth()){
            year -- ;
            month += 12 ;
           
        }
        if(day<0){
            month --;
            if(month<0){
                month = 11;
                year-- ;
            }
            
           
            let cday = getDaysInMonth(current.getFullYear(), current.getMonth());
            day += cday ;
        }

      show(year,month,day);
    }
    but.addEventListener("click" , age);
  function show (y,m,d){
            let al = document.querySelector(".show");
            if(al){
               let p = document.querySelector(".pa");
                p.innerText = `Your age is ${y} years ${m} months and ${d} days`;
            }
        else{
            let a = document.createElement("div");
        let b = document.createElement("p");
        
        c.append(a);
        a.append(b);
        a.classList.add("show");
        b.classList.add("pa");
        b.innerText = `Your age is ${y} years ${m} months and ${d} days`;
        }
       

    }
  
