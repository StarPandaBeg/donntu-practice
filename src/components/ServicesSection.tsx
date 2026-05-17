function ServicesSection() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head section-head--split">
          <div>
            <p className="section-label">Чем занимаемся</p>
            <h2>Блок с направлениями работы, услугами или основными треками.</h2>
          </div>
          <p className="section-summary">
            Здесь можно коротко описать, какие задачи вы решаете и как устроены
            основные форматы взаимодействия.
          </p>
        </div>

        <div className="services__grid">
          <article className="service-card service-card--featured">
            <div className="service-card__index">01</div>
            <h3>Флагманское направление</h3>
            <p>
              Самый важный сервис, трек или формат работы, который стоит
              выделить визуально.
            </p>
            <div className="service-card__tags">
              <span>Подпункт 1</span>
              <span>Подпункт 2</span>
              <span>Подпункт 3</span>
            </div>
          </article>
          <article className="service-card">
            <div className="service-card__index">02</div>
            <h3>Направление / услуга</h3>
            <p>
              Короткое описание второго сервиса, трека или отдельного этапа
              работы.
            </p>
          </article>
          <article className="service-card">
            <div className="service-card__index">03</div>
            <h3>Направление / услуга</h3>
            <p>
              Еще один блок под формат сопровождения, модуль или точку входа.
            </p>
          </article>
          <article className="service-card service-card--outline">
            <div className="service-card__index">04</div>
            <h3>Дополнительный формат</h3>
            <p>
              Например: постподдержка, консультации, партнерская программа или
              спецтрек.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
