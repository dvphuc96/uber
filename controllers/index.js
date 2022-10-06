var arrUBer = [];
var btnTinhTien = document.querySelector("#btnTinhTien");
btnTinhTien.onclick = function () {
  var uBer = new UBer();
  uBer.loaiXe = document.querySelector("input[type=radio]:checked")?.value;
  uBer.soKM = Number(document.querySelector("#soKM").value);
  uBer.thoiGianCho = Number(document.querySelector("#thoiGianCho").value);

  if (!uBer.loaiXe) alert("Vui lòng chọn loại xe");
  if (uBer.soKM === 0) alert("Vui lòng nhập số KM");
  if (uBer.thoiGianCho === 0) alert("Vui lòng nhập thời gian chờ");

  switch (uBer.loaiXe) {
    case "uberX":
      uBer.donGiaThoiGianCho = 2000;
      uBer.soKM === 1
        ? (uBer.donGiaKM = 8000)
        : uBer.soKM > 1 && uBer.soKM < 21
        ? (uBer.donGiaKM = 12000)
        : (uBer.donGiaKM = 10000);
      break;
    case "uberSUV":
      uBer.donGiaThoiGianCho = 3000;
      uBer.soKM === 1
        ? (uBer.donGiaKM = 9000)
        : uBer.soKM > 1 && uBer.soKM < 21
        ? (uBer.donGiaKM = 14000)
        : (uBer.donGiaKM = 12000);
      break;
    case "uberBlack":
      uBer.donGiaThoiGianCho = 4000;
      uBer.soKM === 1
        ? (uBer.donGiaKM = 10000)
        : uBer.soKM > 1 && uBer.soKM < 21
        ? (uBer.donGiaKM = 16000)
        : (uBer.donGiaKM = 14000);

      break;
  }
  arrUBer.push(uBer);
  renderHoaDon(arrUBer);
  document.querySelector("#divThanhTien").style.display = "block";
  document.querySelector("#xuatTien").innerHTML = uBer.tinhCuocUBer();
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
