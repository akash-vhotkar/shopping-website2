const addbtn=document.querySelectorAll(".btn");
for(var i=0;i<addbtn.length;i++){
    addbtn[i].addEventListener("click",(event,ready)=>{
        const addbtn=event.target;
        const addimg=addbtn.parentElement.childNodes[1].src;
        const addtitle=addbtn.parentElement.childNodes[3].textContent;
        const addprice=addbtn.parentElement.childNodes[7].textContent;
        const row=document.createElement('tr');
        row.classList.add("plz")
        row.innerHTML=`
            <td><img src=${addimg} style="width: 70px; height: 50px;"></td>
            <td>${addtitle}</td>
            <td>${addprice}</td>
            <td><input id="quantity" style="width:50px;style="display: block;" type="Number" value="0"  ></td>
            <td><input class="btn" id="btnrem" style="width:60px; type="button" onclick="removerow(this)" value="Remove"></td>
        `
        const showcart=document.getElementById("cart")
        showcart.appendChild(row);

        row.children[3].children[0].addEventListener("change",()=>{
            updatecart()
        })   
    })
}

function updatecart(){
    var total=0;
    const plz=document.querySelectorAll(".plz");
    for(var i=0;i<plz.length;i++){
        const price=parseInt(plz[i].children[2].textContent.match(/(\d+)/)[0]);
        var quantity=parseInt(plz[i].children[3].children[0].value);
        if(quantity<0){
            quantity=0;
        }
        total=total+(price*quantity);
    }
    document.getElementById("demo").innerHTML=total;
}

function removerow(e){
    e.parentElement.parentElement.remove();
    updatecart();
}
