const title = 'JR AÇAI - Cardápio online'
const description = 'Peça seu açai do jeito mais fácil.'

const SEO = {
  title, 
  description,
  canonical: 'https://jracai-cardapio.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'pt_Br',
    url: 'https://jracai-cardapio.vercel.app/',
    title,
    description,
    images: [
      {
        url: `https://jracai-cardapio.vercel.app/og.jpg`,
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
}

export default SEO