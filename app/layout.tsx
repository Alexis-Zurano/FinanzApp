import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FinanzApp — Tu dinero, más claro",
  description: "Organiza tus gastos, ingresos y deudas mes a mes.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>
}
