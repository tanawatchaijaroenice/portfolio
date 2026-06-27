# Resume — หน้า 2 (รายละเอียดประสบการณ์ & ผลงาน)

> เนื้อหาสำหรับใส่ในเรซูเม่หน้า 2 — เกลาเป็นภาษามืออาชีพแล้ว ใช้คู่กับหน้าแรก
> มีทั้งฉบับ **ภาษาไทย** และ **English** เลือกใช้ตามบริษัทที่สมัคร

---

# 🇹🇭 ฉบับภาษาไทย

## ประสบการณ์การทำงาน (รายละเอียด)

### Front-End Developer | Smart Finder Co., Ltd. | 2022 – ปัจจุบัน

รับผิดชอบงานฝั่ง Front-End ทั้งหมดของฟีเจอร์ที่ดูแล ตั้งแต่ UI logic, การจัดการฟอร์ม
ไปจนถึง state management โดยทำงานในทีมขนาด 3–5 คน และให้คำแนะนำ (mentor) นักพัฒนารุ่นน้อง 1 คน

**ความรับผิดชอบหลัก**
- พัฒนา UI ของระบบบริหารจัดการโรงแรม (PMS) ด้วย Angular ครอบคลุมโมดูลการจอง, cashier, การออกใบกำกับภาษี และการจัดการ package/voucher
- ออกแบบและพัฒนา business logic ฝั่ง client ที่ซับซ้อน เช่น การคำนวณภาษี (tax/VAT/service) และการคิดค่าห้องตาม rate ที่ตั้งค่าไว้
- เชื่อมต่อและจัดการข้อมูลจาก REST API พร้อมจัดการ state ของฟอร์มที่มีหลายเงื่อนไข
- วิเคราะห์และแก้ไขปัญหาโดยมุ่งหาสาเหตุที่ต้นเหตุ (root cause) เพื่อแก้ไขอย่างยั่งยืน ไม่ใช่แก้เฉพาะอาการ
- ประสานงานกับทีม Back-End/API เพื่อระบุว่าปัญหาเกิดจากข้อมูลหรือฝั่ง UI และหาทางแก้ที่เหมาะสมที่สุด
- ให้คำแนะนำนักพัฒนารุ่นน้องเรื่องแนวทางการแก้โค้ดที่กระทบระบบเดิมน้อยที่สุด และการต่อยอดงานเดิม

---

## ผลงานเด่น (Selected Projects)

### 1. ระบบบริหารจัดการโรงแรม (Hotel Management System – PMS)
**บทบาท:** Front-End Developer · **เทคโนโลยี:** Angular, RxJS, Signals, TypeScript, SCSS

ระบบสำหรับให้โรงแรมใช้บริหารงานประจำวัน เช่น การรับจอง การ check-in การออกใบกำกับภาษี และงาน cashier

- พัฒนาหน้าจอง (Booking) พร้อมปฏิทินแบบ drag & drop และตารางจัดการข้อมูล
- พัฒนา logic การ gen posting ค่าห้อง โดยดึงข้อมูลจาก API มาวนสร้างรายการตาม rate ของแต่ละ room type และรองรับกรณีลูกค้าขยาย/ลดจำนวนวันเข้าพัก (extend)
- ออกแบบการคำนวณค่าห้องที่แปรผันตามเงื่อนไขจริง — rate, ABF, รายการ include, วันหยุดสุดสัปดาห์ และวันหยุดนักขัตฤกษ์ รวมถึงปรับตามจำนวนผู้เข้าพัก
- พัฒนาหน้าออกใบกำกับภาษี (Tax Invoice) และปรับปรุง logic การคำนวณ tax/VAT/service และยอดรวม โดยผูกข้อมูลอัตราภาษีจาก API เข้ากับ state ของฟอร์ม
- พัฒนาหน้า Cashier (post/pay) รวมถึงการเพิ่ม/ลบรายการ transaction
- พัฒนาหน้า Package และระบบ redeem voucher ด้วย QR code แบบ responsive
- **จุดเด่น:** เชี่ยวชาญการแปลง business logic ทางการเงินที่ซับซ้อนให้เป็น UI ที่คำนวณถูกต้องและเชื่อถือได้

### 2. เว็บขายตั๋วสวนน้ำ (Water Park Ticket E-commerce)
**บทบาท:** Front-End Developer · **เทคโนโลยี:** React, TypeScript, 2C2P

เว็บไซต์ e-commerce สำหรับเลือกแพ็กเกจตั๋วสวนน้ำและชำระเงินออนไลน์

- พัฒนาหน้าแสดงสินค้า, ตะกร้าสินค้า, ขั้นตอน checkout และระบบ login ผู้ใช้
- จัดการสถานะตะกร้าสินค้าด้วย session storage (เพิ่ม/ลดรายการ)
- เชื่อมต่อ payment gateway 2C2P และจัดการการแสดงสถานะหลังชำระเงินสำเร็จ
- **จุดเด่น:** ส่งมอบงานได้ภายใต้แรงกดดันด้านเวลาสูง (งานเร่งรายวัน) พร้อมสื่อสารกับทีมอย่างตรงไปตรงมาเมื่อมีข้อจำกัดด้านเวลา

### 3. เว็บไซต์เชิงธุรกิจ/องค์กร (Business / Corporate Websites)
**บทบาท:** Front-End Developer · **เทคโนโลยี:** Next.js, TypeScript

เว็บไซต์นำเสนอ 2 โปรเจค — เว็บแสดงห้องพัก/ห้องสัมมนา และเว็บบริการ/ผลิตภัณฑ์ขององค์กร

