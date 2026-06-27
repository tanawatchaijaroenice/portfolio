# AGENTS.md

มาตรฐานการทำงานสำหรับ AI agent ทุกตัวบนโปรเจคนี้ — อ่านไฟล์นี้ก่อนเริ่มทุกครั้ง
(ไฟล์นี้คือแหล่งความจริงของมาตรฐานการทำงาน; `CLAUDE.md` ชี้มาที่นี่)

## 1. โปรเจคนี้คืออะไร

เว็บ **Portfolio ส่วนตัวของ ธนวัฒน์ ไชยเจริญ (Tanawat Chaijaroen)** สร้างด้วย **Angular 21**
เป้าหมาย: ใช้สมัครงานในตำแหน่ง **Frontend Developer** (เน้น Angular + business logic ที่ซับซ้อน)

- **กลุ่มผู้อ่านเป้าหมาย:** recruiter / hiring manager / tech lead
- **ภาษา:** สองภาษา (ไทย + อังกฤษ) — เนื้อหาทุกส่วนควรรองรับทั้งสองภาษา
- **โทน:** มืออาชีพ กระชับ ซื่อสัตย์ ไม่โม้เกินจริง (ดู §5)

## 2. แหล่งข้อมูล (Source of Truth)

| ต้องการอะไร | ดูที่ไหน |
| :--- | :--- |
| เนื้อหา/ข้อความที่จะแสดงบนเว็บ | `content/` (ดู §3) |
| Design system, สี, typography, spacing | `DESIGN.md` |
| โครงสร้างโค้ด/คอมโพเนนต์ | `src/app/` |

**กฎสำคัญ:** อย่า hardcode เนื้อหา (ประวัติ, โปรเจค, ทักษะ) ลงในโค้ดโดยตรงโดยไม่อัปเดต `content/` ด้วย — `content/` คือแหล่งความจริงของเนื้อหา ถ้าจะแก้ข้อความบนเว็บ ให้แก้ที่ `content/` ก่อนหรือพร้อมกัน

## 3. โครงสร้างเนื้อหา (`content/`)

แต่ละไฟล์แมปกับ section/component บนหน้าเว็บ:

| ไฟล์ | section | component |
| :--- | :--- | :--- |
| `content/00-profile.md` | hero + about + contact | `hero`, `contact`, `footer` |
| `content/01-skills.md` | ทักษะเทคนิค | `expertise` |
| `content/02-experience.md` | ประสบการณ์ทำงาน | `journey` |
| `content/03-projects.md` | ผลงาน/โปรเจค | `projects` |
| `content/04-ai-expertise.md` | ทักษะ AI (จุดขายเด่น) | `ai` (section แยก) |

## 3.1 ระบบ i18n (สองภาษา) — สำคัญ

เว็บแสดงผลสองภาษาผ่าน **signal-based service** (ไม่ใช้ไลบรารีภายนอก):

- **เนื้อหาในโค้ด:** `src/app/i18n/content.ts` — object `CONTENT` แยก `th` / `en` (typed) + `CONTACT_INFO` (ข้อมูลกลางที่ไม่ขึ้นกับภาษา)
- **Service:** `src/app/services/language.service.ts` — `LanguageService`
  - `lang()` signal ภาษาปัจจุบัน (`'th' | 'en'`), default `'th'`, จำค่าใน `localStorage`
  - `t()` computed → เนื้อหาของภาษาปัจจุบัน
  - `toggle()` สลับภาษา (ปุ่มอยู่ใน navbar)
- **คอมโพเนนต์:** `inject(LanguageService)` แล้วผูก template กับ `lang.t().<section>...`

**กฎ:** เพิ่ม/แก้ข้อความบนเว็บ → แก้ที่ `content.ts` (ทั้ง `th` และ `en` ให้โครงสร้างตรงกัน) และ sync กับไฟล์ markdown ใน `content/` ด้วย เพื่อให้ source of truth ตรงกัน

## 4. มาตรฐานเทคนิค (Angular 21)

- **Standalone components** เท่านั้น (ไม่มี NgModule) — ตามที่โปรเจคใช้อยู่
- ตั้งชื่อไฟล์แบบ Angular ใหม่: `hero.ts`, `hero.html`, `hero.scss`, `hero.spec.ts` (ไม่ใช่ `.component.ts`)
- **State:** ใช้ **Signals** เป็นหลักสำหรับ component state; ใช้ RxJS เมื่อจัดการ async/stream จริงๆ
- **Control flow:** ใช้ `@if` / `@for` / `@switch` (ไม่ใช่ `*ngIf` / `*ngFor`)
- **Styling:** SCSS + design tokens ตาม `DESIGN.md` เท่านั้น
  - ห้าม border 1px เพื่อแบ่ง section — ใช้การเปลี่ยน background (No-Line Rule)
  - ห้ามใช้สีดำสนิท `#000` — ใช้ `on-surface` (`#2d2f2f`)
  - shadow เฉพาะตอน hover และต้องฟุ้ง (ดู DESIGN.md §4)
- **TypeScript:** strict typing เสมอ หลีกเลี่ยง `any`
- **Accessibility:** ใส่ alt, aria-label, semantic HTML, รองรับ keyboard
- **Responsive:** ต้องสวยทั้ง mobile / tablet / desktop

## 5. หลักการเขียนเนื้อหา (สำคัญมาก — เพราะใช้สมัครงาน)

- **ซื่อสัตย์ ไม่โม้:** จัดจุดยืนเป็น **Frontend-focused**
  - Fullstack = "เข้าใจ concept + ต่อ REST API + เขียน Node.js endpoint ง่ายๆ ได้" — **ห้ามเคลมว่าเป็น backend/fullstack เต็มตัว**
- **เน้นจุดแข็งจริง:** business logic ที่ซับซ้อน (tax/VAT/service calc, room charge posting, rate setup), debug หา root cause, ทำงานเป็นระบบ
- **ภาษาอังกฤษของเจ้าของ:** อ่านได้ดี แต่พูดไม่คล่อง — ถ้ามีการระบุ language ใน resume ให้สื่อตามจริง (เช่น "English: Professional reading, conversational")
- เนื้อหาทุกชิ้น เขียนทั้งไทยและอังกฤษ

## 6. คำสั่งที่ใช้บ่อย

```bash
npm start      # dev server -> http://localhost:4200
npm run build  # production build -> dist/
npm test       # unit test (Vitest)
```

## 7. มารยาทการทำงาน

- ทำงานเป็น section ทีละส่วนได้ บอกความคืบหน้าตามจริง
- ถ้าเนื้อหายังขาด (เช่น ยังไม่มีรูปโปรเจค, ยังไม่มี LinkedIn) ให้ทำ placeholder ที่ชัดเจนและแจ้งเจ้าของ อย่าแต่งข้อมูลขึ้นเอง
- ก่อน build/commit ตรวจให้ผ่าน (lint/test) และรายงานผลตามจริง
