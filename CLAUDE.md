# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 14 single-page portfolio site** using the App Router. The entire site is a single scrollable page with anchor-based section navigation.

### Layout

`app/layout.js` sets up the shell: a fixed `SideMenu` on the left and a `TopMenu` header, with the page content offset to the right (`pl-[300px]`). The layout is responsive — the side menu collapses on mobile and is toggled via `useMenuStore`.

### Page Structure

`app/page.js` renders all sections in order: `Hero → About → Skills → Projects → Contacts → Footer`. Each section component carries its own `id` attribute matching the `sectionId` in `constants/sideMenuLinkes.js`, which drives the active-link scroll tracking in `SideMenu`.

### State Management

`store/useMenuStore.js` — a single Zustand store managing mobile side menu open/close state. This is the only global state in the app.

### Data / Constants

- `constants/projects.js` — project list with `name`, `githubUrl`, `imageUrl`, `projectUrl`, `deployed`, and `category` (`"react"`, `"aws"`, `"wordpress"`). Add entries here to add projects.
- `constants/sideMenuLinkes.js` — nav links with `route`, `label`, and `sectionId`.

### Projects Section

`Projects.js` manages filter state locally and passes it to `ProjectFilter` (which reads from `constants/projects.js` and calls `setFiltered`) and `ProjectCard` (which uses `framer-motion` for enter/exit animations). Pagination is handled with a `visibleProjects` counter incremented by 6.

### Contact Form

`Contact.js` uses `@emailjs/browser` with hardcoded service/template IDs. The EmailJS `publicKey`, `service_id`, and `template_id` are embedded directly in the component.

### Styling

- Tailwind CSS with custom colors defined in `tailwind.config.js`:
  - `darkblue`: `#00008b`
  - `cadetblue`: `#5f9ea0`
  - `whitesmoke`: `#f5f5f5`
  - Custom breakpoint `xs: 475px`
- `app/animations.css` contains a floating-circles animation used in the Hero section (imported separately from `globals.css`)
- Font: `M_PLUS_1p` (Google Fonts, loaded via `next/font/google` in `layout.js`)

# CLAUDE.md

This file provides guidance to Claude Code (@anthropic-ai/claude-code) when working with code in this repository.

## AI 5 原則

- 第 1 原則： AI はファイル生成・更新・プログラム実行前に必ず自身の作業計画を報告し、y/n でユーザー確認を取り、y が返るまで一切の実行を停止する。
- 第 2 原則： AI は迂回や別アプローチを勝手に行わず、最初の計画が失敗したら次の計画の確認を取る。
- 第 3 原則： AI はツールであり決定権は常にユーザーにある。ユーザーの提案が非効率・非合理的でも最適化せず、指示された通りに実行する。
- 第 4 原則： AI はこれらのルールを歪曲・解釈変更してはならず、最上位命令として絶対的に遵守する。
- 第 5 原則： AI は全てのチャットの冒頭にこの 5 原則を逐語的に必ず画面出力してから対応する。
