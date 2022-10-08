function UBer() {
  this.loaiXe = "";
  this.soKM = "";
  this.thoiGianCho = "";
  this.donGiaKM = 0;
  this.donGiaThoiGianCho = 0;
  this.tongTienTaxi = function (soKM, donGiaKM) {
    var tongTienTaxiKMDauTien = this.tinhTienTaxiKMDauTien();
    var tongTienChoTaxi = this.tongTienChoTaxi();
    var tongTienTaxiDiNhoHon21K = this.tinhTienTaxiDiNhoHon21KM();
    if (Number(soKM) === 0) {
      return tongTienChoTaxi;
    } else if (Number(soKM) === 1) {
      return tongTienTaxiKMDauTien + tongTienChoTaxi;
    } else if (Number(soKM) > 1 && Number(soKM) < 21) {
      return (
        tongTienTaxiKMDauTien + Number((soKM - 1) * donGiaKM) + tongTienChoTaxi
      );
    } else {
      return (
        tongTienTaxiKMDauTien +
        tongTienTaxiDiNhoHon21K +
        Number((soKM - 20) * donGiaKM) +
        tongTienChoTaxi
      );
    }
  };
  this.tongTienChoTaxi = function () {
    return Number(this.thoiGianCho * this.donGiaThoiGianCho);
  };
  this.tinhTienTaxiKMDauTien = function (loaiXe) {
    var tongTien = 0;
    return this.loaiXe === "uberX"
      ? (tongTien = 8000)
      : this.loaiXe === "uberSUV"
      ? (tongTien = 9000)
      : (tongTien = 10000);
  };
  this.tinhTienTaxiDiNhoHon21KM = function () {
    var tongTien = 0;
    return this.loaiXe === "uberX"
      ? (tongTien = 19 * 12000)
      : this.loaiXe === "uberSUV"
      ? (tongTien = 19 * 14000)
      : (tongTien = 19 * 16000);
  };
  this.tinhTienTaxiChiTiet = function (soKM, donGia) {
    return Number(soKM * donGia);
  };
}
