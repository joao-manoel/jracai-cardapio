const title = 'JR AÇAI - Cardapio online'
const description = 'Peça seu açai com facilidade.'

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