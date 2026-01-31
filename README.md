# Shanti Frontend

Це фронтенд частина проекту Shanti, створена з використанням React, TypeScript, Vite та Tailwind CSS.

## Технології

- **React 18** - UI бібліотека
- **TypeScript** - типізація
- **Vite** - збірка та dev сервер
- **Tailwind CSS** - стилізація
- **Radix UI** - компоненти UI
- **React Query** - управління станом сервера
- **Wouter** - роутинг
- **React Hook Form** - робота з формами
- **Zod** - валідація
- **Framer Motion** - анімації

## Встановлення

1. Клонуйте репозиторій
2. Встановіть залежності:
```bash
npm install
```

## Запуск

### Режим розробки
```bash
npm run dev
```

### Збірка для продакшену
```bash
npm run build
```

### Перегляд збірки
```bash
npm run preview
```

### Перевірка типів
```bash
npm run check
```

## Структура проекту

```
src/
├── components/          # React компоненти
│   ├── ui/             # Базові UI компоненти
│   ├── CyberButton.tsx
│   ├── CyberCard.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── SectionHeading.tsx
├── hooks/              # Custom React hooks
├── lib/                # Утиліти та конфігурація
├── pages/              # Сторінки додатку
├── types/              # TypeScript типи
├── App.tsx             # Головний компонент
├── main.tsx            # Точка входу
└── index.css           # Глобальні стилі
```

## Особливості

- Повністю типізований з TypeScript
- Адаптивний дизайн
- Темна/світла тема
- Компоненти з анімаціями
- Валідація форм
- Оптимізований для продакшену

## API

Наразі проект налаштований на роботу з mock даними. Для підключення до реального API:

1. Оновіть хуки в `src/hooks/`
2. Замініть mock функції на реальні API виклики
3. Налаштуйте правильні endpoints

## Ліцензія

MIT