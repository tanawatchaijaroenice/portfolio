# Projects — ผลงาน

> ใช้สำหรับ section: **projects**
> เรียงตามความสำคัญ: PMS (เด่นสุด) > Ecommerce > Side project

---

## 1. 🏨 Hotel Management System (PMS) — Angular

**ประเภท:** งานบริษัท (ลูกค้าคือโรงแรม) | **Role:** Frontend / UI Developer | **Stack:** Angular, TypeScript, RxJS, Signals, SCSS | **รูปภาพประกอบ:** `public/images/project-pms.png`

### ภาพรวม / Overview
**TH:** ระบบจัดการโรงแรมสำหรับให้โรงแรมใช้บริหารงานประจำวัน เช่น พนักงาน cashier บันทึกข้อมูลการจอง, check-in, ออกใบกำกับภาษี ฯลฯ
**EN:** A property management system (PMS) used by hotels to run daily operations — cashiers record bookings, check-ins, issue tax invoices, and more.

### สิ่งที่รับผิดชอบ / What I built (Frontend)
- หน้า **Booking** — สร้าง/แก้ไขการจอง, calendar แบบ drag & drop, table/list
- **Gen posting** — ดึงข้อมูลจาก API มาวนลูปสร้าง posting ตาม rate ที่ตั้งไว้ของแต่ละ room type; handle เคสลูกค้า extend (เพิ่ม/ลดวัน)
- หน้า **Cashier** — post / pay, กรอก amount, เพิ่ม/ลบ row transaction
- หน้า **Tax Invoice** — ออกใบกำกับภาษี, จัดการฟอร์มคำนวณ tax / VAT / service
- หน้า **Setup** — UI เพิ่ม/ลบ/แก้ไข ค่าต่างๆ
- หน้า **Package & Voucher** — จองผ่าน package, สร้าง QR scan สำหรับ redeem voucher, เพิ่ม/ลดจำนวน redeem (responsive)

### ผลงานที่ภูมิใจ / Highlights
1. **Tax Invoice calculation logic** — แก้/ออกแบบ logic การคำนวณ tax, VAT, service และยอดรวม โดยดึง amount + vat rate + service rate + tax rate จาก API มา bind และจัดการ state ต่อบน UI
2. **Room charge calculation (Booking)** — ตอน gen posting คำนวณค่าห้องเอง: rate, ABF, include, weekend, holiday และแปรผันตามจำนวน guest ที่เลือก
3. **Package card + Voucher redeem** — สร้างหน้าใหม่ทั้งหน้า รองรับ QR scan redeem และ responsive

### ความท้าทาย & วิธีแก้ / Challenge & Approach
**TH:** ปัญหาที่เจอบ่อยคือยอดคำนวณผิด (เช่น tax ผิด หรือ room charge ติดลบ) วิธีของผมคือ **ไล่หาต้นตอก่อนเสมอ** ว่าผิดที่ data จาก API (เช่น ลืมส่ง weekend) หรือผิดที่ UI logic เอง (เช่น ตกหล่น field, logic หักลบ include/weekend ผิด) ถ้าผิดที่ API ก็แจ้งทีม API แก้ ถ้าผิดที่ UI ก็แก้ที่ต้นเหตุตาม best practice — ไม่ได้แก้แค่จุดที่ error แดง แต่แก้ให้ยั่งยืน
**EN:** A recurring challenge was incorrect calculations (wrong tax, or negative room charge). My approach is to **trace the root cause first** — is it bad API data (e.g. a missing weekend flag) or a UI logic gap (e.g. a dropped field, wrong include/weekend math)? I coordinate with the API team when it's data-side, and fix the UI at its source following best practices — fixing the cause, not just the red error.

### ทีม / Team
3–5 คนต่อโปรเจค; ผมดูแล UI ทั้งหมด และ mentor junior 1 คน

---

## 2. 🛒 Water Park Ticket Ecommerce — React

**ประเภท:** งานบริษัท | **Role:** Frontend Developer | **Stack:** React, TypeScript | **รูปภาพประกอบ:** `public/images/project-ecommerce.png`

