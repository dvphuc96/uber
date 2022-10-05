function UBer() {
  this.loaiXe = "";
  this.soKM = "";
  this.thoiGianCho = "";
  this.dongiaKM = 0;
  this.donGiaThoiGianCho = 0;
  this.tinhCuocUBer = function () {
    return (
      Number(this.soKM * this.dongiaKM) +
      Number(this.thoiGianCho * this.donGiaThoiGianCho)
    );
  };
}
