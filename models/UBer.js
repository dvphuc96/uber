function UBer() {
  this.loaiXe = "";
  this.soKM = "";
  this.thoiGianCho = "";
  this.donGiaKM = 0;
  this.donGiaThoiGianCho = 0;
  this.tinhCuocUBer = function () {
    return (
      Number(this.soKM * this.donGiaKM) +
      Number(this.thoiGianCho * this.donGiaThoiGianCho)
    );
  };
}
