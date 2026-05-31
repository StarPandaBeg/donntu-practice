function ServicesSection() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="section-label">Услуги</p>
            <h2>Ключевые направления разработки</h2>
          </div>
          <p className="section-summary">
            Мы предлагаем комплексную техническую экспертизу для решения 
            бизнес-задач различного масштаба и сложности.
          </p>
        </div>

        <div className="services__grid">
          <article className="service-card service-card--featured">
            <div className="service-card__index">01</div>
            <h3>Веб и мобильная разработка</h3>
            <p>
              Создание современных SPA, SSR приложений и мобильных сервисов 
              на базе React, Next.js, Flutter и React Native с фокусом на 
              производительность и адаптивность.
            </p>
            <div className="service-card__tags">
              <span>Frontend / Backend</span>
              <span>iOS / Android</span>
              <span>UX / UI Design</span>
            </div>
          </article>
          <article className="service-card">
            <div className="service-card__index">02</div>
            <h3>Интеграция AI и LLM</h3>
            <p>
              Внедрение ChatGPT/DeepSeek, разработка RAG-систем по внутренним 
              документам, создание AI-ассистентов и обучение специализированных моделей.
            </p>
          </article>
          <article className="service-card">
            <div className="service-card__index">03</div>
            <h3>Бэкенд и инфраструктура</h3>
            <p>
              Проектируем устойчивые системы, которые выдерживают высокие 
              нагрузки. Разработка API (REST/GraphQL) и настройка CI/CD процессов.
            </p>
          </article>
          <article className="service-card service-card--outline">
            <div className="service-card__index">04</div>
            <h3>Системное программирование</h3>
            <p>
              Разработка низкоуровневых утилит, оптимизация памяти, 
              проектирование DSL и создание Embedded-решений на базе Arduino.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
