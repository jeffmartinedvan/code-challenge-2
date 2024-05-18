import googleLogo from "@/public/google-logo.png"
import facebookLogo from "@/public/facebook-logo.png"
import locationLogo from "@/public/location-logo.png"
import starLogo from "@/public/star-logo.png"
import ReviewItem from "./ReviewItem"

const ReviewItemList = [
  {
    logo: googleLogo,
    rating: "4.8",
    review: "200+ Reviews",
  },
  {
    logo: facebookLogo,
    rating: "4.6",
    review: "400+ Reviews",
  },
  {
    logo: locationLogo,
    rating: "4.8",
    review: "100+ Reviews",
  },
  {
    logo: starLogo,
    rating: "4.7",
    review: "200+ Reviews",
  },
]

const Review = () => {
  return (
    <section className='relative px-6 md:px-14 lg:px-20'>
      <div className='grid grid-cols-2 bg-white py-6 border-2 border-blue-600 rounded-2xl md:grid-cols-4 md:justify-items-center'>
        {ReviewItemList.map((item, index) => (
          <ReviewItem
            key={index}
            logo={item.logo}
            rating={item.rating}
            review={item.review}
          />
        ))}
      </div>
      <div className='absolute bottom-0 left-0 -z-[1] w-full bg-[#3535DE] h-[166px] md:h-[72px] translate-y-1'></div>
    </section>
  )
}

export default Review
