var arrUBer = [];
var btnTinhTien = document.querySelector("#btnTinhTien");
btnTinhTien.onclick = function () {
  var uBer = new UBer();
  uBer.loaiXe = document.querySelector("input[type=radio]:checked")?.value;
  uBer.soKM = document.querySelector("#soKM").value;
  uBer.thoiGianCho = document.querySelector("#thoiGianCho").value;

  if (!uBer.loaiXe || uBer.soKM === "" || uBer.thoiGianCho === "") {
    alert(
      "Vui lòng điền đầy đủ thông tin trong form dưới đây để thực hiện tính toán"
    );
    return;
  } else {
    switch (uBer.loaiXe) {
      case "uberX":
        uBer.donGiaThoiGianCho = 2000;
        Number(uBer.soKM) === 1
          ? (uBer.donGiaKM = 8000)
          : Number(uBer.soKM) > 1 && Number(uBer.soKM) < 21
          ? (uBer.donGiaKM = 12000)
          : (uBer.donGiaKM = 10000);
        break;
      case "uberSUV":
        uBer.donGiaThoiGianCho = 3000;
        Number(uBer.soKM) === 1
          ? (uBer.donGiaKM = 9000)
          : Number(uBer.soKM) > 1 && Number(uBer.soKM) < 21
          ? (uBer.donGiaKM = 14000)
          : (uBer.donGiaKM = 12000);
        break;
      case "uberBlack":
        uBer.donGiaThoiGianCho = 4000;
        Number(uBer.soKM) === 1
          ? (uBer.donGiaKM = 10000)
          : Number(uBer.soKM) > 1 && Number(uBer.soKM) < 21
          ? (uBer.donGiaKM = 16000)
          : (uBer.donGiaKM = 14000);

        break;
    }
    arrUBer.push(uBer);
    renderHoaDon(arrUBer);
    document.querySelector("#divThanhTien").style.display = "block";
    document.querySelector("#xuatTien").innerHTML = uBer.tinhCuocUBer();
  }
};

function renderHoaDon(listUBer) {
  var contentHTML = "";
  for (var index = 0; index < listUBer.length; index++) {
    var uber = listUBer[index];
    contentHTML += `
    <tr>
      <td>${uber.loaiXe}</td>
      <td>${uber.soKM} km</td>
      <td>${uber.donGiaKM} vnd</td>
      <td>${uber.thoiGianCho} phút</td>
      <td>${uber.donGiaThoiGianCho} vnd</td>
      <td>${uber.tinhCuocUBer()} vnd</td>
    </tr>
    `;
    document.querySelector("#tblHoaDon").innerHTML = contentHTML;
  }
}
function openModal() {
  document.querySelector("#hoaDonModal").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
}
function closeModal() {
  document.querySelector("#hoaDonModal").style.display = "none";
  document.querySelector("body").style.overflow = "auto";
}
