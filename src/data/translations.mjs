// Vietnamese copy, keyed like the data-i18n attributes in index.html:
//   data-i18n="key"         replaces the element's text
//   data-i18n-html="key"    replaces its content, markup allowed
//   data-i18n-<attr>="key"  replaces that attribute (content, alt, aria-label…)
// English lives in the HTML, so only "vi" is here. scripts/build-vi.mjs
// merges this into src/vi.html and fails on a missing or unused key.
export default {
  vi: {
    // The page's language, and the link to the English page
    "lang.this": "vi",
    "lang.other": "en",
    "lang.otherCode": "EN",
    "lang.otherHref": "index.html",
    "lang.otherLabel": "Switch to English",

    "meta.title": "Phú Nguyễn | Lập trình viên Full Stack",
    "meta.description":
      "Phú Nguyễn — Senior Full Stack Developer làm việc với PHP, Laravel, VueJS, Golang và AWS. Xây dựng sản phẩm web nhanh và ổn định.",
    "meta.ogDescription":
      "Lập trình viên Full Stack — PHP, Laravel, VueJS, Golang, AWS.",
    "meta.ogImageAlt": "Phú Nguyễn — Lập trình viên Full Stack",
    "meta.locale": "vi_VN",
    "meta.localeAlternate": "en_US",

    "nav.top": "Về đầu trang",
    "nav.primary": "Điều hướng chính",
    "nav.theme": "Đổi giao diện sáng/tối",
    "nav.about": "Giới thiệu",
    "nav.experience": "Kinh nghiệm",
    "nav.projects": "Dự án",
    "nav.contact": "Liên hệ",

    "hero.badge": "Sẵn sàng cho cơ hội mới",
    "hero.title":
      'Xin chào, tôi là <span class="text-gradient">Phú Nguyễn</span>.<br />Tôi tạo ra những sản phẩm người dùng yêu thích.',
    "hero.subtitle":
      "Senior Full Stack Developer xây dựng những trải nghiệm nhanh, ổn định và được thiết kế chỉn chu — từ database đến từng pixel.",
    "hero.ctaWork": "Xem dự án",
    "hero.ctaContact": "Liên hệ với tôi",
    "hero.scroll": "Cuộn tới phần Giới thiệu",

    "about.eyebrow": "01 — Giới thiệu",
    "about.title": "Đôi nét về tôi",
    "about.text1":
      "Đây là nơi bạn giới thiệu về bản thân. Càng mô tả rõ về mình, bạn càng có nhiều cơ hội!",
    "about.text2": "Thông tin thêm về bạn: sở thích và mục tiêu của bạn.",
    "about.portrait": "Chân dung Phú Nguyễn",
    "about.stack": "Công nghệ sử dụng",
    "about.resume": "Xem CV",

    "experience.eyebrow": "02 — Kinh nghiệm",
    "experience.title": "Nơi tôi đã làm việc",
    "experience.present": "Hiện tại",
    "experience.smartgift.text":
      "Mô tả vai trò của bạn: những sản phẩm bạn đã xây dựng, vấn đề bạn đã giải quyết và tác động của bạn tới đội ngũ.",
    "experience.bigin.text":
      "Mô tả vai trò của bạn: những sản phẩm bạn đã xây dựng, vấn đề bạn đã giải quyết và tác động của bạn tới đội ngũ.",

    "projects.eyebrow": "03 — Dự án",
    "projects.title": "Dự án tiêu biểu",
    "projects.p0.text":
      "Mô tả dự án trong 280 ký tự: vấn đề cần giải quyết, kỹ năng bạn học được hoặc củng cố, và cách bạn tiếp cận giải pháp.",
    "projects.p1.text":
      "Thể hiện sự cam kết và kiên trì. Bạn đang giới thiệu chính mình chứ không phải dự án: hãy nêu framework và nền tảng đã dùng.",
    "projects.p2.text":
      "Nếu là dự án nhóm, hãy nói rõ: điều đó thể hiện kỹ năng giao tiếp và lãnh đạo.",
    "projects.p0.alt": "Ảnh xem trước Project Title 0",
    "projects.p1.alt": "Ảnh xem trước Project Title 1",
    "projects.p2.alt": "Ảnh xem trước Project Title 2",
    "projects.live": "Xem demo",
    "projects.source": "Mã nguồn",

    "contact.eyebrow": "04 — Liên hệ",
    "contact.title":
      'Cùng nhau tạo nên điều <span class="text-gradient">tuyệt vời</span>.',
    "contact.text": "[Đặt lời kêu gọi hành động của bạn ở đây]",
    "contact.cta": "Gửi lời chào",
  },
};
