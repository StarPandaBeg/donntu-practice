function PartnersSection() {
  return (
    <section className="section partners" id="partners">
      <div className="container partners__layout">
        <div className="section-head">
          <p className="section-label">Технологический стек</p>
          <h2>Инструменты, которые мы используем для решения ваших задач</h2>
        </div>

        <div className="partners__list" aria-label="Технологии">
          <span>React / Vue / Next.js</span>
          <span>Node.js / Python / C#</span>
          <span>React Native / Flutter</span>
          <span>PostgreSQL / MongoDB</span>
          <span>Docker / Kubernetes</span>
          <span>C / C++ / Rust</span>
          <span>LLM / ChatGPT / RAG</span>
          <span>Arduino / IoT</span>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
