import Button from "@/components/Button"
import { Montserrat } from "next/font/google"
import cn from "classnames"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const ContactForm = () => {
  return (
    <section
      id='ContactForm'
      className='grid items-center w-screen py-12 text-white bg-[#26262C] -translate-x-6 md:-translate-x-14 lg:-translate-x-20 md:grid-cols-2 md:py-16'
    >
      <div className='flex flex-col gap-4 px-6 md:pl-14 md:gap-6 lg:pl-20 lg:gap-8'>
        <h2 className='text-2xl md:text-3xl lg:text-5xl'>
          Ready to Take Your Internet Marketing to the next Level?
        </h2>
        <h3
          className={cn(
            "text-sm text-justify md:text-base lg:text-lg font-medium",
            montserratFont.className
          )}
        >
          Amet ut elementum, ipsum lobortis amet, ut duis facilisis purus lorem
          ac pharetre, nunc mi egestas diam id nisl consequat aliquam et nunc
          justo.
        </h3>
        <h4
          className={cn(
            "text-sm text-[#F4F4F5] text-justify md:text-base lg:text-lg font-extralight",
            montserratFont.className
          )}
        >
          Risus tincidunt in laoreet risus dignissim montes, velit egestas eu
          nece et in tincidunt amet, etiam at turpis adipiscing volutpat amet,
          adispiscing purus elementum risus, vitae euismod leo amet eget quam
          enim blandit diam quis diam proin enim suspendisse massa.
        </h4>
      </div>
      <div className='pt-10 grid gap-3 px-6 md:px-14 lg:px-20'>
        <h2 className='text-2xl'>Let's Talk</h2>
        <form action='submit' className='flex flex-col gap-4 text-black'>
          <input
            type='text'
            placeholder='Full name'
            className='w-full leading-loose p-3'
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email address'
            className='w-full leading-loose p-3'
          />
          <textarea
            name='message'
            id='message'
            rows={4}
            placeholder='Your message'
            className='w-full leading-loose p-3'
          />
        </form>
        <Button />
      </div>
    </section>
  )
}

export default ContactForm
