import star from "@/public/star.png"
import matthew from "@/public/matthew-johnson.png"
import luis from "@/public/luis-carloz.png"
import alice from "@/public/alice-miles.png"
import TestimonialItem from "./TestimonialItem"

const TestimonialItemList = [
  {
    rating: star,
    testimony:
      '"Working with Codelify has been a game-changer for our business. Their strategic approach and creative solutions helped us significantly boost our online presence. The team\'s dedication and expertise are evident in every project they undertake. Highly recommended!"',
    profileImg: matthew,
    name: "MATTHEW JOHNSON",
  },
  {
    rating: star,
    testimony:
      '"Codelify\'s marketing services exceeded our expectations. The comprehensive campaigns they designed drove impressive engagement and growth for our brand. Their attention to detail and proactive communication made the entire process seamless and enjoyable."',
    profileImg: luis,
    name: "LUIS CARLOZ",
  },
  {
    rating: star,
    testimony:
      "\"We couldn't be happier with the results from Codelify's SEO optimization. Our website traffic has increased dramatically, and we've seen a noticeable improvement in our search engine rankings. Their team's professionalism and knowledge are top-notch.\"",
    profileImg: alice,
    name: "ALICE MILES",
  },
]

const Testimonials = () => {
  return (
    <section className='w-full bg-[#3535DE] px-6 md:px-14 lg:px-20'>
      <div className='flex flex-col py-12 gap-12'>
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
