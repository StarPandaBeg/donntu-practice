function ProcessSection() {
  return (
    <section className="section process">
      <div className="container process__layout">
        <div className="section-head">
          <p className="section-label">Процесс работы</p>
          <h2>
            Пошаговый блок: как строится взаимодействие с клиентом или
            участником.
          </h2>
        </div>

        <ol className="process__list">
          <li>
            <span>01</span>
            <div>
              <h3>Шаг 1. Диагностика</h3>
              <p>
                Первичный этап: знакомство, аудит, отбор или сбор вводных
                данных.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Шаг 2. План и приоритеты</h3>
              <p>
                Здесь можно описать формирование плана, гипотез, roadmap или
                критериев успеха.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Шаг 3. Реализация</h3>
              <p>
                Основной рабочий этап: спринты, сопровождение, внедрение,
                пилоты или работа с метриками.
              </p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Шаг 4. Итог и следующий шаг</h3>
              <p>
                Финал цикла: результат, масштабирование, новый этап работы или
                выход на следующий трек.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default ProcessSection;
