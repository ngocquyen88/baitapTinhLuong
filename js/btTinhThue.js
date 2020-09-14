

function tinhLuong() {
    let thunhap=parseFloat(document.getElementById('luong').value);
    if (thunhap < 10000000) {
        alert("Bạn không phải chịu thuế!");
        luong1Nam(thunhap);
    } else if (thunhap>=10000000 && thunhap<50000000) {
        document.getElementById("hienthi").innerHTML = ("Bạn phải chịu thuế 1 năm là:"+(0.1*thunhap*12));
        luong1Nam(thunhap*0.9);
        //alert("2345")
    } else {
        document.getElementById("hienthi").innerHTML=("Bạn phải chịu thuế 1 năm là: "+parseFloat((0.8*thunhap+0.1*0.8*thunhap)*12));
        luong1Nam(thunhap*0.88);
        //alert("aaaaaa")
    }
}

function luong1Nam(n){
    let bl=parseInt(document.getElementById('bacluong').value);
    switch (bl){
        case 1:
        {
            let bl1=(6+3*0.9+3*0.8)*n;
            document.getElementById("hienthi").innerHTML +="<br/>Tổng lương một năm của bạn là:" +bl1;
        }
        break;
        case 2:
        {
            let bl2=(3+3*0.9+6*0.8)*n;
            document.getElementById("hienthi").innerHTML +="<br/>Tổng lương một năm của bạn là:"+bl2;
        }
        break;

    }
}

