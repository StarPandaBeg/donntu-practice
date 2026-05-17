function FooterSection() {
  return (
    <footer className="site-footer section" id="contacts">
      <div className="container site-footer__layout">
        <div>
          <p className="section-label">Контакты</p>
          <h2>Финальный блок с контактами, адресом, каналами связи и картой.</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-block">
            <a href="mailto:lorem@ipsum.test">lorem@ipsum.test</a>
            <p>Город / remote</p>
            <p>
              Здесь можно указать телефон, график связи и короткий комментарий
              по заявкам.
            </p>
          </div>

          <div className="contact-panel">
            <div>
              <span>Telegram</span>
              <strong>@loremipsum</strong>
            </div>
            <div>
              <span>Call</span>
              <strong>+00 000 000 00 00</strong>
            </div>
            <div>
              <span>Address</span>
              <strong>Lorem street, 42</strong>
            </div>
          </div>
        </div>

        <div className="map-placeholder" aria-label="Место под карту">
          <div className="map-placeholder__inner">
            <span>Место под Яндекс.Карту</span>
            <p>Сюда можно встроить iframe или JS-виджет карты позже.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
