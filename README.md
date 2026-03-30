# Practical lesson pz-GOF  
# Реалізація GOF патернів проєктування  

> У цьому занятті студенти отримують практичний досвід імплементації класичних патернів проєктування (GoF — Gang of Four).  
> Мета — навчитися застосовувати породжувальні, структурні та поведінкові патерни для покращення архітектури програмних рішень.


## What need to do:
* Ознайомитися з основними групами патернів GoF:
  * Породжувальні (Creational)
  * Структурні (Structural)
  * Поведінкові (Behavioral)
* Реалізувати:
  * **2 породжувальні патерни** (наприклад: Factory Method, Abstract Factory, Builder, Singleton, Prototype)
  * **2 структурні патерни** (наприклад: Adapter, Facade, Decorator, Composite, Proxy, Bridge)
  * **1 поведінковий патерн** (наприклад: Strategy, Observer, Command, Iterator, Chain of Responsibility)
* Продемонструвати роботу кожного патерна (консольний приклад або простий сценарій)
* Пояснити, яку проблему вирішує кожен патерн
* Порівняти, як патерни покращують архітектуру коду порівняно з «анти-прикладами»
* Підготувати коротку документацію в README.md


## Acceptance criteria
* Використовуючи мову програмування Typescript
* Реалізовано **мінімум 5 патернів**:
  * 2 породжувальні
  * 2 структурні
  * 1 поведінковий
* Кожен патерн:
  * реалізований у окремій директорії  
  * має зрозумілий приклад застосування  
  * має коротке пояснення призначення  
  * демонструє очікувану роботу (через console.log або unit-тест)
* Код структурований за групами патернів
* README.md містить:
  * опис реалізованих патернів  
  * приклади запуску  
  * короткі висновки  
* Самостійна робота виконана:
  * додаткові патерни / додаткові приклади / альтернативні реалізації (опціонально)
* Проєкт успішно запускається

## Directory Structure

```
├── pz-GOF
│   ├── src
│   │   ├── creational
│   │   │   ├── factory-method
│   │   │   │   ├── index.ts (імпорти + runFactoryMethod)
│   │   │   │   ├── notification.ts
│   │   │   │   ├── email-notification.ts
│   │   │   │   ├── sms-notification.ts
│   │   │   │   ├── push-notification.ts
│   │   │   │   ├── notification-service.ts
│   │   │   │   ├── email-service.ts
│   │   │   │   ├── sms-service.ts
│   │   │   │   └── push-service.ts
│   │   │   ├── builder
│   │   │   │   ├── index.ts (імпорти + runBuilder)
│   │   │   │   ├── pizza.ts
│   │   │   │   ├── pizza-builder.ts
│   │   │   │   ├── custom-pizza-builder.ts
│   │   │   │   └── pizza-director.ts
│   │   │   └── singleton
│   │   │       ├── index.ts (імпорти + runSingleton)
│   │   │       ├── log-level.ts
│   │   │       └── app-logger.ts
│   │   ├── structural
│   │   │   ├── adapter
│   │   │   │   ├── index.ts (імпорти + runAdapter)
│   │   │   │   ├── payment-processor.ts
│   │   │   │   ├── legacy-bank-gateway.ts
│   │   │   │   └── bank-gateway-adapter.ts
│   │   │   ├── facade
│   │   │   │   ├── index.ts (імпорти + runFacade)
│   │   │   │   ├── video-decoder.ts
│   │   │   │   ├── audio-decoder.ts
│   │   │   │   ├── subtitle-parser.ts
│   │   │   │   ├── buffer-manager.ts
│   │   │   │   ├── display-renderer.ts
│   │   │   │   ├── playback-options.ts
│   │   │   │   └── media-player-facade.ts
│   │   │   └── decorator
│   │   │       ├── index.ts (імпорти + runDecorator)
│   │   │       ├── coffee.ts
│   │   │       ├── simple-coffee.ts
│   │   │       ├── coffee-decorator.ts
│   │   │       ├── milk-decorator.ts
│   │   │       ├── sugar-decorator.ts
│   │   │       ├── vanilla-decorator.ts
│   │   │       └── whip-decorator.ts
│   │   ├── behavioral
│   │   │   ├── strategy
│   │   │   │   ├── index.ts (імпорти + runStrategy)
│   │   │   │   ├── sort-strategy.ts
│   │   │   │   ├── bubble-sort-strategy.ts
│   │   │   │   ├── quick-sort-strategy.ts
│   │   │   │   ├── merge-sort-strategy.ts
│   │   │   │   ├── filter-strategy.ts
│   │   │   │   └── data-sorter.ts
│   │   │   └── observer
│   │   │       ├── index.ts (імпорти + runObserver)
│   │   │       ├── observer.ts
│   │   │       ├── event-emitter.ts
│   │   │       ├── stock-tick.ts
│   │   │       ├── stock-market.ts
│   │   │       ├── price-alert-observer.ts
│   │   │       ├── portfolio-observer.ts
│   │   │       ├── news-feed-observer.ts
│   │   │       └── audit-log-observer.ts
│   ├── examples
│   │   ├── run-all.ts
│   ├── .editorconfig
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
└──

```

