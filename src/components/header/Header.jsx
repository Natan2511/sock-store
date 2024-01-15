import style from './Header.module.scss';


export const Header = () => {
  return (
    <div>
          <div className={style.headerTittleWrapper}>
              <h2 className={style.headerTittle}>Скидка 25% на все товары по промокоду TEES25</h2>
          </div>

          <nav className={style.headerNavbar}>
              <div>
                  <a href="#">T SHOP</a>
              </div>

              <ul className={style.headerNavbarList}>
                <li><a href="#">Новинки</a></li>
                <li><a href="#">Женщинам</a></li>
                <li><a href="#">Мужчинам</a></li>
                <li><a href="#">Войти</a></li>
              </ul>
          </nav>
    </div>
  );
};
