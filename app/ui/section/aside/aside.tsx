// components
import { AtomImage } from "@/app/ui/atoms/image/image";

// styles
import style from "./aside.module.scss";

export default async function Aside({ data }: CMS.IAside) {
  return (
    <aside className={style.aside}>
      <div className={style.aside__contactBox}>
        <div className={style.aside__icon}>
          <AtomImage src="/phone-icon.svg" alt="kontakt mig på telefon" width={16} height={16} />
        </div>
        <a href={"tel:" + data.phonenumber}>{data.phonenumber}</a>

        <div>
          <span>icon</span>
          <a href={"mailto:" + data.email}>{data.email}</a>
        </div>
      </div>
      <div className={style.aside__bgImage}>
      <AtomImage  src="/gv.png" alt="vinduespudser" width={1200} height={1000} />
      </div>
    </aside>
  );
}