## Архітектура проєкту

Після рефакторингу код організовано за принципом **один клас — один файл** для максимальної модульності та читабельності:

- **Кожен клас/інтерфейс** знаходиться в окремому `.ts` файлі
- **index.ts** у кожній директорії патерну містить тільки:
  - Імпорти всіх необхідних класів
  - Функцію запуску демонстрації (`run*`)
- Така структура дозволяє:
  - Легко підтримувати та модифікувати окремий клас
  - Уникати великих файлів з усіма класами
  - Покращувати читабельність коду
  - Спростити тестування окремих компонентів

### Приклад структури патерну:

Для патерну **Observer**:
- `observer.ts` — інтерфейс Observer
- `event-emitter.ts` — клас EventEmitter
- `stock-market.ts` — клас StockMarket
- `price-alert-observer.ts` — клас PriceAlertObserver
- тощо...
- `index.ts` — імпорти + `runObserver()`

Це забезпечує чистоту архітектури та відповідає принципам SOLID та модульності.

## Реалізовані патерни

### Creational (Породжувальні)

#### 1. Factory Method
**Проблема:** Створення об'єктів без вказівки конкретного класу.  
**Рішення:** Суперклас визначає метод для створення об'єктів, підкласи вирішують, який клас інстанціювати.  
**Приклад:** Сервіси сповіщень (Email, SMS, Push) — клієнт викликає `notify()`, не знаючи про конкретні класи.  
**Запуск:** `npm run factory-method`

#### 2. Builder
**Проблема:** Конструктори з багатьма параметрами стають нечитабельними.  
**Рішення:** Окремий клас Builder дозволяє будувати об'єкт крок за кроком через fluent API.  
**Приклад:** Конструктор піци — `setSize().setCrust().addTopping().build()`. Director інкапсулює рецепти.  
**Запуск:** `npm run builder`

#### 3. Singleton
**Проблема:** Забезпечити єдиний екземпляр класу та глобальну точку доступу.  
**Рішення:** Приватний конструктор + статичний метод `getInstance()`.  
**Приклад:** `AppLogger` — усі модулі отримують один об'єкт через `getInstance()`.  
**Запуск:** `npm run singleton`

### Structural (Структурні)

#### 4. Adapter
**Проблема:** Несумісні інтерфейси заважають інтеграції без зміни існуючого коду.  
**Рішення:** Клас-обгортка транслює виклики від очікуваного інтерфейсу до реального.  
**Приклад:** `LegacyBankGateway` (приймає центи) адаптується до `PaymentProcessor` (приймає долари).  
**Запуск:** `npm run adapter`

#### 5. Facade
**Проблема:** Складна підсистема з багатьох класів ускладнює використання.  
**Рішення:** Єдиний клас Facade надає спрощений інтерфейс до всієї підсистеми.  
**Приклад:** `MediaPlayerFacade.play()` координує VideoDecoder, AudioDecoder, BufferManager тощо.  
**Запуск:** `npm run facade`

#### 6. Decorator
**Проблема:** Динамічно додавати поведінку до об'єктів без вибухового росту класів.  
**Рішення:** Клас-декоратор реалізує той самий інтерфейс і обгортає інший об'єкт.  
**Приклад:** Кава — `WhipDecorator(VanillaDecorator(MilkDecorator(SimpleCoffee())))`.  
**Запуск:** `npm run decorator`

### Behavioral (Поведінкові)

#### 7. Strategy
**Проблема:** Клас містить кілька алгоритмів; умовні оператори захаращують клас.  
**Рішення:** Кожен алгоритм — окремий клас, що реалізує спільний інтерфейс. Контекст делегує виконання.  
**Приклад:** `DataSorter` приймає будь-який `SortStrategy` (Bubble, Quick, Merge) і може змінити його в рантаймі.  
**Запуск:** `npm run strategy`

#### 8. Observer
**Проблема:** Кілька компонентів реагують на зміни стану одного об'єкта без жорсткого зв'язування.  
**Рішення:** Subject підтримує список Observer-ів і сповіщає їх при зміні стану.  
**Приклад:** `StockMarket` сповіщає PriceAlertObserver, PortfolioObserver, AuditLogObserver при зміні цін.  
**Запуск:** `npm run observer`

## Запуск

```bash
npm install

# Усі патерни одразу
npm run run-all

# Або окремо
npm run factory-method
npm run builder
npm run singleton
npm run adapter
npm run facade
npm run decorator
npm run strategy
npm run observer
```

## Висновки

1. **Породжувальні патерни** вирішують проблему *як* і *коли* створювати об'єкти, відокремлюючи логіку створення від бізнес-логіки.
2. **Структурні патерни** описують *як* складати об'єкти у більші структури, зберігаючи гнучкість.
3. **Поведінкові патерни** визначають ефективні способи *комунікації* між об'єктами, зменшуючи пряму залежність.
4. Кожен патерн **відповідає принципам SOLID**: особливо Single Responsibility та Open/Closed.
5. TypeScript з інтерфейсами та абстрактними класами надає ідеальний інструментарій для реалізації GoF патернів.

