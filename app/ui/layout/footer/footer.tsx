// components
import { AtomImage } from "@/app/ui/atoms/image/image";

// styles
import style from "./footer.module.scss";
import styleGrid from "@/styles/base/grid.module.scss";

export default async function Footer({ linkedIn, facebook }: CMS.IFooter) {
  return (
    <footer className={style.footer}>
      <div className={styleGrid.row}>
        <div className={`${styleGrid.col6} ${style.footer__info}`}>
          <AtomImage
            src="/svane.png"
            alt=""
            width={32}
            height={35}
            layout="intrinsic"
          />
          <AtomImage
            src="/mp.png"
            alt=""
            width={60}
            height={35}
            layout="intrinsic"
          />
        </div>
        <div className={`${styleGrid.col6} ${style.footer__social}`}>
          <div className={`${style.footer__social}`}>
            {linkedIn && (
              <div>
                <a
                  href={linkedIn}
                  className={`${style.footer__socialIcon}`}
                  target="_blank"
                >
                  <AtomImage
                    src="/linkedin-icon.svg"
                    alt=""
                    width={10}
                    height={10}
                    layout="intrinsic"
                  />
                </a>
              </div>
            )}
            {facebook && (
              <div>
                <a
                  href={facebook}
                  className={`${style.footer__socialIcon}`}
                  target="_blank"
                >
                  <AtomImage
                    src="/facebook-icon.svg"
                    alt=""
                    width={4}
                    height={10}
                    layout="intrinsic"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
