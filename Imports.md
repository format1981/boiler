# Архитектурный гайд по ограничениям импортов

## Обзор архитектуры проекта

Проект имеет следующую структуру:
- `/domains` - содержит бизнес-домены (user, authentication, dictionary)
- `/core` - содержит базовые модули (router, http)
- `/shared` - содержит общие компоненты и утилиты (helpers, components)

Каждый домен имеет стандартную структуру:
- `api` - API-слой для взаимодействия с бэкендом
- `components` - UI-компоненты домена
- `views` - страницы/представления
- `store` - управление состоянием
- `types` - типы и интерфейсы
- `router` - маршрутизация
- `index.ts` - публичный интерфейс домена

## Правила импорта

### 1. Межмодульные импорты доменов

**Правило:** Импорт из одного домена в другой разрешен только через публичный интерфейс (index.ts).

```typescript
// ✅ Правильно
import { UserProfile } from '@domains/user';

// ❌ Неправильно
import { UserProfile } from '@domains/user/components/UserProfile';
```

### 2. Внутридоменные импорты

В соответствии с принципами DDD и FSD, более логичным является подход, при котором модули верхнего уровня могут импортировать модули нижнего уровня, но не наоборот. Это соответствует принципу инверсии зависимостей и обеспечивает более чистую архитектуру.

**Правило:** Внутри домена модули могут импортировать только из нижележащих слоев, но не из вышележащих.

```typescript
// Структура слоев (сверху вниз):
// views -> components -> store -> api -> types

// В файле domains/user/views/UserPage.tsx:

// ✅ Правильно
import { UserCard } from '../components';
import { userStore } from '../store';
import { fetchUser } from '../api';
import { UserType } from '../types';

// В файле domains/user/components/UserCard.tsx:

// ✅ Правильно
import { userStore } from '../store';
import { UserType } from '../types';

// ❌ Неправильно
import { UserPage } from '../views';

// В файле domains/user/api/userApi.ts:

// ✅ Правильно
import { UserType } from '../types';

// ❌ Неправильно
import { userStore } from '../store';
import { UserCard } from '../components';
```

### 3. Импорты HTTP-модуля

**Правило:** Импорт из `/core/http` разрешен только в папке `api` каждого домена.

```typescript
// В файле domains/user/api/userApi.ts:

// ✅ Правильно
import { httpClient } from '@core/http';

// В файле domains/user/components/UserProfile.tsx:

// ❌ Неправильно
import { httpClient } from '@core/http';
```

### 4. Импорты из shared

**Правило:** Импорт из `/shared` разрешен в любом месте приложения.

```typescript
// ✅ Правильно (в любом файле)
import { Button } from '@shared/components';
import { formatDate } from '@shared/helpers';
```