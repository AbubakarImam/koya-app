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
        { logo: brand1 },
        { logo: brand2 },
        { logo: brand3 },
        { logo: brand4 },
        { logo: brand5 },
        { logo: brand6 },
        { logo: brand7 },
        { logo: brand8 },
    ]
    return (
        <section className="mt-4">
            <h2 className="text-white font-inter font-medium text-5xl ml-8 mb-5">Meet Our Partners</h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center">
                {brands.map(({ logo, index }) => {
                    return (
                        <div key={index} className="h-36">
                            <img src={logo} alt="" className="w-full h-full rounded-lg" />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Brands;