### ภาพรวม / Overview
**TH:** เว็บขายตั๋วสวนน้ำ — เลือก package, ใส่ตะกร้า, ชำระเงินผ่าน 2C2P แล้วแสดงสถานะ success ให้ user
**EN:** A water-park ticketing site — choose a package, add to cart, pay via the 2C2P gateway, then show the user a success status.

### สิ่งที่รับผิดชอบ / What I built
- Product/package page, Cart, Checkout, User login
- จัดการตะกร้าด้วย session storage (เพิ่ม/ลดสินค้า)
- เชื่อมต่อ payment gateway **2C2P** และ handle สถานะหลังชำระเงิน

### ความท้าทาย / Challenge
**TH:** โปรเจคนี้กดดันเรื่อง **เวลา** เป็นหลัก (งานสั่งวันนี้เอาวันนี้) เวลามีบั๊ก UI หรือข้อมูลผิดต้องแก้ด่วน วิธีของผมคือหา solution ที่เร็วที่สุดเพื่อแก้ให้ทัน และถ้าไม่ทันจริงๆ ก็ **สื่อสาร/เจรจากับทีม** ตรงไปตรงมาว่างานจะเสร็จเมื่อไหร่
**EN:** This project was mostly about **time pressure** (same-day requests). When UI bugs or wrong data appeared, I found the fastest viable fix to meet the deadline — and when it wasn't feasible, I communicated transparently with the team about realistic timing.

---

## 3. 🏢 Business / Corporate Websites — Next.js

**ประเภท:** งานบริษัท (Smart Finder Co., Ltd.) | **Role:** Frontend Developer | **Stack:** Next.js, TypeScript | **รูปภาพประกอบ:** `public/images/project-corporate.png`

### ภาพรวม / Overview
**TH:** เว็บไซต์เชิงธุรกิจ 2 ตัวที่พัฒนาด้วย Next.js
1. เว็บนำเสนอ **ห้องพัก / ห้องสัมมนา** — แสดงรูปภาพ กิจกรรม และบริการของสถานที่
2. เว็บ **บริการและผลิตภัณฑ์ของบริษัท** — นำเสนอกิจกรรมและบริการของ Smart Finder Co., Ltd.

**EN:** Two business-facing websites built with Next.js:
1. A site presenting **rooms / seminar venues** — showcasing photos, activities, and services
2. A **company services & products** site presenting the company's offerings

### สิ่งที่รับผิดชอบ / What I built
- พัฒนา UI/หน้าเว็บด้วย Next.js, จัด layout นำเสนอเนื้อหา/รูปภาพ
- เน้นการแสดงผลที่สวยงาม responsive และโหลดเร็ว (SSR/SSG)

> หมายเหตุ: บนเว็บ portfolio สาธารณะให้เลี่ยงชื่อบริษัท/ลูกค้าตามที่เจ้าของสั่ง

---

## 4. 🧪 LifeOS — Personal Productivity App (Side Project)

**ประเภท:** โปรเจคส่วนตัว | **Stack:** Next.js | **สร้างร่วมกับ AI** | **รูปภาพประกอบ:** `public/images/project-lifeos.png`

### ภาพรวม / Overview
**TH:** แอปจัดการชีวิตส่วนตัว (LifeOS) — ดู routine ตัวเอง, จัดการเรื่องการชำระเงิน/ค่าใช้จ่ายต่างๆ พัฒนาด้วย Next.js โดยใช้ AI ช่วยเขียน เป็นการฝึกใช้ AI ทำงานจริงและทดลอง Next.js
**EN:** A personal "life operating system" — track daily routines and manage payments/expenses. Built with Next.js, developed with heavy AI assistance — a hands-on way to practice AI-driven development and Next.js.

> จุดเด่น: แสดงให้เห็นความสามารถในการ **ใช้ AI สร้างของจริง** (เชื่อมกับ `04-ai-expertise.md`)

---

## รายการ TODO (เจ้าของช่วยเติม)
- [ ] ลิงก์ demo / repo ของแต่ละโปรเจกต์ (ถ้าเปิดเผยได้)
- [x] รูป screenshot / mockup สำหรับ project card
- [ ] ตัวเลข impact (จำนวนโรงแรม, ยอดขายตั๋ว, user ฯลฯ) ถ้ามี
