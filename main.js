// Bài 1
/**
 * khối 1:
 * diemChuan,diemMonThu1,diemMonThu2,diemMonThu3,doiTuong,khuVuc
 * 
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * B2: Tính Tổng Điểm
 * tongDiem=diemMonThu1+diemMonThu2+diemMonThu3+doiTuong+khuVuc;
 * Nếu 1 trong 3 số điểm có điểm =0 => điểm không hợp lệ
 * B3: so sánh với điểm chuẩn
 *  + Nếu tổng điểm > điểm chuẩn thì xuất ra bạn đã đậu.
 *  + Nếu tổng điểm < điểm chuẩn thì xuất ra bạn đã gớt.
 * 
 * khối 3: xuất ra kết quả đậu hay gớt và tổng điểm.
 * 
 */
function tinhDiemDH() {
    var diemChuan = document.getElementById("diemChuan").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
    var diemMonThu1 = document.getElementById("diemMonThu1").value;
    var diemMonThu2 = document.getElementById("diemMonThu2").value;
    var diemMonThu3 = document.getElementById("diemMonThu3").value;
    var tongDiem = Number(diemMonThu1) + Number(diemMonThu2) + Number(diemMonThu3) + Number(doiTuong) + Number(khuVuc);

    if (diemMonThu1 == 0 || diemMonThu2 == 0 || diemMonThu3 == 0) {
        document.getElementById("txtResult").innerHTML = "Bạn đã gớt !";
    } else if (diemChuan > 30 || diemChuan <= 0) {
        document.getElementById("txtResult").innerHTML = "Điểm chuẩn không hợp lệ!";
    } else if (diemMonThu1 < 0 || diemMonThu1 > 10 || diemMonThu2 < 0 || diemMonThu2 > 10 || diemMonThu3 < 0 || diemMonThu3 > 10) {
        document.getElementById("txtResult").innerHTML = "Điểm thi không hợp lệ!";
    } else {
        if (tongDiem < diemChuan) {
            document.getElementById("txtResult").innerHTML = "Bạn đã gớt. " + "Tổng điểm là: " + Number(tongDiem) + "đ";
        } else {
            document.getElementById("txtResult").innerHTML = "Bạn đã đậu. " + "Tổng điểm là: " + Number(tongDiem) + "đ";
        }
    }
}
document.getElementById("btnResult").onclick = tinhDiemDH;


// Bài 2
/**
 * khối 1:
 * hoTen,kw
 * 
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * 
 * B2: Tính Tổng Điểm
 * Tính tiền điện theo số kw
 * Nếu kw < 0 thì nhập lại.
 * 
 * B3:
 * 
 * khối 3: xuất ra họ tên người dùng và tổng tiền điện.
 * 
 */

function tienDien() {
    var hoTen = document.getElementById("hoTen").value;
    var kw = document.getElementById("soKW").value;
    const tienDien_50kw_dau = 500;
    const tienDien_50kw_ke = 650;
    const tienDien_100kw_ke = 850;
    const tienDien_150kw_ke = 1100;
    var tongTien=0;
    if (kw <= 0) {
        alert("Số kw không hợp lệ!");
    } else {
        if (kw <= 50) {
            tongTien =kw*tienDien_50kw_dau;
        }else if(kw>50&&kw<=100){
            tongTien =50*tienDien_50kw_dau+(kw-50)*tienDien_50kw_ke;
        }else if(kw>100&&kw<=200){
            tongTien =50*tienDien_50kw_dau+50*tienDien_50kw_ke+(kw-100)*tienDien_100kw_ke;
        }else if(kw>200&&kw<=350){
            tongTien =50*tienDien_50kw_dau+50*tienDien_50kw_ke+100*tienDien_100kw_ke+(kw-200)*tienDien_150kw_ke;
        }else{
            tongTien =50*tienDien_50kw_dau+50*tienDien_50kw_ke+100*tienDien_100kw_ke+150*tienDien_150kw_ke+(kw-350)*1300;
        }
        document.getElementById("txtTienDien").innerHTML = "Họ tên: " + hoTen + "; Tiền điện: " + new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(tongTien);
    }
}
document.getElementById("btnTienDien").onclick = tienDien;

// Bài 3
/**
 * khối 1:
 * hoTen,thuNhap,soNguoiPhuThuoc
 * Thuế thu nhập các nhân phải chịu là:
 * tienThuNhapChiuThue=thuNhap-4e+6-16e+5*soNguoiPhuThuoc;
 * 
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * 
 * B2: Tính Tổng Điểm
 * Tính tiền thuế theo khoảng thu nhập cá nhân của người dùng
 * 
 * B3:
 * 
 * khối 3: xuất ra họ tên người dùng và số tiền thuế.
 * 
 */
