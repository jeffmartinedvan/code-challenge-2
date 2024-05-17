import googleLogo from "@/public/google-logo.png"
import facebookLogo from "@/public/facebook-logo.png"
import locationLogo from "@/public/location-logo.png"
import starLogo from "@/public/star-logo.png"
import TestimonialItem from "./ReviewItem"
import Card from "@/components/Card"

const ReviewItemList = [
  {
    logo: googleLogo,
    rating: "4.8",
    review: "200 + Reviews",
  },
  {
    logo: facebookLogo,
    rating: "4.6",
    review: "400 + Reviews",
  },
  {
    logo: locationLogo,
    rating: "4.8",
    review: "100 + Reviews",
  },
  {
    logo: starLogo,
    rating: "4.7",
    review: "200 + Reviews",
  },
]

const Review = () => {
  return (
    <section className='relative'>
      <div className='grid grid-cols-2 bg-white py-6 border-2 border-blue-600 rounded-2xl md:grid-cols-4 md:justify-items-center lg:w-[96vw] lg:-translate-x-[60px]'>
        {ReviewItemList.map((item, index) => (
          <TestimonialItem
            key={index}
            logo={item.logo}
            rating={item.rating}
            review={item.review}
          />
        ))}
      </div>
      <div className='absolute bottom-0 -z-[1] w-screen bg-[#3535DE] -translate-x-6 h-[166px] md:-translate-x-14 md:h-[72px] lg:-translate-x-20 translate-y-1'></div>
    </section>
  )
}

export default Review
