function so(number)
{
    document.getElementById("p1").value += number;
}
function pheptinh()
{
   let ketqua = eval(document.getElementById('p1').value);
    document.getElementById('p1').value = ketqua;
}
function xoa()
{
    document.getElementById('p1').value = "";

}