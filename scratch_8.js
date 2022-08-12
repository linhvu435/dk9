function so() {
    let a = parseInt(document.getElementById("aa").value);
    let ngay;
    switch (a) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
         ngay ="co 31 ngay";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
         ngay = "co 30 ngay";
            break;
        case 2:
         ngay = " co 28 hoac 29 ngay";
            break;

    }
    document.getElementById('hienthi').innerHTML = ngay ;
}