- พัฒนา UI และ layout การนำเสนอเนื้อหาและรูปภาพให้ดึงดูดและใช้งานง่าย
- เน้นการแสดงผลแบบ responsive และโหลดเร็วด้วยเทคนิค SSR/SSG ของ Next.js

### 4. LifeOS — แอปจัดการชีวิตส่วนตัว (Side Project)
**บทบาท:** ผู้พัฒนา · **เทคโนโลยี:** Next.js, AI

แอปส่วนตัวสำหรับติดตาม routine ประจำวันและจัดการค่าใช้จ่าย พัฒนาร่วมกับ AI ตั้งแต่ต้นจนจบ

- ฝึกการพัฒนาแบบ AI-driven และทดลองใช้ Next.js กับโปรเจคจริง
- สะท้อนความสามารถในการใช้ AI เป็นเครื่องมือสร้างผลงานจริงได้อย่างมีประสิทธิภาพ

---

## จุดแข็งเชิงวิชาชีพ (Professional Strengths)

- **แก้ปัญหาที่ต้นเหตุ:** วิเคราะห์หาสาเหตุที่แท้จริงก่อนลงมือแก้ เพื่อให้การแก้ไขยั่งยืนและกระทบระบบเดิมน้อยที่สุด
- **เชี่ยวชาญ business logic ที่ซับซ้อน:** โดยเฉพาะการคำนวณเชิงการเงินในระบบ enterprise
- **ละเอียดรอบคอบ:** คิดและวิเคราะห์ข้อมูลก่อนตัดสินใจและสื่อสารเสมอ
- **ทำงานเป็นทีม:** ประสานงานข้ามทีม (API/Back-End) และให้คำแนะนำรุ่นน้องได้
- **เรียนรู้เร็ว & ปรับตัวดี:** กระตือรือร้นกับเทคโนโลยี ฟีเจอร์ และความท้าทายใหม่ๆ
- **AI-Augmented Engineering:** ใช้ AI (Claude Code, Antigravity) เป็นเครื่องมือทำงานอย่างเป็นระบบ

---
---

# 🇬🇧 English Version

## Professional Experience (Detailed)

### Front-End Developer | Smart Finder Co., Ltd. | 2022 – Present

Own the entire front-end of assigned features — from UI logic and form handling to state
management — working in 3–5 person teams and mentoring one junior developer.

**Key Responsibilities**
- Build the UI of a hotel Property Management System (PMS) in Angular, covering booking, cashier, tax-invoicing, and package/voucher modules.
- Design and implement complex client-side business logic, including tax/VAT/service calculations and room-charge computation based on configured rates.
- Integrate and manage data from REST APIs while handling multi-condition form state.
- Diagnose and fix issues at their root cause for sustainable solutions, rather than patching symptoms.
- Coordinate with the Back-End/API team to isolate whether issues are data- or UI-side and choose the most appropriate fix.
- Mentor a junior developer on low-impact code changes and on safely extending existing features.

---

## Selected Projects

### 1. Hotel Management System (PMS)
**Role:** Front-End Developer · **Tech:** Angular, RxJS, Signals, TypeScript, SCSS

A system hotels use to run daily operations — bookings, check-in, tax invoicing, and cashier tasks.

- Built the Booking screen with a drag-and-drop calendar and data-management tables.
- Developed room-charge "gen posting" logic that loops over API data to create postings per room-type rate, handling stay extensions (adding/reducing nights).
- Implemented room-charge calculation that varies by real conditions — rate, ABF, included items, weekends, and public holidays — and adjusts to guest count.
- Built the Tax Invoice screen and refined the tax/VAT/service and total calculations, binding API-driven tax rates into form state.
- Built the Cashier (post/pay) screen, including adding/removing transaction rows.
- Built the Package screen and a responsive QR-code voucher redemption flow.
- **Highlight:** Skilled at turning complex financial business logic into accurate, reliable UI.

### 2. Water Park Ticket E-commerce
**Role:** Front-End Developer · **Tech:** React, TypeScript, 2C2P

An e-commerce site for selecting water-park ticket packages and paying online.

- Built the product listing, shopping cart, checkout flow, and user login.
- Managed cart state with session storage (add/remove items).
- Integrated the 2C2P payment gateway and handled post-payment success status.
- **Highlight:** Delivered under high time pressure (same-day requests) with transparent communication when timelines were tight.

### 3. Business / Corporate Websites
**Role:** Front-End Developer · **Tech:** Next.js, TypeScript

Two presentation sites — one for rooms/seminar venues and one for company services and products.

- Built the UI and content/image presentation layouts for an engaging, easy-to-use experience.
- Focused on responsive rendering and fast loads using Next.js SSR/SSG.

### 4. LifeOS — Personal Productivity App (Side Project)
**Role:** Developer · **Tech:** Next.js, AI

A personal app to track daily routines and manage expenses, built end-to-end with AI assistance.

- Practiced AI-driven development and experimented with Next.js on a real project.
- Demonstrates the ability to use AI effectively as a tool to ship real work.

---

## Professional Strengths

- **Root-cause problem solver:** analyze the true cause before fixing, for sustainable, low-impact solutions.
- **Complex business logic:** especially financial calculations in enterprise systems.
- **Detail-oriented:** think and analyze before deciding and communicating.
- **Team player:** collaborate cross-team (API/Back-End) and mentor juniors.
- **Fast learner & adaptable:** energized by new technologies, features, and challenges.
- **AI-Augmented Engineering:** use AI (Claude Code, Antigravity) systematically as an engineering tool.
