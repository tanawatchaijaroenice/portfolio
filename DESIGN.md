# Design System: The Neon Nexus (Futuristic Cyberpunk Portfolio)

## Typography
- **Headline Font:** Space Grotesk (ให้ความรู้สึกทางเทคโนโลยี คมเข้ม และดูโมเดิร์น)
- **Body Font:** Manrope (ให้ความอ่านง่าย คลีน และรองรับการทำ Web layout ดีเยี่ยม)
- **Label & Code Font:** JetBrains Mono / Manrope

## Color Palette

**Theme:** DARK (Futuristic Sci-Fi / Cyberpunk Style)

| Role | Color | Hex | Role | Color | Hex |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary** | <img src="https://via.placeholder.com/15/38bdf8/000000?text=+" width="15" /> Neon Cyan | `#38bdf8` | **On Primary** | <img src="https://via.placeholder.com/15/070b13/000000?text=+" width="15" /> dark_bg | `#070b13` |
| **Primary Container** | <img src="https://via.placeholder.com/15/0369a1/000000?text=+" width="15" /> dark_blue | `#0369a1` | **On Primary Container** | <img src="https://via.placeholder.com/15/e0f2fe/000000?text=+" width="15" /> light_cyan | `#e0f2fe` |
| **Secondary** | <img src="https://via.placeholder.com/15/00f5ff/000000?text=+" width="15" /> Bright Cyan | `#00f5ff` | **On Secondary** | <img src="https://via.placeholder.com/15/070b13/000000?text=+" width="15" /> dark_bg | `#070b13` |
| **Tertiary** | <img src="https://via.placeholder.com/15/8b5cf6/000000?text=+" width="15" /> Neon Purple | `#8b5cf6` | **On Tertiary** | <img src="https://via.placeholder.com/15/ffffff/000000?text=+" width="15" /> white | `#ffffff` |
| **Background** | <img src="https://via.placeholder.com/15/070b13/000000?text=+" width="15" /> background | `#070b13` | **On Background** | <img src="https://via.placeholder.com/15/f8fafc/000000?text=+" width="15" /> light_text | `#f8fafc` |
| **Surface** | <img src="https://via.placeholder.com/15/0a0e17/000000?text=+" width="15" /> surface | `#0a0e17` | **On Surface** | <img src="https://via.placeholder.com/15/f8fafc/000000?text=+" width="15" /> light_text | `#f8fafc` |
| **Surface Variant**| <img src="https://via.placeholder.com/15/0f172a/000000?text=+" width="15" /> surface_variant | `#0f172a` | **On Surface Variant**| <img src="https://via.placeholder.com/15/94a3b8/000000?text=+" width="15" /> slate_gray | `#94a3b8` |
| **Outline** | <img src="https://via.placeholder.com/15/38bdf8/000000?text=+" width="15" /> outline (glow) | `rgba(56, 189, 248, 0.2)` | **Outline Variant** | <img src="https://via.placeholder.com/15/1e293b/000000?text=+" width="15" /> dark_outline | `#1e293b` |

---

# Design System Strategy: The Neon Nexus

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Neon Nexus."**
วิวัฒนาการจากดีไซน์แกลเลอรีแบบสว่างมาสู่ความหรูหราล้ำยุคในสไตล์ **Futuristic Sci-Fi Dark Mode** คล้ายการควบคุมแผงระบบปัญญาประดิษฐ์และห้องนักบินเสมือนจริง (Cyberpunk cockpit) ระบบจะเน้นการตัดกันของสีพื้นหลังที่มืดสนิทเข้ากับแถบสีนีออนสว่างเรืองแสง (Neon Cyan & Purple Glow) โดยอาศัยความลึกของการจัดเลเยอร์แบบกระจกสะท้อนเงา (Glassmorphism) และเงาเรืองแสงรอบตัวองค์ประกอบเพื่อนำสายตาผู้ใช้

## 2. Color Theory & Neon Atmosphere
สีน้ำเงินเข้มข้นจัดทำหน้าที่ดูดซับสายตาเพื่อให้ปุ่มและเนื้อหาที่เรืองแสงสีฟ้านีออนโดดเด่นขึ้นมาทันที

### The Glow Rule (กฎเรืองแสง)
ห้ามใช้สีทึบหรือ border ที่แข็งกร้าว ให้เน้นการเรืองแสงแบบฟุ้งกระจาย (Neon Glow) เพื่อสร้างบรรยากาศล้ำสมัย:
*   **Border Neon:** ใช้ขอบโปร่งแสงผสมผสานกับเงาฟุ้ง: `border: 1px solid rgba(0, 245, 255, 0.15); box-shadow: 0 0 15px rgba(0, 245, 255, 0.1);`
*   **Ambient Backlight:** ในแต่ละ Section จะต้องมีจุดเรืองแสงด้านหลัง (Background Glow) ขนาดใหญ่ที่เกิดจากการทำ radial-gradient โทนสีฟ้า/ม่วงที่จางมากๆ (opacity 5-10%) เพื่อสร้างมิติหลัง Component

