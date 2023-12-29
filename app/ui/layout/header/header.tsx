// components
import { AtomImage } from "@/app/ui/atoms/image/image";

export default async function Header() {
  return (
    <header>
      <AtomImage src="/logo.svg" alt="logo" width={90} height={60} />
    </header>
  );
}
