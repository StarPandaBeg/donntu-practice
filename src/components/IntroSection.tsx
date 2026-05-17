function IntroSection() {
  return (
    <section className="section intro" id="about">
      <div className="container intro__layout">
        <div>
          <p className="section-label">О платформе</p>
          <h2>Блок, где можно объяснить, что такое Кубит и в чем его роль.</h2>
        </div>
        <div className="intro__text">
          <p>
            Первый абзац удобно использовать под общее описание продукта,
            платформы или акселератора.
          </p>
          <p>
            Второй абзац можно отдать под специфику работы, команду,
            методологию или фокус по сегментам.
          </p>
          <div className="intro__quote">
            <strong>Сильный тезис</strong>
            <p>
              Подходит для короткой цитаты, позиционирования или принципа, на
              котором строится платформа.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
