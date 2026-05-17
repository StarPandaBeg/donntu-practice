function ApplySection() {
  return (
    <section className="section apply" id="apply">
      <div className="container apply__layout">
        <div>
          <p className="section-label">Кому подходит</p>
          <h2>
            Блок с критериями отбора, целевой аудиторией или типом подходящих
            проектов.
          </h2>
        </div>

        <div className="apply__criteria">
          <p>
            Короткое пояснение о том, для кого этот продукт, программа или
            формат работы действительно подходит.
          </p>
          <ul>
            <li>Критерий или характеристика 1</li>
            <li>Критерий или характеристика 2</li>
            <li>Критерий или характеристика 3</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ApplySection;
