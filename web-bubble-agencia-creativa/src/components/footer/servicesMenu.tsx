import Link from "next/link";

export default function ServicesMenu() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
      <div>
        <h4 className="text-sm font-semibold mb-2 uppercase">Servicios</h4>
        <ul className="space-y-1 text-base">
          <li><Link href="/bubblelab">Bubble Lab</Link></li>
          <li><Link href="/bubblecode">Bubble Code</Link></li>
          <li><Link href="/bubblebrain">Bubble Brain</Link></li>
          <li><Link href="/bubblestudio">Bubble Studio</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-2 uppercase">Clientes</h4>
        <ul className="space-y-1 text-base">
          <li><Link href="/clientes">Ver todos</Link></li>
        </ul>
      </div>
    </div>
  );
}
