function val(){
    const a=String(document.getElementById("name").value);
    const b=String(document.getElementById("id-1").value);
    const c=String(document.getElementById("unit").value);

    if(a==""){
        alert("Name is required");
        a.focus();
        return false;
    }

    if(b==""){
        alert("id is required");
        b.focus();
        return false;
    }


    if(c<<100){
        let unit=c*2;
        document.getElementById("ans").innerHTML=unit;
    }
}