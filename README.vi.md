# Simplefolio ⚡️

[English](README.md)

<p align="center">
  <img alt="Demo" src="./examples/example.gif" />
</p>

## 🌐 Demo

Xem trang mẫu [tại đây](https://simplefolio.js.org/)

## 🛠 Hướng dẫn

Hướng dẫn từng bước (tiếng Anh): [tại đây](https://www.youtube.com/watch?v=mQ5rvg6zGAk)

## 🚨 Forking repo này (quan trọng)

Fork repo này có thể gây lỗi nếu không làm đúng. Fork dùng để đề xuất thay đổi, còn portfolio của bạn thì nên clone hoặc tải zip rồi đẩy lên repo riêng.

Xem: [Fork A Repo](https://help.github.com/en/articles/fork-a-repo) và [Cloning a Repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

## 📝 Bắt đầu

Fork repo này rồi clone về máy, hoặc tải zip.

```bash
git clone https://github.com/cobiwave/simplefolio.git
```

Cài [Node](https://nodejs.org) và [npm](https://www.npmjs.com/) (thường đi kèm Node).

Hoặc chạy bằng Docker (không cần cài Node trên máy):

```bash
docker compose up --build
```

Mở `http://localhost:4869/`. Dừng bằng `docker compose down`.

Docker chỉ là dev server, không phải app thứ hai:

- Compose publish `4869:4869`. Container chạy Parcel với `--host 0.0.0.0 --port 4869`.
- `npm start` trên máy vẫn dùng cổng 1234. Đừng mở 1234 khi đang chạy Docker.
- Repo được bind-mount tại `/app`. Volume ẩn giữ `node_modules` của container, tách khỏi cây file trên máy.
- `CHOKIDAR_USEPOLLING=true` để lưu file vẫn reload qua bind mount.

Cài dependency:

```bash
npm install
```

Chạy dev server:

```bash
npm start
```

Server chạy xong, mở `http://localhost:1234/` để xem portfolio trên máy. Ảnh chụp bên dưới.

<p align="center">
  <img alt="Demo" src="./examples/example.png" />
</p>

### 📦 Sửa thông tin

Sửa [index.html](https://github.com/cobiwave/simplefolio/blob/master/src/index.html) cho đúng thông tin của bạn, kể cả link mạng xã hội và project trong portfolio.

### 🎨 Đổi màu

Sửa [variables.scss](https://github.com/cobiwave/simplefolio/blob/master/src/sass/abstracts/_variables.scss) để đổi màu. Mỗi project trong portfolio có màu nền riêng — đổi trong [index.html](https://github.com/cobiwave/simplefolio/blob/master/src/index.html).

### 📸 Đổi ảnh

Đổi ảnh trong thư mục `assets`. Để thêm ảnh mới, chỉ cần đặt file vào `assets` và link trong [index.html](https://github.com/cobiwave/simplefolio/blob/master/src/index.html).

### 📄 Đổi CV

Thay file `src/assets/resume.pdf` bằng CV của bạn.

### 🚀 Deploy

Khi sẵn sàng đưa portfolio lên mạng, chạy lệnh build để tạo bản production. Output nằm ở thư mục `dist`.

```bash
npm run build
```

Sau đó làm theo hướng dẫn deploy của host bạn chọn (GitHub Pages, Netlify, Vercel, …).

## 🛠 Cài đặt

1. Cài [NodeJS](https://nodejs.org/en/)
2. Cài [Git](https://git-scm.com/)
3. Chạy lệnh sau để cài [Parcel](https://parceljs.org/) toàn cục (nên dùng bản stable mới nhất)

```bash
npm install -g parcel-bundler
```

## 🔧 Template này dùng

- **[HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)** — markup
- **[Sass](https://sass-lang.com/documentation/syntax)** — CSS
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** — tương tác
- **[Parcel](https://parceljs.org/)** — bundle
- **[Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/)** — layout (fork này đã lên Bootstrap 5; xem `package.json`)
- **[Tilt.js](https://gijsroge.github.io/tilt.js/)** — hiệu ứng nghiêng

## 📚 Tài nguyên hữu ích

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [Sass](https://sass-lang.com/documentation/syntax)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Parcel](https://parceljs.org/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- [Tilt.js](https://gijsroge.github.io/tilt.js/)

## 🚀 Tính năng

- Dễ sửa — HTML, CSS, JS thuần
- Responsive
- Có thể thêm project
- Hiệu ứng nghiêng (tilt)
- One page
- Đổi màu dễ
- Ảnh minh họa project
- Liên hệ qua form
- Link mạng xã hội

## 🎁 Đóng góp

Mọi đóng góp đều được chào đón. Muốn thêm tính năng hoặc sửa lỗi, xem [issues](https://github.com/cobiwave/simplefolio/issues) hoặc tạo issue mới.

1. Fork repo
2. Clone về máy
3. Tạo nhánh: `git checkout -b ten-nhanh`
4. Thay đổi rồi commit: `git commit -m 'Mo ta ngan'`
5. Push nhánh: `git push origin ten-nhanh`
6. Mở Pull Request

> **Lưu ý**
>
> - Trước khi làm, xem [issues](https://github.com/cobiwave/simplefolio/issues) để chắc chưa ai làm cùng việc.
> - Kiểm tra xem có Pull Request nào đang làm tính năng đó chưa.
> - Nên chờ issue được gán trước khi bắt đầu, tránh trùng việc.

## 🤝 Hỗ trợ

Mọi ý kiến đều hữu ích. Muốn hỗ trợ, cho repo một ⭐️.

## 📜 Giấy phép

Dự án dùng giấy phép MIT. Chi tiết: [LICENSE.md](https://github.com/cobiwave/simplefolio/blob/master/LICENSE.md).

## 📚 Bạn cũng có thể thích

- [Next-Landing](https://github.com/cobidev/next-landing)
- [Next-Blog](https://github.com/cobidev/next-blog)
- [Next-Flask](https://github.com/cobidev/next-flask)
- [Gatsby-Simplefolio](https://github.com/cobidev/gatsby-simplefolio)
- [Gatsby-Blog](https://github.com/cobidev/gatsby-blog)
- [React-Simplefolio](https://github.com/cobidev/react-simplefolio)
- [React-Landing](https://github.com/cobidev/react-landing)

## 👋 Liên hệ

- Website [cobidev.com](https://cobidev.com)
- GitHub [@cobidev](https://github.com/cobidev)
- Twitter [@cobidev](https://twitter.com/cobidev)
- Linkedin [@cobidev](https://www.linkedin.com/in/cobidev/)
- Instagram [@cobidev](https://instagram.com/cobidev)

## 💖 Hỗ trợ

[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/cobidev)

Dự án này là open source và miễn phí. Muốn ủng hộ, có thể:

- Tặng ⭐️
- [Tài trợ](https://github.com/sponsors/cobidev) qua GitHub Sponsors

Cảm ơn.
