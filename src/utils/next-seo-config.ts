const title = 'JR AÇAI - Cardapio online'
const description = 'Peça seu açai com facilidade.'

const SEO = {
  title, 
  description,
  canonical: process.env.NEXT_PUBLIC_URL,
  openGraph: {
    type: 'website',
    locale: 'pt_Br',
    url: process.env.NEXT_PUBLIC_URL,
    title,
    description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/og.png`,
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
}

export default SEO