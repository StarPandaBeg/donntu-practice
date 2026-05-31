function TracksSection() {
  return (
    <section className="section tracks" id="tracks">
      <div className="container">
        <div className="section-head">
          <p className="section-label">Специализация</p>
          <h2>Ключевые технологические треки</h2>
        </div>

        <div className="tracks__grid">
          <article className="accent-card">
            <h3>Продуктовая разработка</h3>
            <p>
              Создание MVP для стартапов, разработка корпоративных сайтов,
              интернет-магазинов и мобильных приложений под ключ.
            </p>
          </article>
          <article>
            <h3>Искусственный интеллект</h3>
            <p>
              Автоматизация бизнес-процессов с помощью LLM, разработка ботов,
              аналитика данных и визуализация бизнес-метрик.
            </p>
          </article>
          <article className="muted-card">
            <h3>Инженерные решения</h3>
            <p>
              Низкоуровневое программирование, проектирование DSL, работа с
              Embedded системами и IoT-интеграции.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default TracksSection;
