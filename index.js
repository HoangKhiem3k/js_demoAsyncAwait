const main = () => {
  axios({
    url: "http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
    method: "GET",
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {});

  axios({
    url: `http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/555`,
    method: "GET",
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {});
};
