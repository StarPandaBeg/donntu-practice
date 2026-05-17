import img1 from "../assets/img1.png";

function HeroSection() {
  return (
    <section className="hero section">
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="eyebrow">Главный экран</p>
          <h1>Краткий заголовок с основным предложением платформы.</h1>
          <p className="lead">
            Здесь будет короткое описание: для кого Кубит, какую задачу решает
            и почему пользователю стоит идти дальше по странице.
          </p>

          <div className="hero__actions">
            <a className="button button--dark" href="#apply">
              Основной CTA
            </a>
            <a className="button button--light" href="#about">
              Подробнее
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <img src={img1} alt="" />
        </div>

        <div className="hero__band" aria-label="Ключевые показатели">
          <div className="panel-note hero__note">
            <span className="panel-note__label">Ключевой акцент</span>
            <p>
              Сюда можно вынести важный тезис, формат программы или основную
              пользу для клиента.
            </p>
          </div>
          <div className="hero__metrics">
            <div className="metric">
              <span className="metric__value">12 недель</span>
              <span className="metric__label">
                пример длительности программы
              </span>
            </div>
            <div className="metric">
              <span className="metric__value">1:1</span>
              <span className="metric__label">формат сопровождения</span>
            </div>
            <div className="metric">
              <span className="metric__value">Pilot-ready</span>
              <span className="metric__label">
                ожидаемый результат на выходе
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
