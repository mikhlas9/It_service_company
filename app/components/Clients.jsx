import Image from 'next/image'

const clients = [
  { name: 'Mahindra', logo: '/mahindra-logo.svg' },
  { name: 'Imadclicks', logo: '/imadclicks-logo.svg' },
  { name: 'Renault', logo: '/renault-logo.svg' },
  { name: 'Tramboo', logo: '/tramboo-logo.svg' },
  { name: 'Samsung', logo: '/samsung-logo.svg' },
  { name: 'Travel Impressions', logo: '/travel-impressions-logo.svg' },
  { name: 'Khyber Cement', logo: '/khyber-cement-logo.svg' },
  { name: 'Bond', logo: '/bond-logo.svg' },
]

export default function Clients() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Trusted Among Industry Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image src={client.logo} alt={`${client.name} logo`} width={150} height={75} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

