function TracksSection() {
  return (
    <section className="section tracks" id="tracks">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Как это работает</p>
          <h2>Блок с логикой программы, этапами или основными треками.</h2>
        </div>

        <div className="tracks__grid">
          <article className="accent-card">
            <h3>Этап / трек 1</h3>
            <p>
              Описание первой стадии работы, первого модуля или стартового этапа
              программы.
            </p>
          </article>
          <article>
            <h3>Этап / трек 2</h3>
            <p>
              Описание второй стадии: что происходит, что получает пользователь
              и какой фокус работы.
            </p>
          </article>
          <article className="muted-card">
            <h3>Этап / трек 3</h3>
            <p>
              Финальный этап, результат, подготовка к запуску, пилоту или
              следующему шагу.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default TracksSection;
