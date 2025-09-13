import { Metadata } from 'next'

interface MetadataProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
}

export function generateMetadata({
  title = 'TyaHair - Rambut Sambung Premium Berkualitas Tinggi',
  description = 'TyaHair menyediakan rambut sambung premium berkualitas tinggi dengan berbagai pilihan warna dan tekstur. Dapatkan tampilan rambut impian Anda dengan produk hair extension terbaik.',
  keywords = [
    'rambut sambung',
    'hair extension',
    'rambut palsu',
    'hair weave',
    'rambut premium',
    'TyaHair',
    'hair extensions indonesia',
    'rambut sambung berkualitas',
    'hair extension murah',
    'rambut sambung asli'
  ],
  image = '/images/tyahair-og.jpg',
  url = 'https://tyahair.com'
}: MetadataProps = {}): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'TyaHair' }],
    creator: 'TyaHair',
    publisher: 'TyaHair',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      url,
      title,
      description,
      siteName: 'TyaHair',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@tyahair',
    },
    alternates: {
      canonical: url,
    },
    verification: {
      google: 'your-google-verification-code',
    },
  }
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TyaHair',
  description: 'Penyedia rambut sambung premium berkualitas tinggi dengan berbagai pilihan warna dan tekstur',
  url: 'https://tyahair.com',
  telephone: '+62-XXX-XXXX-XXXX',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ID',
    addressLocality: 'Indonesia',
  },
  openingHours: 'Mo-Su 08:00-20:00',
  priceRange: '$$',
  image: 'https://tyahair.com/images/tyahair-logo.jpg',
  sameAs: [
    'https://instagram.com/tyahair',
    'https://tiktok.com/@tyahair',
    'https://wa.me/62XXXXXXXXX',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hair Extensions',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Rambut Sambung Premium',
          description: 'Hair extension berkualitas tinggi dengan berbagai pilihan warna',
        },
      },
    ],
  },
}