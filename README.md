# Product Card Creation – TableCRM Test Task

Тестовое задание для позиции React-разработчика в **tablecrm.com**.

Реализована форма создания карточки товара с отправкой данных в API TableCRM.

---

## Стек технологий

- **Next.js (App Router, SSR)**
- **React Hook Form**
- **Zod** (валидация формы)
- **axios**
- **shadcn/ui**
- **TypeScript**

---

## Функциональность

- Создание карточки товара
- Валидация всех полей формы
- Генерация артикула
- SEO-поля (title, description, keywords)
- Приведение данных формы к payload API
- Отправка данных через серверный API (`/api/card`)
- Обработка ошибок API
- Уведомления (toast)

---

## Безопасность

- API token TableCRM хранится в `.env.local`
- Токен **не доступен на клиенте**
- Запросы к TableCRM выполняются только на сервере

---

## Архитектура

- UI не знает про внешний API
- Данные формы маппятся в payload через отдельный mapper
- Клиент → Next API route → TableCRM API