### Surface Hierarchy & Layering (การไล่ระดับเลเยอร์)
*   **Base Background:** `#070b13` (สีน้ำเงินมืดสนิท เป็นพื้นหลังแผ่นหลัก)
*   **Floating Elements / Sidebar:** `#0a0e17` ร่วมกับ Glassmorphism (`backdrop-filter: blur(20px); opacity: 0.65;`)
*   **Interactive Cards:** `#0f172a` (การ์ดโปรเจกต์และการ์ดทักษะ) ขอบโค้งมนแบบมนมาก (`border-radius: var(--radius-xl)` หรือ 1rem)

---

## 3. Layout & Navigation
การจัดโครงสร้างอ้างอิงจาก Dashboard ดีไซน์ใหม่:

### แถบนำทางแนวตั้งด้านข้าง (Vertical Sidebar Navigation)
*   เมนูหลักของเว็บจะเป็นแถบแนวตั้งลอยอยู่ฝั่งซ้ายของจอ (`position: fixed; left: 2.5rem; top: 50%; transform: translateY(-50%);`)
*   การออกแบบเป็นรูปทรงแคปซูลยาแนวตั้ง (Full Pill Capsule) ใช้ดีไซน์แบบ Glassmorphism ขอบมนกลมทั้งหมด และมีขอบเรืองแสงสีฟ้านีออน
*   ตัวเลือกที่เลือกอยู่ในปัจจุบัน (Active State) จะเรืองแสงสีฟ้าสว่างทรงวงกลม
*   **Mobile Adaptability:** เมื่อแสดงผลบนหน้าจอขนาดเล็ก แถบนำทางจะสลับมาเป็นแถบแนวนอนด้านล่าง (Bottom Nav) เพื่อรักษาความสะดวกในการสัมผัส

### Skill Progress Bars (แถบวัดระดับทักษะ)
*   แสดงผลในหน้าทักษะด้วยแถบแสดงความเชี่ยวชาญแบบเส้นเรืองแสง (Glow progress line)
*   สีของแถบเป็นสีฟ้านีออนสะท้อนแสงสว่าง ตัวกราฟสีเข้มอยู่ด้านหลัง และมีตัวเลขเปอร์เซ็นต์เรืองแสงที่ปลายเส้น
*   แอนิเมชันจะพุ่งขึ้นจาก 0 ไปถึงระดับจริงอย่างราบรื่นเมื่อโหลดข้อมูล

---

## 4. Elevation & Hover Effects
*   **Hover Glow State:** เมื่อเอาเมาส์ไปชี้ที่การ์ดหรือแถบนำทาง ขอบจะสว่างขึ้นเป็นสีฟ้านีออนเข้ม และเพิ่มความฟุ้งเรืองแสงของเงารอบด้าน:
    *   *Hover Spec:* `box-shadow: 0px 0px 25px rgba(0, 245, 255, 0.25); border-color: rgba(0, 245, 255, 0.4);`
*   **ปุ่มกด (Buttons):**
    *   *ปุ่มหลัก (Primary CTA):* สีฟ้านีออนทึบแสง มีแสงเรืองออกมารอบตัว และขอบโค้งมนแบบ Full Pill (`border-radius: 9999px`)
    *   *ปุ่มรอง (Secondary CTA):* ดีไซน์โปร่งใส (Transparent) ขอบสีขาวนวลหรือสีฟ้านีออนจางๆ และเรืองแสงเมื่อ Hover

---

## 5. Do’s and Don’ts

### Do
- **Do** ใช้เอฟเฟกต์ Glassmorphic แผงโปร่งแสงซ้อนทับภาพและพื้นหลังมืด
- **Do** แสดงผลแบบ Asymmetric โดยให้แถบเมนูด้านซ้ายลอยอยู่โดดเด่น และเนื้อหาเลื่อนไหลไปตามแนวตั้งทางฝั่งขวา
- **Do** ใช้สีฟ้านีออนสว่างเป็นเข็มทิศในการดึงดูดความสนใจไปที่หัวข้อและปุ่ม CTA

### Don't
- **Don't** ใช้พื้นหลังโทนสว่างหรือสีขาวเด่นชัดในส่วนแสดงเนื้อหาหลัก
- **Don't** ใช้ 1px border แข็งๆ หรือสีทึบแบบไม่มีความโปร่งใสและเงาเรืองแสง
- **Don't** ละทิ้งโครงสร้างสองภาษา (i18n) – เมนูหรือไอคอนต้องมี tooltips หรือคำแปลกำกับชัดเจน
