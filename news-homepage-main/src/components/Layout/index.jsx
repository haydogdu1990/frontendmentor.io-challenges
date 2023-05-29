import MenuButton from '../MenuButton';
import WLogo from '../WLogo';
import styles from './Layout.module.css';

import ImageWeb3 from '../../assets/images/image-web-3-desktop.jpg';
import ImageWeb3mobile from '../../assets/images/image-web-3-mobile.jpg';
import imageretropcs from '../../assets/images/image-retro-pcs.jpg';
import imagetoplaptops from '../../assets/images/image-top-laptops.jpg';
import imagegaminggrowth from '../../assets/images/image-gaming-growth.jpg';

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
          <div className={styles.mainImageMobile}>
            <img
              src={ImageWeb3mobile}
              alt="ImageWeb3mobile"
              style={{ width: '100%' }}
            />
          </div>

          <div className={styles.mainLeftL}>The Bright Future of Web 3.0?</div>
          <div className={styles.mainLeftR}>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button class={styles.button}>READ MORE</button>
          </div>
        </div>
        <div className={styles.side}>
          <p className={styles.maintitle}>New </p>
          <p className={styles.title}>Hydrogen VS Electric Cars </p>
          <p>Will hydrogen-fueled cars ever catch up to EVs? </p>
          <hr />
          <p className={styles.title}>The Downsides of AI Artistry </p>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr />
          <p className={styles.title}>Is VC Funding Drying Up?</p>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.contentL}>
            <img
              src={imageretropcs}
              alt="imageretropcs"
              style={{ width: '100px' }}
            />
          </div>
          <div className={styles.contentR}>
            <p className={styles.contentNum}>01 </p>
            <p className={styles.contentTitle}>Reviving Retro PCs </p>
            <p className={styles.contentText}>
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentL}>
            <img
              src={imagetoplaptops}
              alt="imagetoplaptops"
              style={{ width: '100px' }}
            />
          </div>
          <div className={styles.contentR}>
            <p className={styles.contentNum}>02</p>
            <p className={styles.contentTitle}>Top 10 Laptops of 2022</p>
            <p className={styles.contentText}>
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentL}>
            <img
              src={imagegaminggrowth}
              alt="imagegaminggrowth"
              style={{ width: '100px' }}
            />
          </div>
          <div className={styles.contentR}>
            <p className={styles.contentNum}>03</p>
            <p className={styles.contentTitle}>The Growth of Gaming</p>
            <p className={styles.contentText}>
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
