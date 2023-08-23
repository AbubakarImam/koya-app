import brand1 from '../assets/near.jpg'
import brand2 from '../assets/aurora.png'
import brand3 from '../assets/archway.jpg'
import brand4 from '../assets/polkadot.png'
import brand5 from '../assets/pocket.png'
import brand6 from '../assets/solana.png'
import brand7 from '../assets/polygon.jpg'
import brand8 from '../assets/arbitruim.jpg'

const Brands = () => {
    const brands = [
        { logo: brand1, url: '#' },
        { logo: brand2, url: '#' },
        { logo: brand3, url: '#' },
        { logo: brand4, url: '#' },
        { logo: brand5, url: '#' },
        { logo: brand6, url: '#' },
        { logo: brand7, url: '#' },
        { logo: brand8, url: '#' },
    ]
    return (
        <section className="mt-4 max-w-5xl mx-auto ">
            <h2 className="text-white font-inter font-medium text-2xl md:text-5xl ml-8 mb-5">Meet Our Partners</h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center">
                {brands.map(({ logo, index, url }) => {
                    return (
                        <div key={index} className="h-20">
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={logo}
                                    alt=""
                                    className="w-full h-full rounded-lg hover:scale-110"
                                />
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Brands;