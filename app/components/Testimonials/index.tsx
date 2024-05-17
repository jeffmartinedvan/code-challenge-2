import star from "@/public/star.png"
import matthew from "@/public/matthew-johnson.png"
import luis from "@/public/luis-carloz.png"
import alice from "@/public/alice-miles.png"
import TestimonialItem from "./TestimonialItem"

const TestimonialItemList = [
  {
    rating: star,
    testimony:
      '"Volutpat commodo at dictum amet tincidunt facilisis id lorem eu vitae cursus auctor laoreet fermentum adipiscing."',
    profileImg: matthew,
    name: "MATTHEW JOHNSON",
  },
  {
    rating: star,
    testimony:
      '"Faucibus eget ullamcorper nascetur suspendisse purus nisi, sapien at id ipsum tincidunt quis sed fermentum risus, nibh tristique elit commodo."',
    profileImg: luis,
    name: "LUIS CARLOZ",
  },
  {
    rating: star,
    testimony:
      '"Malesuada nibh eu sed elit purus, sit sem molestie enim, egestas aliquet etiam donec tristique nec."',
    profileImg: alice,
    name: "ALICE MILES",
  },
]

const Testimonials = () => {
  return (
    <section className='w-screen bg-[#3535DE] -translate-x-6 md:-translate-x-14 lg:-translate-x-20'>
      <div className='flex flex-col py-12 gap-12 px-6 md:px-14 lg:px-20'>
        {TestimonialItemList.map((item, index) => (
          <TestimonialItem
            key={index}
            rating={item.rating}
            testimony={item.testimony}
            profileImg={item.profileImg}
            name={item.name}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
