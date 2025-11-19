// Dữ liệu câu hỏi trắc nghiệm Hiến pháp
const rawQuizData = {
    "Qj": [
        {
            "question": "Theo Hiến pháp, cơ quan nào là cơ quan đại biểu cao nhất của Nhân dân?",
            "hint": "Đây là cơ quan quyền lực nhà nước cao nhất, thực hiện quyền lập hiến và lập pháp.",
            "yB": [
                {"text": "Chính phủ", "nv": false, "zK": "Chính phủ là cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp, không phải là cơ quan đại biểu cao nhất."},
                {"text": "Quốc hội", "nv": true, "zK": "Điều 69 quy định Quốc hội là cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất."},
                {"text": "Chủ tịch nước", "nv": false, "zK": "Chủ tịch nước là người đứng đầu Nhà nước, thay mặt nước về đối nội và đối ngoại."},
                {"text": "Mặt trận Tổ quốc Việt Nam", "nv": false, "zK": "Mặt trận Tổ quốc là tổ chức liên minh chính trị, cơ sở chính trị của chính quyền nhân dân."}
            ]
        },
        {
            "question": "Quốc hội thực hiện quyền giám sát tối cao đối với hoạt động của cơ quan nào?",
            "hint": "Đối tượng giám sát bao gồm toàn bộ hệ thống các cơ quan công quyền.",
            "yB": [
                {"text": "Chỉ riêng Chính phủ", "nv": false, "zK": "Quyền giám sát tối cao của Quốc hội không chỉ giới hạn ở Chính phủ mà bao trùm toàn bộ bộ máy Nhà nước."},
                {"text": "Các tổ chức kinh tế", "nv": false, "zK": "Quốc hội giám sát hoạt động của Nhà nước, không trực tiếp giám sát các tổ chức kinh tế tư nhân."},
                {"text": "Nhà nước", "nv": true, "zK": "Điều 69 quy định Quốc hội thực hiện quyền giám sát tối cao đối với hoạt động của Nhà nước."},
                {"text": "Các tổ chức xã hội", "nv": false, "zK": "Đối tượng giám sát tối cao của Quốc hội là hoạt động của Nhà nước theo quy định của Hiến pháp."}
            ]
        },
        {
            "question": "Nhiệm kỳ của mỗi khóa Quốc hội là bao nhiêu năm?",
            "hint": "Con số này tương ứng với kế hoạch phát triển kinh tế - xã hội thường thấy.",
            "yB": [
                {"text": "4 năm", "nv": false, "zK": "Đây không phải là thời gian nhiệm kỳ quy định của Quốc hội Việt Nam."},
                {"text": "5 năm", "nv": true, "zK": "Khoản 1 Điều 71 quy định nhiệm kỳ của mỗi khóa Quốc hội là năm năm."},
                {"text": "6 năm", "nv": false, "zK": "Sáu năm thường là nhiệm kỳ của Thượng nghị sĩ ở một số quốc gia khác, không phải Quốc hội Việt Nam."},
                {"text": "3 năm", "nv": false, "zK": "Thời gian này quá ngắn so với quy định của Hiến pháp."}
            ]
        },
        {
            "question": "Cơ quan nào có quyền làm Hiến pháp và sửa đổi Hiến pháp?",
            "hint": "Đây là cơ quan duy nhất có quyền lập hiến và lập pháp.",
            "yB": [
                {"text": "Chính phủ", "nv": false, "zK": "Chính phủ có quyền trình dự án luật, pháp lệnh nhưng không có quyền làm Hiến pháp."},
                {"text": "Quốc hội", "nv": true, "zK": "Khoản 1 Điều 70 quy định Quốc hội có nhiệm vụ và quyền hạn làm Hiến pháp và sửa đổi Hiến pháp."},
                {"text": "Ủy ban thường vụ Quốc hội", "nv": false, "zK": "Ủy ban thường vụ Quốc hội ra pháp lệnh, nhưng quyền làm Hiến pháp thuộc về toàn thể Quốc hội."},
                {"text": "Tòa án nhân dân tối cao", "nv": false, "zK": "Tòa án là cơ quan xét xử, không có chức năng lập hiến."}
            ]
        },
        {
            "question": "Việc kéo dài nhiệm kỳ của một khóa Quốc hội không được quá bao nhiêu tháng (trừ trường hợp có chiến tranh)?",
            "hint": "Thời gian này tương đương với một năm dương lịch.",
            "yB": [
                {"text": "6 tháng", "nv": false, "zK": "Thời gian này ngắn hơn quy định tối đa cho phép."},
                {"text": "12 tháng", "nv": true, "zK": "Khoản 3 Điều 71 quy định việc kéo dài nhiệm kỳ không được quá mười hai tháng, trừ trường hợp có chiến tranh."},
                {"text": "18 tháng", "nv": false, "zK": "Đây là khoảng thời gian dài hơn mức quy định của Hiến pháp trong điều kiện thường."},
                {"text": "24 tháng", "nv": false, "zK": "Thời gian 2 năm là quá dài cho việc kéo dài nhiệm kỳ trong điều kiện không có chiến tranh."}
            ]
        },
        {
            "question": "Ai là người chủ tọa các phiên họp của Quốc hội?",
            "hint": "Người đứng đầu cơ quan lập pháp sẽ điều hành các phiên họp của cơ quan này.",
            "yB": [
                {"text": "Chủ tịch nước", "nv": false, "zK": "Chủ tịch nước có thể tham dự nhưng không chủ tọa phiên họp Quốc hội."},
                {"text": "Thủ tướng Chính phủ", "nv": false, "zK": "Thủ tướng Chính phủ là người đứng đầu cơ quan hành pháp, không điều hành phiên họp Quốc hội."},
                {"text": "Chủ tịch Quốc hội", "nv": true, "zK": "Điều 72 quy định Chủ tịch Quốc hội chủ tọa các phiên họp của Quốc hội."},
                {"text": "Tổng Bí thư", "nv": false, "zK": "Tổng Bí thư là lãnh đạo Đảng, chức danh chủ tọa Quốc hội thuộc về Chủ tịch Quốc hội."}
            ]
        },
        {
            "question": "Ủy ban thường vụ Quốc hội là cơ quan gì của Quốc hội?",
            "hint": "Cơ quan này hoạt động thường xuyên giữa hai kỳ họp của Quốc hội.",
            "yB": [
                {"text": "Cơ quan chuyên môn", "nv": false, "zK": "Các Ủy ban của Quốc hội mới mang tính chất chuyên môn sâu theo lĩnh vực."},
                {"text": "Cơ quan thường trực", "nv": true, "zK": "Khoản 1 Điều 73 quy định Ủy ban thường vụ Quốc hội là cơ quan thường trực của Quốc hội."},
                {"text": "Cơ quan giúp việc", "nv": false, "zK": "Văn phòng Quốc hội mới là cơ quan giúp việc, còn Ủy ban thường vụ là cơ quan quyền lực thường trực."},
                {"text": "Cơ quan chấp hành", "nv": false, "zK": "Chính phủ mới là cơ quan chấp hành của Quốc hội."}
            ]
        },
        {
            "question": "Thành viên Ủy ban thường vụ Quốc hội không thể đồng thời là thành viên của cơ quan nào?",
            "hint": "Quy định này nhằm đảm bảo nguyên tắc kiểm soát quyền lực giữa cơ quan lập pháp và hành pháp.",
            "yB": [
                {"text": "Đảng Cộng sản Việt Nam", "nv": false, "zK": "Không có quy định cấm thành viên UBTVQH là đảng viên."},
                {"text": "Chính phủ", "nv": true, "zK": "Khoản 3 Điều 73 quy định thành viên Ủy ban thường vụ Quốc hội không thể đồng thời là thành viên Chính phủ."},
                {"text": "Mặt trận Tổ quốc", "nv": false, "zK": "Không có quy định cấm kiêm nhiệm chức vụ bên Mặt trận, tuy nhiên thực tế ít xảy ra."},
                {"text": "Hội đồng nhân dân", "nv": false, "zK": "Đại biểu Quốc hội có thể đồng thời là đại biểu HĐND, không cấm tuyệt đối với thành viên UBTVQH."}
            ]
        },
        {
            "question": "Cơ quan nào có quyền giải thích Hiến pháp, luật, pháp lệnh?",
            "hint": "Đây là nhiệm vụ của cơ quan thường trực Quốc hội khi các văn bản luật chưa rõ ràng.",
            "yB": [
                {"text": "Tòa án nhân dân tối cao", "nv": false, "zK": "Tòa án áp dụng luật để xét xử, hướng dẫn áp dụng thống nhất pháp luật, nhưng không có thẩm quyền giải thích Hiến pháp theo Hiến pháp quy định."},
                {"text": "Chính phủ", "nv": false, "zK": "Chính phủ tổ chức thi hành pháp luật, không có thẩm quyền giải thích luật."},
                {"text": "Ủy ban thường vụ Quốc hội", "nv": true, "zK": "Khoản 2 Điều 74 quy định Ủy ban thường vụ Quốc hội có quyền giải thích Hiến pháp, luật, pháp lệnh."},
                {"text": "Viện kiểm sát nhân dân tối cao", "nv": false, "zK": "Viện kiểm sát thực hành quyền công tố và kiểm sát hoạt động tư pháp."}
            ]
        },
        {
            "question": "Ai bầu Chủ tịch nước?",
            "hint": "Cơ quan quyền lực nhà nước cao nhất sẽ bầu chức danh này.",
            "yB": [
                {"text": "Nhân dân trực tiếp bầu", "nv": false, "zK": "Việt Nam chưa áp dụng chế độ bầu cử trực tiếp Chủ tịch nước."},
                {"text": "Quốc hội bầu", "nv": true, "zK": "Điều 87 quy định Chủ tịch nước do Quốc hội bầu trong số đại biểu Quốc hội."},
                {"text": "Ban Chấp hành Trung ương Đảng bầu", "nv": false, "zK": "Đảng giới thiệu nhân sự, nhưng về mặt Nhà nước, Quốc hội mới là cơ quan bầu."},
                {"text": "Chính phủ bầu", "nv": false, "zK": "Chính phủ là cơ quan hành pháp, không có quyền bầu người đứng đầu Nhà nước."}
            ]
        },
        {
            "question": "Chủ tịch nước chịu trách nhiệm và báo cáo công tác trước cơ quan nào?",
            "hint": "Người được bầu phải chịu trách nhiệm trước cơ quan đã bầu ra mình.",
            "yB": [
                {"text": "Chính phủ", "nv": false, "zK": "Chủ tịch nước không báo cáo trước Chính phủ vì Chính phủ là cơ quan chấp hành."},
                {"text": "Quốc hội", "nv": true, "zK": "Điều 87 quy định Chủ tịch nước chịu trách nhiệm và báo cáo công tác trước Quốc hội."},
                {"text": "Mặt trận Tổ quốc", "nv": false, "zK": "Chủ tịch nước không chịu trách nhiệm báo cáo công tác trước Mặt trận."},
                {"text": "Tòa án nhân dân tối cao", "nv": false, "zK": "Tòa án là cơ quan xét xử, không phải cơ quan giám sát Chủ tịch nước."}
            ]
        },
        {
            "question": "Ai là người thống lĩnh lực lượng vũ trang nhân dân và giữ chức Chủ tịch Hội đồng quốc phòng và an ninh?",
            "hint": "Đây là quyền hạn đặc biệt của người đứng đầu Nhà nước.",
            "yB": [
                {"text": "Thủ tướng Chính phủ", "nv": false, "zK": "Thủ tướng lãnh đạo công tác hành chính, không thống lĩnh lực lượng vũ trang về mặt nhà nước."},
                {"text": "Bộ trưởng Bộ Quốc phòng", "nv": false, "zK": "Bộ trưởng Bộ Quốc phòng chỉ huy quân đội nhưng dưới sự thống lĩnh của Chủ tịch nước."},
                {"text": "Chủ tịch nước", "nv": true, "zK": "Khoản 5 Điều 88 quy định Chủ tịch nước thống lĩnh lực lượng vũ trang nhân dân, giữ chức Chủ tịch Hội đồng quốc phòng và an ninh."},
                {"text": "Chủ tịch Quốc hội", "nv": false, "zK": "Chủ tịch Quốc hội đứng đầu cơ quan lập pháp, không thống lĩnh lực lượng vũ trang."}
            ]
        },
        {
            "question": "Cơ quan hành chính nhà nước cao nhất của nước Cộng hòa xã hội chủ nghĩa Việt Nam là cơ quan nào?",
            "hint": "Cơ quan này thực hiện quyền hành pháp.",
            "yB": [
                {"text": "Quốc hội", "nv": false, "zK": "Quốc hội là cơ quan quyền lực nhà nước cao nhất, không phải cơ quan hành chính."},
                {"text": "Chính phủ", "nv": true, "zK": "Điều 94 quy định Chính phủ là cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp."},
                {"text": "Văn phòng Chủ tịch nước", "nv": false, "zK": "Đây là cơ quan giúp việc cho Chủ tịch nước."},
                {"text": "Bộ Nội vụ", "nv": false, "zK": "Bộ Nội vụ là một bộ thuộc Chính phủ."}
            ]
        },
        {
            "question": "Chính phủ gồm những thành phần nào?",
            "hint": "Thành phần bao gồm người đứng đầu, các cấp phó và người đứng đầu các bộ ngành.",
            "yB": [
                {"text": "Thủ tướng, các Phó Thủ tướng, các Bộ trưởng và Thủ trưởng cơ quan ngang bộ", "nv": true, "zK": "Khoản 1 Điều 95 liệt kê đầy đủ các thành phần này của Chính phủ."},
                {"text": "Chủ tịch nước, Thủ tướng, các Phó Thủ tướng", "nv": false, "zK": "Chủ tịch nước không nằm trong cơ cấu tổ chức của Chính phủ."},
                {"text": "Thủ tướng, các Bộ trưởng và Chủ tịch UBND các tỉnh", "nv": false, "zK": "Chủ tịch UBND cấp tỉnh thuộc chính quyền địa phương, không phải thành viên Chính phủ."},
                {"text": "Thường trực Chính phủ và các Ủy viên Chính phủ", "nv": false, "zK": "Đây không phải là tên gọi chính xác các thành phần theo Hiến pháp."}
            ]
        },
        {
            "question": "Nhiệm kỳ của Chính phủ được xác định như thế nào?",
            "hint": "Khi cơ quan lập pháp hết nhiệm kỳ thì cơ quan hành pháp này cũng kết thúc nhiệm kỳ tương ứng.",
            "yB": [
                {"text": "5 năm cố định", "nv": false, "zK": "Nhiệm kỳ Chính phủ phụ thuộc vào nhiệm kỳ Quốc hội, không cố định cứng nhắc ngày tháng."},
                {"text": "Theo nhiệm kỳ của Quốc hội", "nv": true, "zK": "Điều 97 quy định nhiệm kỳ của Chính phủ theo nhiệm kỳ của Quốc hội."},
                {"text": "Theo nhiệm kỳ của Chủ tịch nước", "nv": false, "zK": "Dù có mối liên hệ, nhưng Hiến pháp quy định trực tiếp theo nhiệm kỳ Quốc hội."},
                {"text": "Do Thủ tướng quyết định", "nv": false, "zK": "Thủ tướng không có quyền quyết định nhiệm kỳ của cả Chính phủ."}
            ]
        },
        {
            "question": "Đơn vị hành chính của nước CHXHCN Việt Nam được tổ chức thành mấy cấp chính?",
            "hint": "Văn bản Hiến pháp tại Điều 110 phân chia thành cấp tỉnh/thành phố trực thuộc TW và các đơn vị bên dưới.",
            "yB": [
                {"text": "Hai cấp: Tỉnh và huyện", "nv": false, "zK": "Thiếu cấp xã và các đơn vị tương đương."},
                {"text": "Ba cấp: Tỉnh, huyện, xã", "nv": false, "zK": "Điều 110 chia thành cấp tỉnh/thành phố trực thuộc TW và các đơn vị dưới đó, nhưng tổng thể thường được hiểu theo phân cấp hành chính."},
                {"text": "Hai cấp: Tỉnh, thành phố trực thuộc trung ương và các đơn vị hành chính dưới tỉnh, thành phố trực thuộc trung ương", "nv": true, "zK": "Khoản 1 Điều 110 quy định tổ chức thành hai cấp như vậy trong văn bản."},
                {"text": "Bốn cấp: Trung ương, tỉnh, huyện, xã", "nv": false, "zK": "Trung ương không gọi là 'đơn vị hành chính' theo cách phân chia địa phương."}
            ]
        },
        {
            "question": "Hội đồng nhân dân là cơ quan gì ở địa phương?",
            "hint": "Đây là cơ quan đại diện cho ý chí, nguyện vọng và quyền làm chủ của Nhân dân địa phương.",
            "yB": [
                {"text": "Cơ quan hành chính nhà nước", "nv": false, "zK": "UBND mới là cơ quan hành chính nhà nước ở địa phương."},
                {"text": "Cơ quan quyền lực nhà nước", "nv": true, "zK": "Điều 113 khẳng định HĐND là cơ quan quyền lực nhà nước ở địa phương."},
                {"text": "Cơ quan xét xử", "nv": false, "zK": "Tòa án nhân dân là cơ quan xét xử."},
                {"text": "Cơ quan kiểm sát", "nv": false, "zK": "Viện kiểm sát nhân dân thực hiện quyền kiểm sát."}
            ]
        },
        {
            "question": "Ủy ban nhân dân do cơ quan nào bầu ra?",
            "hint": "Cơ quan quyền lực nhà nước ở địa phương sẽ bầu ra cơ quan chấp hành của mình.",
            "yB": [
                {"text": "Nhân dân địa phương bầu trực tiếp", "nv": false, "zK": "Nhân dân bầu ra HĐND, không bầu trực tiếp UBND."},
                {"text": "Hội đồng nhân dân cùng cấp", "nv": true, "zK": "Khoản 1 Điều 114 quy định UBND do HĐND cùng cấp bầu."},
                {"text": "Ủy ban nhân dân cấp trên", "nv": false, "zK": "UBND cấp trên chỉ phê chuẩn kết quả bầu, không trực tiếp bầu."},
                {"text": "Chính phủ", "nv": false, "zK": "Chính phủ không trực tiếp bầu UBND các cấp."}
            ]
        },
        {
            "question": "Đại biểu Quốc hội có quyền chất vấn những ai?",
            "hint": "Đối tượng chất vấn là những người đứng đầu các cơ quan nhà nước quan trọng ở trung ương.",
            "yB": [
                {"text": "Chỉ các Bộ trưởng", "nv": false, "zK": "Quyền chất vấn rộng hơn, bao gồm cả Chủ tịch nước, Thủ tướng, v.v."},
                {"text": "Chủ tịch nước, Chủ tịch Quốc hội, Thủ tướng, Bộ trưởng và các thành viên khác của Chính phủ, Chánh án TANDTC, Viện trưởng VKSNDTC, Tổng Kiểm toán nhà nước", "nv": true, "zK": "Điều 80 liệt kê đầy đủ các chức danh này."},
                {"text": "Bất kỳ công dân nào", "nv": false, "zK": "Đại biểu Quốc hội chất vấn người giữ chức vụ do Quốc hội bầu hoặc phê chuẩn, không chất vấn công dân thường."},
                {"text": "Chỉ Thủ tướng Chính phủ", "nv": false, "zK": "Quyền chất vấn không bị giới hạn chỉ ở Thủ tướng."}
            ]
        },
        {
            "question": "Luật, nghị quyết của Quốc hội (trừ trường hợp đặc biệt) phải được bao nhiêu đại biểu tán thành mới được thông qua?",
            "hint": "Nguyên tắc đa số quá bán trên tổng số thành viên.",
            "yB": [
                {"text": "Ít nhất hai phần ba tổng số đại biểu", "nv": false, "zK": "Tỷ lệ 2/3 áp dụng cho việc làm Hiến pháp, rút ngắn/kéo dài nhiệm kỳ, bãi nhiệm đại biểu."},
                {"text": "Quá nửa tổng số đại biểu", "nv": true, "zK": "Khoản 1 Điều 85 quy định luật, nghị quyết thông thường phải được quá nửa tổng số đại biểu tán thành."},
                {"text": "100% đại biểu có mặt", "nv": false, "zK": "Nguyên tắc là dựa trên tổng số đại biểu, không phải số có mặt, và không yêu cầu tuyệt đối."},
                {"text": "Quá nửa số đại biểu có mặt", "nv": false, "zK": "Phải là quá nửa 'tổng số' đại biểu Quốc hội, không phải chỉ số có mặt."}
            ]
        },
        {
            "question": "Trường hợp làm Hiến pháp, sửa đổi Hiến pháp thì cần tỷ lệ tán thành là bao nhiêu?",
            "hint": "Hiến pháp là đạo luật gốc nên cần sự đồng thuận cao hơn mức bình thường.",
            "yB": [
                {"text": "Quá nửa tổng số đại biểu", "nv": false, "zK": "Mức này dành cho luật thông thường."},
                {"text": "Ít nhất hai phần ba tổng số đại biểu", "nv": true, "zK": "Điều 85 quy định riêng cho Hiến pháp cần ít nhất hai phần ba tổng số đại biểu tán thành."},
                {"text": "Ba phần tư tổng số đại biểu", "nv": false, "zK": "Không có quy định tỷ lệ 3/4 trong Hiến pháp."},
                {"text": "100% đại biểu", "nv": false, "zK": "Không yêu cầu sự đồng thuận tuyệt đối."}
            ]
        },
        {
            "question": "Ai có quyền công bố Hiến pháp, luật, pháp lệnh?",
            "hint": "Đây là một trong những nhiệm vụ quan trọng của người đứng đầu Nhà nước.",
            "yB": [
                {"text": "Chủ tịch Quốc hội", "nv": false, "zK": "Chủ tịch Quốc hội ký chứng thực, nhưng người công bố là Chủ tịch nước."},
                {"text": "Thủ tướng Chính phủ", "nv": false, "zK": "Thủ tướng không có thẩm quyền công bố các văn bản của cơ quan lập pháp."},
                {"text": "Chủ tịch nước", "nv": true, "zK": "Khoản 1 Điều 88 quy định Chủ tịch nước công bố Hiến pháp, luật, pháp lệnh."},
                {"text": "Tổng Bí thư", "nv": false, "zK": "Đây là chức danh bên Đảng, không thực hiện hành vi công bố văn bản quy phạm pháp luật của Nhà nước."}
            ]
        },
        {
            "question": "Ai có quyền đề nghị Quốc hội bầu, miễn nhiệm, bãi nhiệm Thủ tướng Chính phủ?",
            "hint": "Người đứng đầu Nhà nước giới thiệu nhân sự đứng đầu Chính phủ.",
            "yB": [
                {"text": "Chủ tịch Quốc hội", "nv": false, "zK": "Chủ tịch Quốc hội không có quyền đề nghị bầu Thủ tướng."},
                {"text": "Ủy ban thường vụ Quốc hội", "nv": false, "zK": "UBTVQH đề nghị bầu các chức danh thuộc Quốc hội, không đề nghị bầu Thủ tướng."},
                {"text": "Chủ tịch nước", "nv": true, "zK": "Khoản 2 Điều 88 quy định Chủ tịch nước đề nghị Quốc hội bầu, miễn nhiệm, bãi nhiệm Thủ tướng Chính phủ."},
                {"text": "Mặt trận Tổ quốc Việt Nam", "nv": false, "zK": "Mặt trận có thể hiệp thương giới thiệu đại biểu Quốc hội, nhưng không đề nghị bầu Thủ tướng."}
            ]
        },
        {
            "question": "Quốc hội họp mỗi năm mấy kỳ?",
            "hint": "Thường có kỳ họp đầu năm và kỳ họp cuối năm.",
            "yB": [
                {"text": "Một kỳ", "nv": false, "zK": "Một kỳ là quá ít để giải quyết khối lượng công việc lập pháp và giám sát."},
                {"text": "Hai kỳ", "nv": true, "zK": "Khoản 2 Điều 83 quy định Quốc hội họp mỗi năm hai kỳ."},
                {"text": "Ba kỳ", "nv": false, "zK": "Thông thường là hai kỳ, trừ khi có kỳ họp bất thường."},
                {"text": "Bốn kỳ", "nv": false, "zK": "Số lượng kỳ họp thường kỳ được ấn định là hai."}
            ]
        },
        {
            "question": "Ai có quyền triệu tập kỳ họp Quốc hội?",
            "hint": "Cơ quan thường trực của Quốc hội thực hiện việc này.",
            "yB": [
                {"text": "Chủ tịch nước", "nv": false, "zK": "Chủ tịch nước có quyền yêu cầu họp bất thường, nhưng người triệu tập là UBTVQH."},
                {"text": "Ủy ban thường vụ Quốc hội", "nv": true, "zK": "Khoản 2 Điều 83 quy định Ủy ban thường vụ Quốc hội triệu tập kỳ họp Quốc hội."},
                {"text": "Thủ tướng Chính phủ", "nv": false, "zK": "Thủ tướng không có quyền triệu tập cơ quan lập pháp."},
                {"text": "Chủ tịch Quốc hội", "nv": false, "zK": "Chủ tịch Quốc hội lãnh đạo UBTVQH, nhưng thẩm quyền triệu tập được quy định cho tập thể UBTVQH."}
            ]
        },
        {
            "question": "Phó Thủ tướng Chính phủ chịu trách nhiệm trước ai?",
            "hint": "Người cấp phó chịu trách nhiệm trước người đứng đầu trực tiếp phân công mình.",
            "yB": [
                {"text": "Quốc hội", "nv": false, "zK": "Phó Thủ tướng chịu trách nhiệm trực tiếp trước Thủ tướng, Thủ tướng mới chịu trách nhiệm trước Quốc hội."},
                {"text": "Chủ tịch nước", "nv": false, "zK": "Không có quy định Phó Thủ tướng chịu trách nhiệm trực tiếp trước Chủ tịch nước."},
                {"text": "Thủ tướng Chính phủ", "nv": true, "zK": "Khoản 3 Điều 95 quy định Phó Thủ tướng chịu trách nhiệm trước Thủ tướng Chính phủ về nhiệm vụ được phân công."},
                {"text": "Nhân dân", "nv": false, "zK": "Trách nhiệm trước Nhân dân là trách nhiệm chung, không phải trách nhiệm hành chính trực tiếp."}
            ]
        },
        {
            "question": "Ai có quyền quyết định tổng động viên hoặc động viên cục bộ?",
            "hint": "Cơ quan thường trực của Quốc hội có quyền quyết định vấn đề quan trọng này về quốc phòng.",
            "yB": [
                {"text": "Thủ tướng Chính phủ", "nv": false, "zK": "Thủ tướng thi hành lệnh, không ra quyết định này."},
                {"text": "Ủy ban thường vụ Quốc hội", "nv": true, "zK": "Khoản 10 Điều 74 quy định UBTVQH quyết định tổng động viên hoặc động viên cục bộ."},
                {"text": "Bộ trưởng Bộ Quốc phòng", "nv": false, "zK": "Bộ trưởng Quốc phòng chỉ thực hiện lệnh."},
                {"text": "Chủ tịch nước", "nv": false, "zK": "Chủ tịch nước công bố lệnh dựa trên nghị quyết của UBTVQH."}
            ]
        },
        {
            "question": "Chủ tịch nước có quyền tham dự phiên họp của cơ quan nào?",
            "hint": "Người đứng đầu Nhà nước có mối quan hệ chặt chẽ với cả cơ quan lập pháp thường trực và cơ quan hành pháp.",
            "yB": [
                {"text": "Chỉ Ủy ban thường vụ Quốc hội", "nv": false, "zK": "Chưa đầy đủ."},
                {"text": "Chỉ Chính phủ", "nv": false, "zK": "Chưa đầy đủ."},
                {"text": "Cả Ủy ban thường vụ Quốc hội và Chính phủ", "nv": true, "zK": "Điều 90 quy định Chủ tịch nước có quyền tham dự phiên họp của Ủy ban thường vụ Quốc hội và phiên họp của Chính phủ."},
                {"text": "Tòa án nhân dân tối cao", "nv": false, "zK": "Không có quy định Chủ tịch nước tham dự phiên họp xét xử của Tòa án."}
            ]
        },
        {
            "question": "Cơ quan nào quyết định thành lập, giải thể, nhập, chia tỉnh, thành phố trực thuộc trung ương?",
            "hint": "Việc thay đổi địa giới hành chính cấp cao nhất ở địa phương thuộc thẩm quyền của cơ quan quyền lực nhà nước cao nhất.",
            "yB": [
                {"text": "Chính phủ", "nv": false, "zK": "Chính phủ trình dự án, nhưng không có quyền quyết định đối với cấp tỉnh."},
                {"text": "Quốc hội", "nv": true, "zK": "Khoản 9 Điều 70 quy định Quốc hội quyết định việc này đối với cấp tỉnh/thành phố trực thuộc trung ương."},
                {"text": "Ủy ban thường vụ Quốc hội", "nv": false, "zK": "UBTVQH quyết định đối với các đơn vị hành chính dưới tỉnh."},
                {"text": "Bộ Nội vụ", "nv": false, "zK": "Bộ Nội vụ là cơ quan tham mưu, không có thẩm quyền quyết định."}
            ]
        },
        {
            "question": "Ai có quyền đình chỉ việc thi hành văn bản của Bộ trưởng trái với Hiến pháp, luật?",
            "hint": "Người đứng đầu Chính phủ có quyền kiểm tra và xử lý văn bản của các thành viên Chính phủ.",
            "yB": [
                {"text": "Chủ tịch Quốc hội", "nv": false, "zK": "Chủ tịch Quốc hội không can thiệp trực tiếp vào văn bản hành chính của Bộ trưởng."},
                {"text": "Thủ tướng Chính phủ", "nv": true, "zK": "Khoản 4 Điều 98 quy định Thủ tướng có quyền đình chỉ hoặc bãi bỏ văn bản của Bộ trưởng trái pháp luật."},
                {"text": "Chủ tịch nước", "nv": false, "zK": "Chủ tịch nước đình chỉ văn bản của Chính phủ, Thủ tướng (theo đề nghị UBTVQH hoặc tự mình xem xét trong một số trường hợp đặc biệt - nhưng Điều 98 quy định cụ thể quyền này cho Thủ tướng đối với Bộ trưởng)."},
                {"text": "Tổng Kiểm toán nhà nước", "nv": false, "zK": "Kiểm toán nhà nước kiểm tra tài chính, không đình chỉ văn bản pháp luật."}
            ]
        },
        {
            "question": "Đại biểu Quốc hội có quyền trình kiến nghị về luật, pháp lệnh trước cơ quan nào?",
            "hint": "Đại biểu trình kiến nghị lên cơ quan mà mình là thành viên hoặc cơ quan thường trực của nó.",
            "yB": [
                {"text": "Chính phủ", "nv": false, "zK": "Kiến nghị làm luật phải trình trước cơ quan lập pháp."},
                {"text": "Quốc hội, Ủy ban thường vụ Quốc hội", "nv": true, "zK": "Khoản 2 Điều 84 quy định đại biểu Quốc hội có quyền trình kiến nghị này trước Quốc hội, UBTVQH."},
                {"text": "Mặt trận Tổ quốc", "nv": false, "zK": "Không đúng thẩm quyền."},
                {"text": "Bộ Tư pháp", "nv": false, "zK": "Bộ Tư pháp thẩm định dự án luật của Chính phủ, không phải nơi đại biểu trình kiến nghị."}
            ]
        },
        {
            "question": "Việc kéo dài nhiệm kỳ Quốc hội không được thực hiện trong trường hợp nào?",
            "hint": "Trừ khi có chiến tranh, thời gian kéo dài bị giới hạn.",
            "yB": [
                {"text": "Thiên tai", "nv": false, "zK": "Hiến pháp không cấm kéo dài do thiên tai, mà chỉ quy định giới hạn 12 tháng."},
                {"text": "Khi không có chiến tranh và quá 12 tháng", "nv": true, "zK": "Hiến pháp quy định việc kéo dài không được quá 12 tháng, trừ trường hợp có chiến tranh. Tức là bình thường không được quá 12 tháng."},
                {"text": "Dịch bệnh", "nv": false, "zK": "Tương tự thiên tai."},
                {"text": "Kinh tế suy thoái", "nv": false, "zK": "Không phải là điều kiện được nêu."}
            ]
        },
        {
            "question": "Cơ quan nào quy định hàm, cấp trong lực lượng vũ trang nhân dân?",
            "hint": "Đây là vấn đề thuộc thẩm quyền lập pháp.",
            "yB": [
                {"text": "Chính phủ", "nv": false, "zK": "Chính phủ thực hiện, nhưng quyền quy định thuộc Quốc hội."},
                {"text": "Bộ Quốc phòng", "nv": false, "zK": "Bộ Quốc phòng không có quyền lập pháp về hàm cấp."},
                {"text": "Quốc hội", "nv": true, "zK": "Khoản 12 Điều 70 quy định Quốc hội quy định hàm, cấp trong lực lượng vũ trang."},
                {"text": "Chủ tịch nước", "nv": false, "zK": "Chủ tịch nước quyết định phong hàm cấp tướng, nhưng quy định hệ thống hàm cấp là do Quốc hội."}
            ]
        },
        {
            "question": "Cơ quan nào quyết định đại xá?",
            "hint": "Đại xá là việc tha tội cho hàng loạt người, thuộc thẩm quyền cơ quan quyền lực cao nhất.",
            "yB": [
                {"text": "Chủ tịch nước", "nv": false, "zK": "Chủ tịch nước quyết định đặc xá. Đại xá thuộc thẩm quyền Quốc hội."},
                {"text": "Chính phủ", "nv": false, "zK": "Chính phủ không có quyền này."},
                {"text": "Quốc hội", "nv": true, "zK": "Khoản 11 Điều 70 quy định Quốc hội quyết định đại xá."},
                {"text": "Tòa án nhân dân tối cao", "nv": false, "zK": "Tòa án thực hiện xét xử, không quyết định đại xá."}
            ]
        },
        {
            "question": "Cơ quan nào quyết định đặc xá?",
            "hint": "Phân biệt với đại xá, đây là thẩm quyền của Chủ tịch nước.",
            "yB": [
                {"text": "Quốc hội", "nv": false, "zK": "Quốc hội quyết định đại xá."},
                {"text": "Chủ tịch nước", "nv": true, "zK": "Khoản 3 Điều 88 quy định Chủ tịch nước quyết định đặc xá."},
                {"text": "Thủ tướng Chính phủ", "nv": false, "zK": "Thủ tướng là chủ tịch hội đồng tư vấn đặc xá nhưng người quyết định là Chủ tịch nước."},
                {"text": "Viện trưởng Viện kiểm sát nhân dân tối cao", "nv": false, "zK": "Không có thẩm quyền này."}
            ]
        },
        {
            "question": "Phó Chủ tịch nước được bầu từ nguồn nào?",
            "hint": "Tương tự như Chủ tịch nước, người này phải là thành viên của cơ quan lập pháp.",
            "yB": [
                {"text": "Bất kỳ công dân nào đủ 21 tuổi", "nv": false, "zK": "Phải là đại biểu Quốc hội."},
                {"text": "Trong số đại biểu Quốc hội", "nv": true, "zK": "Điều 92 quy định Phó Chủ tịch nước do Quốc hội bầu trong số đại biểu Quốc hội."},
                {"text": "Thành viên Chính phủ", "nv": false, "zK": "Không bắt buộc và thường không kiêm nhiệm."},
                {"text": "Ủy viên Trung ương Đảng", "nv": false, "zK": "Đây là tiêu chuẩn Đảng, Hiến pháp quy định tiêu chuẩn là đại biểu Quốc hội."}
            ]
        },
        {
            "question": "Khi Chủ tịch nước không làm việc được trong thời gian dài thì ai giữ quyền Chủ tịch nước?",
            "hint": "Người cấp phó trực tiếp sẽ đảm nhiệm vai trò này.",
            "yB": [
                {"text": "Chủ tịch Quốc hội", "nv": false, "zK": "Chủ tịch Quốc hội thay thế trong một số mô hình nước khác, nhưng ở VN là Phó Chủ tịch nước."},
                {"text": "Thủ tướng Chính phủ", "nv": false, "zK": "Thủ tướng đứng đầu hành pháp, không thay thế người đứng đầu Nhà nước."},
                {"text": "Phó Chủ tịch nước", "nv": true, "zK": "Điều 93 quy định Phó Chủ tịch nước giữ quyền Chủ tịch nước trong trường hợp này."},
                {"text": "Tổng Bí thư", "nv": false, "zK": "Không có quy định này trong Hiến pháp."}
            ]
        },
        {
            "question": "Hội đồng quốc phòng và an ninh làm việc theo chế độ nào?",
            "hint": "Quyết định dựa trên ý kiến chung của các thành viên.",
            "yB": [
                {"text": "Thủ trưởng", "nv": false, "zK": "Chế độ thủ trưởng là một người quyết định, không phải hội đồng."},
                {"text": "Tập thể và quyết định theo đa số", "nv": true, "zK": "Khoản 1 Điều 89 quy định Hội đồng làm việc theo chế độ tập thể và quyết định theo đa số."},
                {"text": "Hiệp thương", "nv": false, "zK": "Hiệp thương là nguyên tắc của Mặt trận."},
                {"text": "Độc lập", "nv": false, "zK": "Không chính xác."}
            ]
        },
        {
            "question": "Thủ tướng Chính phủ do cơ quan nào bầu?",
            "hint": "Người đứng đầu Chính phủ được bầu bởi cơ quan đại biểu cao nhất.",
            "yB": [
                {"text": "Ban Chấp hành Trung ương Đảng", "nv": false, "zK": "Đây là quy trình bên Đảng."},
                {"text": "Quốc hội", "nv": true, "zK": "Điều 98 quy định Thủ tướng do Quốc hội bầu trong số đại biểu Quốc hội."},
                {"text": "Chủ tịch nước", "nv": false, "zK": "Chủ tịch nước giới thiệu, Quốc hội bầu."},
                {"text": "Nhân dân", "nv": false, "zK": "Chưa có cơ chế bầu trực tiếp Thủ tướng."}
            ]
        },
        {
            "question": "Cơ quan nào thống nhất quản lý nền hành chính quốc gia?",
            "hint": "Đây là chức năng chính của cơ quan hành pháp cao nhất.",
            "yB": [
                {"text": "Quốc hội", "nv": false, "zK": "Quốc hội giám sát, không quản lý hành chính."},
                {"text": "Chủ tịch nước", "nv": false, "zK": "Chủ tịch nước là nguyên thủ quốc gia, không quản lý hành chính trực tiếp."},
                {"text": "Chính phủ", "nv": true, "zK": "Khoản 5 Điều 96 quy định Chính phủ thống nhất quản lý nền hành chính quốc gia."},
                {"text": "Bộ Nội vụ", "nv": false, "zK": "Bộ Nội vụ giúp Chính phủ quản lý, nhưng quyền thống nhất thuộc Chính phủ."}
            ]
        },
        {
            "question": "Văn bản pháp luật của Chính phủ bị đình chỉ nếu trái với văn bản nào?",
            "hint": "Văn bản của cơ quan hành pháp không được trái với văn bản của cơ quan lập pháp.",
            "yB": [
                {"text": "Hiến pháp, luật, nghị quyết của Quốc hội", "nv": true, "zK": "Điều 74 quy định UBTVQH đình chỉ văn bản Chính phủ trái với các văn bản này."},
                {"text": "Văn bản của Bộ Chính trị", "nv": false, "zK": "Hiến pháp là luật cơ bản của Nhà nước, đối chiếu với văn bản quy phạm pháp luật nhà nước."},
                {"text": "Ý kiến cử tri", "nv": false, "zK": "Không phải căn cứ pháp lý trực tiếp để đình chỉ."},
                {"text": "Thông tư của Bộ trưởng", "nv": false, "zK": "Văn bản cấp dưới không thể làm căn cứ đình chỉ văn bản cấp trên."}
            ]
        },
        {
            "question": "Hội đồng dân tộc gồm những thành phần nào?",
            "hint": "Người đứng đầu gọi là Chủ tịch, giống như Chủ tịch Quốc hội.",
            "yB": [
                {"text": "Chủ tịch, các Phó Chủ tịch và các Ủy viên", "nv": true, "zK": "Khoản 1 Điều 75 quy định cơ cấu này."},
                {"text": "Trưởng ban, Phó ban và Thư ký", "nv": false, "zK": "Sai tên gọi chức danh."},
                {"text": "Chủ nhiệm, Phó Chủ nhiệm và Ủy viên", "nv": false, "zK": "Đây là cơ cấu của các Ủy ban của Quốc hội, không phải Hội đồng dân tộc."},
                {"text": "Giám đốc, Phó Giám đốc", "nv": false, "zK": "Đây là chức danh hành chính doanh nghiệp hoặc sở ban ngành."}
            ]
        },
        {
            "question": "Khi ban hành quy định thực hiện chính sách dân tộc, Chính phủ phải làm gì?",
            "hint": "Phải tham vấn cơ quan chuyên trách về vấn đề dân tộc của Quốc hội.",
            "yB": [
                {"text": "Lấy ý kiến của Mặt trận Tổ quốc", "nv": false, "zK": "Không bắt buộc trong mọi trường hợp."},
                {"text": "Lấy ý kiến của Hội đồng dân tộc", "nv": true, "zK": "Khoản 3 Điều 75 quy định Chính phủ phải lấy ý kiến của Hội đồng dân tộc."},
                {"text": "Xin phép Quốc hội", "nv": false, "zK": "Không cần xin phép từng quy định cụ thể."},
                {"text": "Tổ chức trưng cầu ý dân", "nv": false, "zK": "Chỉ áp dụng cho vấn đề trọng đại quốc gia."}
            ]
        },
        {
            "question": "Việc thành lập, giải thể Ủy ban của Quốc hội do cơ quan nào quyết định?",
            "hint": "Quyết định về cơ cấu tổ chức bên trong của chính cơ quan lập pháp.",
            "yB": [
                {"text": "Ủy ban thường vụ Quốc hội", "nv": false, "zK": "UBTVQH chỉ đạo điều hòa, không quyết định thành lập."},
                {"text": "Quốc hội", "nv": true, "zK": "Khoản 3 Điều 76 quy định Quốc hội quyết định việc này."},
                {"text": "Chủ tịch Quốc hội", "nv": false, "zK": "Cá nhân Chủ tịch không quyết định."},
                {"text": "Đảng đoàn Quốc hội", "nv": false, "zK": "Đây là tổ chức Đảng, không ra quyết định nhà nước."}
            ]
        },
        {
            "question": "Không được bắt, giam, giữ, khởi tố đại biểu Quốc hội nếu không có sự đồng ý của ai?",
            "hint": "Đây là quyền miễn trừ của đại biểu để đảm bảo hoạt động nghị trường.",
            "yB": [
                {"text": "Chủ tịch nước", "nv": false, "zK": "Không thuộc thẩm quyền Chủ tịch nước."},
                {"text": "Quốc hội hoặc Ủy ban thường vụ Quốc hội (khi Quốc hội không họp)", "nv": true, "zK": "Điều 81 quy định quyền miễn trừ này."},
                {"text": "Thủ tướng Chính phủ", "nv": false, "zK": "Không thuộc thẩm quyền hành pháp."},
                {"text": "Chánh án Tòa án nhân dân tối cao", "nv": false, "zK": "Tòa án xét xử, nhưng việc bắt giữ đại biểu cần sự đồng ý của cơ quan lập pháp trước."}
            ]
        },
        {
            "question": "Quốc hội có quyền họp kín trong trường hợp nào?",
            "hint": "Nguyên tắc là công khai, nhưng ngoại lệ được chấp nhận khi cần thiết.",
            "yB": [
                {"text": "Bất cứ lúc nào Chủ tịch Quốc hội muốn", "nv": false, "zK": "Phải có đề nghị và quyết định theo quy trình."},
                {"text": "Trong trường hợp cần thiết, theo đề nghị của các chủ thể có thẩm quyền", "nv": true, "zK": "Khoản 1 Điều 83 quy định trường hợp cần thiết có thể họp kín."},
                {"text": "Không bao giờ được họp kín", "nv": false, "zK": "Hiến pháp cho phép họp kín."},
                {"text": "Khi họp về ngân sách", "nv": false, "zK": "Ngân sách thường công khai, trừ bí mật quốc phòng an ninh."}
            ]
        },
        {
            "question": "Chủ tịch nước ban hành loại văn bản nào?",
            "hint": "Tên loại văn bản gắn liền với thẩm quyền của nguyên thủ quốc gia.",
            "yB": [
                {"text": "Luật, pháp lệnh", "nv": false, "zK": "Chủ tịch nước công bố, không ban hành luật (Quốc hội làm luật)."},
                {"text": "Lệnh, quyết định", "nv": true, "zK": "Điều 91 quy định Chủ tịch nước ban hành lệnh, quyết định."},
                {"text": "Nghị định, nghị quyết", "nv": false, "zK": "Nghị định là của Chính phủ."},
                {"text": "Thông tư, chỉ thị", "nv": false, "zK": "Thông tư là của Bộ trưởng."}
            ]
        },
        {
            "question": "Chính quyền địa phương ở đơn vị hành chính - kinh tế đặc biệt do ai quy định?",
            "hint": "Mô hình đặc thù cần cơ quan lập pháp quyết định.",
            "yB": [
                {"text": "Chính phủ", "nv": false, "zK": "Chính phủ trình, không quy định."},
                {"text": "Quốc hội", "nv": true, "zK": "Khoản 3 Điều 111 quy định do Quốc hội quy định."},
                {"text": "Hội đồng nhân dân tỉnh", "nv": false, "zK": "Cấp tỉnh không có quyền quy định mô hình đặc biệt này."},
                {"text": "Chủ tịch nước", "nv": false, "zK": "Không thuộc thẩm quyền."},
            ]
        },
        {
            "question": "Đại biểu Hội đồng nhân dân có quyền chất vấn ai?",
            "hint": "Đối tượng chất vấn là lãnh đạo cơ quan hành chính, tư pháp ở địa phương.",
            "yB": [
                {"text": "Chủ tịch UBND, thành viên UBND, Chánh án TAND, Viện trưởng VKSND và Thủ trưởng cơ quan thuộc UBND", "nv": true, "zK": "Khoản 2 Điều 115 liệt kê các đối tượng này."},
                {"text": "Chỉ Chủ tịch UBND", "nv": false, "zK": "Chưa đủ."},
                {"text": "Bất kỳ cán bộ công chức nào", "nv": false, "zK": "Phải là người đứng đầu hoặc thành viên UBND."},
                {"text": "Đại biểu Quốc hội", "nv": false, "zK": "Đại biểu HĐND không chất vấn đại biểu Quốc hội."}
            ]
        },
        {
            "question": "Hội đồng nhân dân và Ủy ban nhân dân có trách nhiệm báo cáo tình hình cho tổ chức nào?",
            "hint": "Tổ chức liên minh chính trị, cơ sở của chính quyền nhân dân.",
            "yB": [
                {"text": "Các doanh nghiệp trên địa bàn", "nv": false, "zK": "Không có trách nhiệm báo cáo doanh nghiệp."},
                {"text": "Mặt trận Tổ quốc Việt Nam và các đoàn thể nhân dân", "nv": true, "zK": "Khoản 1 Điều 116 quy định trách nhiệm thông báo tình hình cho Mặt trận và đoàn thể."},
                {"text": "Chỉ báo cáo cấp trên", "nv": false, "zK": "Phải thông báo cho cả Mặt trận cùng cấp."},
                {"text": "Báo chí", "nv": false, "zK": "Đây là kênh thông tin, không phải trách nhiệm chế định trong điều khoản này."}
            ]
        }
    ]
};