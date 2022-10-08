var btnTinhTien = document.querySelector("#btnTinhTien");
btnTinhTien.onclick = function () {
  var uBer = new UBer();
  uBer.loaiXe = document.querySelector("input[type=radio]:checked")?.value;
  uBer.soKM = document.querySelector("#soKM").value;
  uBer.thoiGianCho = document.querySelector("#thoiGianCho").value;

  if (!uBer.loaiXe || uBer.soKM === "" || uBer.thoiGianCho === "") {
    alert(
      "Vui lòng điền đầy đủ thông tin trong form dưới đây để thực hiện tính toán!"
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
    renderHoaDon(uBer);
    document.querySelector("#divThanhTien").style.display = "block";
    document.querySelector("#xuatTien").innerHTML = uBer.tongTienTaxi(uBer.soKM, uBer.donGiaKM);
  }
};

function renderHoaDon(uber) {
  var contentHTML = "";
  var donGiaDefault = uber.loaiXe === "uberX" ? 12000 : uber.loaiXe === "uberSUV" ? 14000 : 16000;
  var contentDefault = `
      <tr>
        <td>Thời gian chờ</td>
        <td>${uber.thoiGianCho} phút</td>
        <td>${uber.donGiaThoiGianCho} vnd</td>
        <td>${uber.tongTienChoTaxi()} vnd</td>
      </tr>
      <tr style="background-color: rgb(140 239 186 / 68%); color: #148a2f">
        <td>Total</td>
        <td></td>
        <td></td>
        <td>${uber.tongTienTaxi(uber.soKM, uber.donGiaKM)} vnd</td>
      </tr>
    `;
  if (Number(uber.soKM) > 0) {
    contentHTML += `
        <tr>
          <td>${uber.loaiXe}</td>
          <td>1 km</td>
          <td>${uber.tinhTienTaxiKMDauTien(uber.loaiXe)} vnd</td>
          <td>${uber.tinhTienTaxiKMDauTien(uber.loaiXe)} vnd</td>
        </tr>
      `;
    if (Number(uber.soKM) > 1 && Number(uber.soKM) < 21) {
      contentHTML += `
        <tr>
          <td>${uber.loaiXe}</td>
          <td>${Number(uber.soKM) - 1} km</td>
          <td>${uber.donGiaKM} vnd</td>
          <td>${uber.tinhTienTaxiChiTiet(Number(uber.soKM) - 1, uber.donGiaKM)} vnd</td>
        </tr>
      `;
    } else if(Number(uber.soKM) >= 21){
      contentHTML += `
        <tr>
          <td>${uber.loaiXe}</td>
          <td>19 km</td>
          <td>${donGiaDefault} vnd</td>
          <td>${uber.tinhTienTaxiDiNhoHon21KM()} vnd</td>
        </tr>
        <tr>
          <td>${uber.loaiXe}</td>
          <td>${Number(uber.soKM) - 20} km</td>
          <td>${uber.donGiaKM} vnd</td>
          <td>${uber.tinhTienTaxiChiTiet(Number(uber.soKM) - 20, uber.donGiaKM)} vnd</td>
        </tr>
      `;
    }
  } else {
    contentHTML += `
      <tr>
        <td>${uber.loaiXe}</td>
        <td>0 km</td>
        <td>0 vnd</td>
        <td>0 vnd</td>
      </tr>
    `;
  }
  document.querySelector("#tblHoaDon").innerHTML = contentHTML + contentDefault;

}
function openModal() {
  document.querySelector("#hoaDonModal").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
}
function closeModal() {
  document.querySelector("#hoaDonModal").style.display = "none";
  document.querySelector("body").style.overflow = "auto";
}
