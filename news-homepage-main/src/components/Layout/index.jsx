import MenuButton from '../MenuButton';
import WLogo from '../WLogo';
import styles from './Layout.module.css';

import ImageWeb3 from '../../assets/images/image-web-3-desktop.jpg';

function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <WLogo />
        </div>
        <div className={styles.menu}>
          <MenuButton text="Home" />
          <MenuButton text="New" />
          <MenuButton text="Popular" />
          <MenuButton text="Trending" />
          <MenuButton text="Categories" />
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.mainLeft}>
          <div className={styles.mainImage}>
            <img src={ImageWeb3} alt="Image" style={{ width: '100%' }} />
          </div>

          <div className={styles.mainLeftL}>The Bright Future of Web 3.0?</div>
          <div className={styles.mainLeftR}>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise? READ MORE
          </div>
        </div>
        <div className={styles.side}>
          New Hydrogen VS Electric Cars Will hydrogen-fueled cars ever catch up
          to EVs? The Downsides of AI Artistry What are the possible adverse
          effects of on-demand AI image generation? Is VC Funding Drying Up?
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.content}>
          {' '}
          01 Reviving Retro PCs What happens when old PCs are given modern
          upgrades?
        </div>
        <div className={styles.content}>
          {' '}
          02 Top 10 Laptops of 2022 Our best picks for various needs and
          budgets.
        </div>
        <div className={styles.content}>
          {' '}
          03 The Growth of Gaming How the pandemic has sparked fresh
          opportunities.
        </div>
      </div>
    </div>
  );
}

export default Layout;
