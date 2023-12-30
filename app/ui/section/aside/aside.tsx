// components
import { AtomImage } from "@/app/ui/atoms/image/image";

// styles
import style from "./aside.module.scss";

export default async function Aside() {
  return (
    <aside className={style.aside}>
      <div className={style.aside__contactBox}></div>
      <AtomImage src="/gv.png" alt="vinduespudser" width={1200} height={1000} />
    </aside>
  );
}
