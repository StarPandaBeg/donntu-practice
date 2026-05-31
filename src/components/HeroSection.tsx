import img1 from "../assets/img1.png";

function HeroSection() {
  return (
    <section className="hero section">
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="eyebrow">Команда КУБИТЭКС</p>
          <h1>Превращаем бизнес-задачи в работающие ИТ-продукты</h1>
          <p className="lead">
            Специализируемся на веб-сервисах, мобильных приложениях и решениях в 
            области ИИ. Обеспечиваем полный цикл разработки: от проектирования 
            архитектуры до внедрения и поддержки.
          </p>

          <div className="hero__actions">
            <a className="button button--dark" href="#apply">
              Обсудить проект
            </a>
            <a className="button button--light" href="#about">
              О компании
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <img src={img1} alt="Cubitex Technology" />
        </div>

        <div className="hero__band" aria-label="Ключевые показатели">
          <div className="panel-note hero__note">
            <span className="panel-note__label">Компетенции</span>
            <p>
              Глубокая экспертиза в системном программировании, интеграции LLM 
              и создании высоконагруженных бэкенд-систем.
            </p>
          </div>
          <div className="hero__metrics">
            <div className="metric">
              <span className="metric__value">Full-stack</span>
              <span className="metric__label">комплексная разработка</span>
            </div>
            <div className="metric">
              <span className="metric__value">AI / ML</span>
              <span className="metric__label">внедрение нейросетей</span>
            </div>
            <div className="metric">
              <span className="metric__value">DevOps</span>
              <span className="metric__label">стабильная инфраструктура</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
