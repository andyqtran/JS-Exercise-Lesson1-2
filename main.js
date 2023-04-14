/*
Bài 1: Tính tiền lương nhân viên
Input: lương một ngày, số ngày làm
Processing: 
    - Tạo biến daySalary nhận input lương một ngày khi click vào button.
    - Taọ biến day nhận input số ngày làm khi click vào button.
    - Tạo biên salary = daySalary * day khi click vào button.
    - gán biến salary cho inner của thẻ #salary khi click vào button.
Output: Lương
*/
document.getElementById("salaryCalc").onclick = function () {
    var daySalary = document.getElementById("daySalary").value;
    var day = document.getElementById("day").value;
    var salary = day * daySalary;
    document.getElementById(
        "salary"
    ).innerHTML = `${new Intl.NumberFormat().format(salary)} VND`;
};

/*
Bài 2: Tính giá trị trung bình
Input: Giá trị của 5 số
Processing: 
    - Tạo biến number1 nhận giá trị của input khi click vào button
    - Tạo biến number2 nhận giá trị của input khi click vào button
    - Tạo biến number3 nhận giá trị của input khi click vào button
    - Tạo biến number4 nhận giá trị của input khi click vào button
    - Tạo biến number5 nhận giá trị của input khi click vào button
    - Tạo biến avr = (number1 + number1 + number1 + number1 + number1) / 5;
    - gán biến avr cho inner của thẻ #avr khi click vào button
Output:
Giá trị trung bình
*/
document.getElementById("avrCalc").onclick = function () {
    const COUNT = 5;
    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    var number3 = document.getElementById("number3").value * 1;
    var number4 = document.getElementById("number4").value * 1;
    var number5 = document.getElementById("number5").value * 1;

    var avr = (
        (number1 + number2 + number3 + number4 + number5) /
        COUNT
    ).toFixed(2);

    document.getElementById("avr").innerHTML = avr;
};

/*
Bài 3: Quy đổi tiền
Input: tiền USD
Processing:
    - Tạo hằng số RATE: 23500
    - tạo biến usd nhận giá trị của input khi click vào button
    - tạo biến vnd = usd * RATE khi click vào button
    - gán vnd cho inner của thẻ #vnd khi click vào button
Output: Tiền VND
*/

document.getElementById("vndCalc").onclick = function () {
    const RATE = 23500;
    var usd = document.getElementById("usd").value;
    var vnd = `${new Intl.NumberFormat().format(usd * RATE)} VND`;
    document.getElementById("vnd").innerHTML = vnd;
};

/*
Bài 4: Tính diện tích, chu vi hình chữ nhật
Input: Chiều dài, chiều rộng
Processing: 
    - Tạo biến edge1 nhận giá trị chiều dài khi click button
    - Tạo biến edge2 nhận giá trị chiều rộng khi click button
    - tạo biến area = edge1 * edge2
    - tạo biến peri = (edge1 + edge2) *2;
    - gán area và peri cho inner của thẻ #areaPeri
Output:
    - area và peri
 */
document.getElementById('recCalc').onclick = function(){
    var edge1 = document.getElementById('edge1').value;
    var edge2 = document.getElementById('edge2').value;
    var area = edge1 * edge2;
    var peri = (edge1 *1 + edge2 *1) *2;
    document.getElementById('areaPeri').innerHTML = `Diện tích là: ${area} | Chu vi là: ${peri}`;
}

/*
Input: Số có 2 chữ số
Processing:
    - Tạo biến num nhận giá trị của input #num khi click vào button
    - Tạo biến unit là chữ số hàng đơn vị, unit = num % 10;
    - Tạo biến tens là chữ số hàng chục, tens = Math.floor(num / 10);
    - Tạo biến sum = unit + tens;
Output: Sum
*/ 

document.getElementById('sumDigitalCalc').onclick = function(){
    var num = document.getElementById("num").value;
    var unit = num % 10;
    var tens = Math.floor(num/10);
    var sum = unit*1 + tens*1;
    document.getElementById('sumDigital').innerHTML = sum;
}