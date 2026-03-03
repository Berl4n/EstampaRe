import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://estampa-re.vercel.app/"),
  title: "Estamparia Profissional | Silk Screen, DTF e Sublimação",
  description:
    "Criamos estampas estratégicas para marcas e empresas. Produção profissional em silk screen, DTF e sublimação.",
  openGraph: {
    title: "Estamparia Profissional para Marcas",
    description:
      "Arte que vende. Produção de camisetas personalizadas para empresas.",
    images: ["/images/imagemprincipal.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}