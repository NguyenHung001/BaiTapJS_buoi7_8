let arr = [];
// * Thêm mảng
function mang(){
    let number = Number(document.getElementById('input').value);
    arr.push(number);
    document.getElementById('arr').innerHTML = arr;
}
//!===========================================================>
// ? Tính tổng các số dương trong mảng
function tongSoDuong(){
    let tong = 0;
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] > 0){
            tong += arr[i]
        }
    }
    document.getElementById('result1').innerHTML = tong;
}
//!===========================================================>
// ? Đếm số dương trong mảng
function demSoDuong(){
    let dem = 0;
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] > 0){
            dem++;
        }
    }
    document.getElementById('result2').innerHTML = dem;
}
//!===========================================================>
// ? Tìm số nhỏ nhất trong mảng
function soNhoNhat(){
    let min = arr[0];
    for(var i = 1 ; i < arr.length ; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    document.getElementById('result3').innerHTML = min;
}
//!===========================================================>
// ? Tìm số dương nhỏ nhất trong mảng
function soDuongNhoNhat(){
    let soDuongmin = arr[0];
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] > 0){
            soDuongmin = arr[i];
            break;
        }
    }
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] > 0 && arr[i] < soDuongmin){
            soDuongmin = arr[i];
        }
    }
    document.getElementById('result4').innerHTML = soDuongmin;
}
//!===========================================================>
// ? Tìm số chẵn cuối cùng trong mảng
function soChanCuoiCung(){
    let soChanCuoi = -1;
    for(var i = (arr.length-1) ; i >= 0 ; i--){
        if((arr[i] % 2) == 0){
            soChanCuoi = arr[i];
            break;
        }
    }
    document.getElementById('result5').innerHTML = soChanCuoi;
}
//!===========================================================>
// ? Đổi chỗ 2 giá trị
function changeLocution(){
    let vt1 = Number(document.getElementById('vt1').value);
    let vt2 = Number(document.getElementById('vt2').value);
    let mid = 0;
    if(vt1 > arr.length || vt2 > arr.length){
        alert('Không có vị trí này !');
    }else{
        mid = arr[vt1];
        arr[vt1] = arr[vt2];
        arr[vt2] = mid;
    }
    document.getElementById('result6').innerHTML = arr;
}
//!===========================================================>
// ? Sắp xếp mảng theo thứ tự tăng dần
function sortAscending(){
    for(var i = 0 ; i < arr.length ; i++){
        let mid = 0;
        for(var j = 0 ; j < arr.length-i ; j++){
            if(arr[j] > arr[j+1]){
                mid = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = mid;
                mid = 0;
            }
            mid = 0;
        }
    }
    document.getElementById('result7').innerHTML = arr;
}
//!===========================================================>
// ? Tìm số nguyên tố đầu tiên trong mảng
function SNT(){
    let soNT = -1;
    let dem = -1;
    for(var i = 0 ; i < arr.length ; i++){
        for(var j = 1 ; j <= arr[i] ; j++){
            if((arr[i] % j) == 0){
                dem++;
            }
        }
        if(dem == 1){
            soNT = arr[i];
            break;
        }else{
            dem = -1;
        }
    }
    document.getElementById('result8').innerHTML = soNT;
}
//!===========================================================>
// ? Đếm số lượng số nguyên trong mảng
    let arrBai9 = [];
// * Thêm mảng
function mangBai9(){
    let number = Number(document.getElementById('bai9').value);
    arrBai9.push(number);
    document.getElementById('arrb9').innerHTML = arrBai9;
}
function demSoNguyen(){
    let dem = 0;
    for(var i = 0 ; i < arrBai9.length ; i++){
        if(Number.isInteger(arrBai9[i])){
            dem++;
        }
    }
    document.getElementById('result9').innerHTML = dem;
}
//!===========================================================>
// ? So sánh số lượng số âm và số dương
function soSanh(){
    let demSA = 0;
    let demSD = 0;
    let kq = document.getElementById('result10');
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] > 0){
            demSD++;
        }else{
            demSA++;
        }
    }
    if(demSA > demSD){
        kq.innerHTML = 'số âm > số dương';
    }else if(demSD > demSA){
        kq.innerHTML = 'số dương > số âm';
    }else{
        kq.innerHTML = 'số âm = số dương';
    }
}
