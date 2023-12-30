// components
import { AtomImage } from "@/app/ui/atoms/image/image";

export default async function Footer() {
  return (
    <footer>
      <h2>footer</h2>
      <AtomImage src="/logo.svg" alt="logo" width={90} height={60} />
    </footer>
  );
}
