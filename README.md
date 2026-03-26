# Портфолио разработчика на Next.js

Интерактивное персональное портфолио, выполненное по техническому заданию: главная секция, блок "Обо мне", проекты, контакты, адаптивный дизайн, базовая SEO-настройка и подготовка к публикации на GitHub Pages.

## Технологии

- Next.js
- React
- TypeScript
- CSS
- ESLint
- GitHub Pages

## Запуск локально

```bash
npm install
npm run dev
```

Открыть в браузере: `http://localhost:3000`

## Сборка

```bash
npm run build
```

После сборки статическая версия сайта будет находиться в папке `out`.

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub и загрузите проект.
2. Выполните:

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/snanelx/NEKIFOROV.git
git push -u origin main
```

3. Если имя репозитория отличается от `NEKIFOROV`, перед деплоем укажите его:

```bash
set GITHUB_PAGES_REPO=YOUR_REPOSITORY_NAME
```

4. Опубликуйте сайт:

```bash
npm run deploy
```

5. В настройках GitHub откройте `Settings -> Pages`.
6. Для `Build and deployment` выберите источник `Deploy from a branch`.
7. Укажите ветку `gh-pages` и папку `/ (root)`.
8. После публикации сайт будет доступен по адресу:
   `https://snanelx.github.io/NEKIFOROV/`

## Как обновлять контент

- Текст и секции страницы находятся в `app/page.tsx`
- Контактная форма находится в `components/contact-form.tsx`
- Визуальное оформление находится в `app/globals.css`

## Что стоит заменить перед публикацией

- Ссылки `https://example.com/...` на реальные демо-проекты
- `https://github.com/snanelx/...` на реальные репозитории
- Контакты и email на актуальные
- При необходимости название репозитория в `next.config.ts`

## Автор

Проект подготовлен для допуска к экзамену по ТЗ на разработку персонального портфолио.
