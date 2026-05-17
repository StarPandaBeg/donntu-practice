function PartnersSection() {
  return (
    <section className="section partners" id="partners">
      <div className="container partners__layout">
        <div className="section-head">
          <p className="section-label">Партнеры и сеть</p>
          <h2>
            Блок под партнеров, экспертов, фонды, компании или экосистему
            проекта.
          </h2>
        </div>

        <div className="partners__list" aria-label="Типы партнеров">
          <span>Корпорации</span>
          <span>Фонды</span>
          <span>Эксперты</span>
          <span>Операторы</span>
          <span>Ангелы</span>
          <span>R&amp;D команды</span>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;


