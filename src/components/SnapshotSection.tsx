function SnapshotSection() {
  return (
    <section className="section snapshot">
      <div className="container snapshot__layout">
        <div className="snapshot__card">
          <p className="section-label">Цифры и факты</p>
          <h3>
            Блок, где можно показать метрики, динамику или конкретные
            показатели.
          </h3>
          <div className="snapshot__rows">
            <div>
              <span>Метрика 1</span>
              <b>24%</b>
            </div>
            <div>
              <span>Метрика 2</span>
              <b>58%</b>
            </div>
            <div>
              <span>Метрика 3</span>
              <b>81%</b>
            </div>
          </div>
        </div>
        <div className="snapshot__text">
          <p className="section-label">Пояснение к цифрам</p>
          <h2>Отдельный блок под сильный аргумент, результат или важный вывод.</h2>
          <p>
            Здесь удобно раскрыть один показатель подробнее и объяснить, почему
            он важен для клиента или участника программы.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SnapshotSection;