function tienThue(){
    var hoTen=document.getElementById("nguoiChiuThue").value;
    var thuNhap=document.getElementById("thuNhap").value;
    var soNguoiPhuThuoc=document.getElementById("soNguoiPhuThuoc").value;
    const den_60 =0.05;
    const tu_60_den_120 =0.1;
    const tu_120_den_210 =0.15;
    const tu_210_den_384 =0.2;
    const tu_384_den_624 =0.25;
    const tu_624_den_960 =0.3;
    const tren_960 =0.35;
    var tienThuNhapChiuThue=thuNhap-4e+6-16e+5*soNguoiPhuThuoc;
    var tienChiuThue=0;
    if(thuNhap<0){
        alert("Tiền thu nhập hằng năm không hợp lệ!")
    }else if(thuNhap<=60e+6){
        tienChiuThue=tienThuNhapChiuThue*den_60;
    }else if(thuNhap>60e+6&&thuNhap<=120e+6){
        tienChiuThue=tu_60_den_120*tienThuNhapChiuThue;
    }else if(thuNhap>120e+6&&thuNhap<=210e+6){
        tienChiuThue=tu_120_den_210*tienThuNhapChiuThue;
    }else if(thuNhap>210e+6&&thuNhap<=384e+6){
        tienChiuThue=tienThuNhapChiuThue*tu_210_den_384;
    }else if(thuNhap>384e+6&&thuNhap<=624e+6){
        tienChiuThue=tienThuNhapChiuThue*tu_384_den_624;
    }else if(thuNhap>624e+6&&thuNhap<960e+6){
        tienChiuThue=tienThuNhapChiuThue*tu_624_den_960;
    }else if(thuNhap>960e+6){
        tienChiuThue=tienThuNhapChiuThue*tren_960;
    }
    
    document.getElementById("txtTienThue").innerHTML="Họ tên: "+hoTen+"; Tiền thuế thu nhập cá nhân là: "+ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(tienChiuThue);
}
document.getElementById("btnTienThue").onclick=tienThue;

// Bài 4
/**
 * khối 1:
 * hoTen,thuNhap,soNguoiPhuThuoc
 * Thuế thu nhập các nhân phải chịu là:
 * tienThuNhapChiuThue=thuNhap-4e+6-16e+5*soNguoiPhuThuoc;
 * 
 * 
 * Khối 2:
 * B1: Lấy gtri từ form (khi click vào btn Tính Nào)
 * 
 * B2: Tính Tổng Điểm
 * Tính tiền thuế theo khoảng thu nhập cá nhân của người dùng
 * 
 * B3:
 * 
 * khối 3: xuất ra họ tên người dùng và số tiền thuế.
 * 
 */
function tienCap(){
    var loaiKH=document.getElementById("loaiKH").value;
    var maKH=document.getElementById("maKH").value;
    var soKenh=document.getElementById("soKenhCC").value;
    var soKetNoi=document.getElementById("soKetNoi").value;
    var tienCapPhaiTra=0;

    var phi_xu_ly_hoa_don_NHA_DAN=4.5;
    var phi_dich_vu_NHA_DAN=20.5;
    var phi_kenh_cao_cap_NHA_DAN=7.5;

    var phi_xu_ly_hoa_don_DOANH_NGHIEP=15;
    var phi_dich_vu_DOANH_NGHIEP=75;
    var phi_kenh_cao_cap_DOANH_NGHIEP=50;

    if(loaiKH=="0"){
        alert("Vui lòng chọn loại khách hàng!")
    }else if(soKenh<0||soKetNoi<0){
        alert("Số kênh hoặc số kết nối (doanh nghiệp) không hợp lệ! ")
    }
    else if(loaiKH=="nhaDan"){
        tienCapPhaiTra=phi_xu_ly_hoa_don_NHA_DAN+phi_dich_vu_NHA_DAN+phi_kenh_cao_cap_NHA_DAN*soKenh;
    }else if(loaiKH=="doanhNghiep"){
        if(soKetNoi<=10){
            tienCapPhaiTra=phi_xu_ly_hoa_don_DOANH_NGHIEP+phi_dich_vu_DOANH_NGHIEP+phi_kenh_cao_cap_DOANH_NGHIEP*soKenh;
        }else{
            tienCapPhaiTra=phi_xu_ly_hoa_don_DOANH_NGHIEP+phi_dich_vu_DOANH_NGHIEP+phi_kenh_cao_cap_DOANH_NGHIEP*soKenh+(soKetNoi-10)*5;
        }
    }
    document.getElementById("txtTienCap").innerHTML="Mã khách hàng: "+maKH+"Tiền cáp: "+new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(tienCapPhaiTra);
}
document.getElementById("btnTienCap").onclick=tienCap;
