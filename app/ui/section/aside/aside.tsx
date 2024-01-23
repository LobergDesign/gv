// components
import { AtomImage } from "@/app/ui/atoms/image/image";
import { RTE } from "@/app/ui/atoms/rte/rte";

// styles
import style from "./aside.module.scss";

export default async function Aside({ data }: CMS.IAside) {
  return (
    <aside className={style.aside}>
      <div className={style.aside__contactBox}>
        <a href={"tel:" + data.phonenumber} className={style.aside__item}>
          <div className={style.aside__icon}>
            <AtomImage src="/phone-icon.svg" alt="" width={16} height={16} />
          </div>
          {data.phonenumber}
        </a>
        <div>
          <a href={"mailto:" + data.email} className={style.aside__item}>
            <div className={`${style.aside__icon} ${style.aside__iconEmail}`}>
              <AtomImage src="/email-icon.svg" alt="" width={16} height={16} />
            </div>
            {data.email}
          </a>
        </div>
      </div>
      <div className={style.aside__profileBox}>
        {data.profiletext && (
          <div className={style.aside__item}>
            <div className={style.aside__icon}>
              <AtomImage
                src="/profile-icon.svg"
                alt=""
                width={16}
                height={16}
              />
            </div>
            {<RTE htmlContent={data.profiletext} />}
          </div>
        )}
        {data.adresse && (
          <div className={style.aside__item}>
            <div className={style.aside__icon}>
              <AtomImage src="/pin-icon.svg" alt="" width={16} height={16} />
            </div>
            {<RTE htmlContent={data.adresse} />}
          </div>
        )}
      </div>
      <div className={style.aside__bgImage}>
        <AtomImage src="/gv.png" alt="" width={1200} height={1000} />
      </div>
    </aside>
  );
}
