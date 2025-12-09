import React from "react";

// Personal website single-file React component (Tailwind CSS assumed in project)
// Modern, bright & professional layout in Vietnamese

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7ED] to-[#FFF3F0] text-gray-800 font-sans">
      <header className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-[#FFE082] rounded-full flex items-center justify-center shadow-md">
            <span className="text-xl font-bold text-[#A33]">TT</span>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold">Trịnh Thị Hồng Mơ</h1>
            <p className="text-sm text-gray-600">Giảng viên & Nhà nghiên cứu - Chăn nuôi / Thú y</p>
          </div>
        </div>

        <nav className="mt-4 md:mt-0 flex gap-4">
          <a href="#about" className="text-sm font-medium text-[#C62828]">Giới thiệu</a>
          <a href="#research" className="text-sm font-medium text-[#C62828]">Nghiên cứu</a>
          <a href="#publications" className="text-sm font-medium text-[#C62828]">Công bố</a>
          <a href="#contact" className="text-sm font-medium text-[#C62828]">Liên hệ</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - About */}
        <section id="about" className="md:col-span-2 bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold mb-3">Giới thiệu ngắn</h2>
          <p className="text-gray-700 leading-relaxed">Tôi là <strong>Trịnh Thị Hồng Mơ</strong>, sinh ngày <strong>23/03/1993</strong>. Hiện đang công tác tại <strong>Trường Đại học Tây Đô</strong> với chức danh nghề nghiệp: <strong>Giảng viên</strong>. Lĩnh vực chuyên môn chính: <strong>Chăn nuôi, Thú y</strong>. Tôi tham gia nhiều dự án nghiên cứu và có các công bố khoa học trong nước và quốc tế liên quan đến chăn nuôi, bệnh thú y và ứng dụng vi sinh trong chăn nuôi.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-gray-100">
              <h3 className="font-semibold">Thông tin cá nhân</h3>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li><strong>Họ và tên:</strong> Trịnh Thị Hồng Mơ</li>
                <li><strong>Ngày sinh:</strong> 23/03/1993</li>
                <li><strong>Điện thoại:</strong> 0842.621.999</li>
                <li><strong>Email:</strong> <a href="mailto:tthmo@tdu.edu.vn" className="text-[#C62828]">tthmo@tdu.edu.vn</a></li>
                <li><strong>Địa chỉ:</strong> A10-24 Đường số 7 - Khu dân cư Hoàng Quân, Phường Cái Răng, Tp. Cần Thơ</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border border-gray-100">
              <h3 className="font-semibold">Nơi làm việc</h3>
              <p className="mt-2 text-sm text-gray-700">
                <strong>Tên tổ chức:</strong> Trường Đại học Tây Đô<br/>
                <strong>Người đứng đầu:</strong> Trần Công Luận<br/>
                <strong>Điện thoại nơi làm việc:</strong> 02923.840.666<br/>
                <strong>Địa chỉ:</strong> Số 68 đường Trần Chiên, khu vực Thạnh Mỹ, phường Cái Răng, thành phố Cần Thơ
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Quá trình đào tạo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-[#FFF8E1] rounded-lg">
                <h4 className="font-medium">Đại học</h4>
                <p className="text-sm">Đại học Cần Thơ — Chăn nuôi (2016)</p>
              </div>
              <div className="p-4 bg-[#FFF8E1] rounded-lg">
                <h4 className="font-medium">Thạc sỹ</h4>
                <p className="text-sm">Đại học Cần Thơ — Thú y (2018)</p>
              </div>
            </div>
          </div>

          <div id="research" className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Các nhiệm vụ & Dự án tiêu biểu</h3>
            <p className="text-sm text-gray-700">Ví dụ: <em>Ứng dụng giải pháp công nghệ trong kiểm soát tác nhân gây giảm đẻ và trứng trắng trên chim cút tại tỉnh Đồng Tháp</em> (như hồ sơ nhiệm vụ đăng ký).</p>
          </div>
        </section>

        {/* Right column - Contact & Publications */}
        <aside className="flex flex-col gap-4">
          <div id="contact" className="p-6 bg-white/70 rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg">Liên hệ nhanh</h3>
            <p className="text-sm mt-3">Nếu bạn muốn trao đổi chuyên môn, hợp tác nghiên cứu hoặc mời thuyết trình, vui lòng liên hệ:</p>
            <ul className="mt-3 text-sm space-y-1 text-gray-700">
              <li><strong>Điện thoại:</strong> 0842.621.999</li>
              <li><strong>Email:</strong> <a href="mailto:tthmo@tdu.edu.vn" className="text-[#C62828]">tthmo@tdu.edu.vn</a></li>
              <li><strong>Địa chỉ công tác:</strong> Trường Đại học Tây Đô, Số 68 đường Trần Chiên, Cần Thơ</li>
            </ul>

            <div className="mt-4 flex gap-2">
              <a href="mailto:tthmo@tdu.edu.vn" className="px-4 py-2 rounded-lg bg-[#FF7043] text-white text-sm font-medium">Gửi email</a>
              <a href="#publications" className="px-4 py-2 rounded-lg border border-[#FF7043] text-[#FF7043] text-sm font-medium">Xem công bố</a>
            </div>
          </div>

          <div id="publications" className="p-6 bg-white/70 rounded-2xl shadow-sm overflow-auto max-h-96">
            <h3 className="font-semibold text-lg">Công bố tiêu biểu (5 năm gần nhất)</h3>
            <ol className="mt-3 text-sm list-decimal list-inside space-y-2 text-gray-700">
              <li>Effects of wilting and rice bran supplementation on the quality of taro (Colocasia esculenta) leaf and petiole silage. (Livestock Research for Rural Development, 2020)</li>
              <li>Comparison of the effects of two poultry housing types on reproductive performance of tre chicken. (Journal of Animal Husbandry Sciences and Technics, 2021)</li>
              <li>Application of Phage to Control Escherichia coli Infection in Native Noi Chickens. (Advances in Animal and Veterinary Sciences, 2022)</li>
              <li>The effect of different media and temperature conditions for Salmonella bacteriophage preservation. (Veterinary Integrative Sciences, Chiang Mai University, 2022)</li>
              <li>Những công bố liên quan 2023-2025 trong các tạp chí trong nước và quốc tế (liệt kê chi tiết trong hồ sơ).</li>
            </ol>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#FFF3E0] to-[#FFF8E1] rounded-2xl shadow-sm text-sm">
            <h4 className="font-semibold mb-2">Tải hồ sơ</h4>
            <p className="text-gray-700">Bạn có thể yêu cầu bản CV / bản mô tả công việc đầy đủ qua email.</p>
            <a href="mailto:tthmo@tdu.edu.vn?subject=Yêu%20cầu%20CV" className="inline-block mt-3 px-4 py-2 bg-[#FFC107] rounded-lg font-medium">Yêu cầu CV</a>
          </div>
        </aside>
      </main>

      <footer className="mt-8 border-t border-gray-200 py-6">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Trịnh Thị Hồng Mơ — Trường Đại học Tây Đô</p>
          <p className="mt-2">Địa chỉ: Số 68 đường Trần Chiên, khu vực Thạnh Mỹ, phường Cái Răng, thành phố Cần Thơ</p>
        </div>
      </footer>
    </div>
  );
}
