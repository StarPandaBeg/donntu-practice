type HeaderProps = {
  loginUrl: string;
};

function Header({ loginUrl }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label="Кубитэкс">
          <span className="brand__logo-placeholder">ЛОГО</span>
        </a>

        <nav className="site-nav" aria-label="Основная навигация">
          <a href="#services">Услуги</a>
          <a href="#cases">Кейсы</a>
          <a href="#partners">Стек</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="header-actions">
          <a className="header-login" href={loginUrl}>
            Вход
          </a>
          <a className="header-contact" href="#contacts">
            Связаться с нами
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
