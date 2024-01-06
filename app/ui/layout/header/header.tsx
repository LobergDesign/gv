// svg
import Logo from "@/public/logo.svg";
// styles
import style from "./header.module.scss";

export default async function Header() {
  return (
    <header className={style.header}>
      <Logo />
    </header>
  );
}
