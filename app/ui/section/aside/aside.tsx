// components
import { AtomImage } from "@/app/ui/atoms/image/image";

// styles
import style from "./aside.module.scss";

export default async function Aside({ data }: CMS.IAside) {
  return (
    <aside className={style.aside}>
      <div className={style.aside__contactBox}>
        <div>
          <span>icon</span>
          <a href={"tel:" + data.phonenumber}>{data.phonenumber}</a>
        </div>
        <div>
          <span>icon</span>
          <a href={"mailto:" + data.email}>{data.email}</a>
        </div>
      </div>
      <AtomImage src="/gv.png" alt="vinduespudser" width={1200} height={1000} />
    </aside>
  );
}
