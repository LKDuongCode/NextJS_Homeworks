const path = require("path");
module.exports = {
  //thêm cấu hình sử dụng cpn Image.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  //thêm phần cấu hình sass
  sassOptions: {
    includePaths: [path.join(__dirname, "style")],
  },
};
