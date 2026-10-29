# Phú Nguyễn — Portfolio ⚡️

[English](README.md) · [![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE.md)

Portfolio cá nhân của **Phú Nguyễn**, Senior Full Stack Developer. Đây là trang web tĩnh một trang, dùng Parcel, Sass và JavaScript thuần, phát triển từ template [Simplefolio](https://github.com/cobiwave/simplefolio) của Jacobo Martínez.

<p align="center">
  <img src="src/assets/og-image.png" alt="Ảnh xem trước portfolio" width="720" />
</p>

## Tính năng

- **Giao diện liquid glass** lấy cảm hứng từ iOS 26 của Apple: kính mờ, màu đậm, có viền phản sáng trên navbar, nút, chip và thẻ.
- **Khúc xạ ở mép kính** (Chromium): mỗi bề mặt kính bẻ cong nội dung phía sau ở gần mép. Trình duyệt khác vẫn có kính mờ, chỉ không có hiệu ứng bẻ cong.
- **Phản hồi khi bấm**: nút, icon và navbar phồng lên rồi nảy về khi bấm.
- **Giao diện tối và sáng**: theo cài đặt của máy, có nút chuyển và nhớ lựa chọn của người xem.
- **Tiếng Anh / tiếng Việt**: một nút đổi toàn bộ nội dung, tiêu đề trang và meta description. Mặc định là tiếng Anh.
- **Tab bar trên mobile**: trên điện thoại, thanh điều hướng chuyển xuống đáy màn hình thành tab bar bằng kính, dễ bấm bằng ngón cái.
- **Các phần**: Hero, Giới thiệu, Kinh nghiệm (timeline), Dự án (lưới bento), Liên hệ.
- **SEO và chia sẻ**: meta description và từ khoá cho cả hai ngôn ngữ, thẻ Open Graph và Twitter card kèm ảnh xem trước 1200×630 cho Facebook, Zalo và các nền tảng khác.
- **Nhẹ**: ảnh WebP, không dùng framework CSS, sau khi build còn khoảng 27 kB CSS và 9 kB JS.
- Tôn trọng cài đặt `prefers-reduced-motion` (giảm chuyển động).

## Bắt đầu 🚀

Cần [Node.js](https://nodejs.org/) từ bản 18 trở lên (khuyên dùng 22 LTS) và npm.

```bash
npm install
npm start
```

Mở `http://localhost:1234/`.

### Docker

Không cần cài Node trên máy:

```bash
docker compose up --build
```

Mở `http://localhost:4869/`. Dừng bằng `docker compose down`.

- Compose publish `4869:4869`. Container chạy Parcel với `--host 0.0.0.0 --port 4869`.
- `npm start` trên máy vẫn dùng cổng 1234. Đừng mở 1234 khi đang chạy Docker.
- Repo được bind-mount tại `/app`. Volume ẩn giữ `node_modules` của container, tách khỏi cây file trên máy.
- `CHOKIDAR_USEPOLLING=true` để lưu file vẫn reload qua bind mount.

### Build

```bash
npm run build
```

Kết quả nằm trong `dist/`. Lệnh build cũng chép `og-image.png` vào gốc của `dist/`, để link Open Graph có địa chỉ cố định.

> Nếu dev server vẫn chạy code cũ sau khi sửa, hãy dừng server, xoá thư mục `.parcel-cache/` rồi chạy lại.

## Sửa nội dung 🔧

| Nội dung | File |
|----------|------|
| Nội dung tiếng Anh, link, dự án, kinh nghiệm | `src/index.html` |
| Nội dung tiếng Việt | `src/data/translations.js` |
| Tiêu đề trang, mô tả, từ khoá, Open Graph | phần `<head>` của `src/index.html` (tiêu đề và mô tả tiếng Việt: các key `meta.*` trong `translations.js`) |
| Ảnh đại diện, ảnh dự án, CV | `src/assets/` (`profile.webp`, `project.webp`, `resume.pdf`) |
| Màu sắc và biến giao diện | `src/sass/abstracts/_variables.scss` |
| Hiệu ứng khi cuộn | `src/data/scrollRevealConfig.js` |

### Bản dịch

Mỗi phần tử cần dịch có một key:

- `data-i18n="key"`: chữ thường.
- `data-i18n-html="key"`: chữ có thẻ HTML, ví dụ tên tô gradient ở hero.
- `data-i18n-content="key"`: thuộc tính `content` của thẻ `<meta>`.

Chữ tiếng Anh nằm ngay trong HTML. Bản tiếng Việt đặt cùng key trong `src/data/translations.js`. Khi sửa nội dung, nhớ sửa cả hai nơi.

### Kinh nghiệm

Mỗi công việc là một `<li class="timeline__item">` trong `<ol class="timeline">`, mới nhất đặt trên cùng. Chấm của công việc hiện tại dùng class `timeline__dot--current` để nhấp nháy.

### Dự án

Mỗi dự án là một `<article class="bento-card">` trong `<div class="bento">`. Thẻ đầu tiên có class `bento-card--featured` và chiếm ô lớn. Trên tablet các thẻ xếp thành 2 cột, trên điện thoại thành 1 cột.

### Màu sắc

Đổi `$primary-color` và `$secondary-color` trong `_variables.scss` để đổi gradient chủ đạo. Màu theo giao diện (nền, chữ, độ ám màu của kính) là các biến CSS trong mixin `theme-dark` và `theme-light` cùng file.

### Liquid glass

- Style: mixin `liquid-glass` trong `src/sass/abstracts/_mixins.scss`. Dùng `@include liquid-glass($blur, $shadow)` để biến một phần tử bất kỳ thành kính.
- Khúc xạ và hiệu ứng bấm: `src/scripts/liquidGlass.js`. Thêm selector vào `SELECTOR` để phần tử có khúc xạ ở mép, và vào `PRESSABLE` để nó phồng lên khi bấm.

### Ảnh xem trước khi chia sẻ

`src/assets/og-image.png` là ảnh hiện ra khi chia sẻ link, kích thước 1200×630. Nếu thay ảnh, hãy giữ đúng kích thước này.

Các thẻ `og:url`, `og:image` và `canonical` đang trỏ tới `https://phunguyen4869.github.io/simplefolio/`. Nếu bạn host ở chỗ khác, hãy sửa cả ba URL này. Facebook và Zalo cần URL đầy đủ (tuyệt đối).

Sau khi deploy, kiểm tra ảnh xem trước bằng [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/). Công cụ này cũng làm mới bộ nhớ đệm của Facebook.

## Deploy 📦

`.github/workflows/gh-pages.yml` build trang và đăng thư mục `dist/` lên GitHub Pages. Bạn cũng có thể tải `dist/` lên Netlify, Vercel hoặc bất kỳ host tĩnh nào.

## Công nghệ 🛠️

- [Parcel](https://parceljs.org/): bundler
- [Sass](https://sass-lang.com/documentation): style
- [ScrollReveal](https://scrollrevealjs.org/): hiệu ứng hiện dần khi cuộn
- SVG filter và `backdrop-filter`: hiệu ứng khúc xạ liquid glass

## Ghi công

- Template gốc: [Simplefolio](https://github.com/cobiwave/simplefolio) của [Jacobo Martínez](https://github.com/cobiwave)
- Portfolio và thiết kế lại: [Phú Nguyễn](https://github.com/phunguyen4869)

## Giấy phép 📄

MIT. Xem [LICENSE.md](LICENSE.md).
