type HeaderProps = {
  loginUrl: string;
};

function Header({ loginUrl }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label="Кубит">
          <span className="brand__mark">К</span>
          <span className="brand__text">
            <strong>Кубит</strong>
            <span>startup platform</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Основная навигация">
          <a href="#services">Чем занимаемся</a>
          <a href="#cases">Кейсы</a>
          <a href="#partners">Партнеры</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <a className="header-login" href={loginUrl}>
          Вход
        </a>
      </div>
    </header>
  );
}

export default Header;
