"use client"
import { Montserrat } from "next/font/google"
import cn from "classnames"
import { Formik, FormikProps } from "formik"
import * as yup from "yup"

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const ContactSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message should not be empty"),
})

const ContactForm = () => {
  return (
    <section
      id='ContactForm'
      className='grid items-center w-full py-12 text-white bg-[#26262C] md:grid-cols-2 md:py-16'
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
          Unlock the full potential of your business with Codelify's expert
          digital marketing solutions. Our team is dedicated to helping you
          achieve exceptional results through tailored strategies and innovative
          approaches. Whether you need strategic guidance, impactful
          advertising, comprehensive online marketing, or cutting-edge SEO
          optimization, we have the expertise to elevate your brand.
        </h3>
        <h4
          className={cn(
            "text-sm text-[#F4F4F5] text-justify md:text-base lg:text-lg font-extralight",
            montserratFont.className
          )}
        >
          Don't miss out on the opportunity to grow your online presence and
          drive meaningful engagement. Fill out the form below to get in touch
          with us and start your journey toward digital success today!
        </h4>
      </div>
      <div className='pt-10 grid gap-3 px-6 md:px-14 lg:px-20'>
        <h2 className='text-2xl'>Let&apos;s Talk</h2>
        <Formik
          initialValues={{ fullName: "", email: "", message: "" }}
          onSubmit={(values: any) => {
            alert(JSON.stringify(values))
          }}
          validationSchema={ContactSchema}
        >
          {(
            props: FormikProps<{
              fullName: string
              email: string
              message: string
            }>
          ) => (
            <form
              onSubmit={props.handleSubmit}
              action='submit'
              className='flex flex-col gap-4 text-black'
            >
              <input
                onChange={props.handleChange}
                value={props.values.fullName}
                type='text'
                name='fullName'
                id='fullName'
                placeholder='Full name'
                className='w-full leading-loose p-3'
              />
              {props.errors.fullName && props.touched.fullName && (
                <div className='text-rose-500' id='errorFullName'>
                  {props.errors.fullName}
                </div>
              )}
              <input
                onChange={props.handleChange}
                value={props.values.email}
                type='email'
                name='email'
                id='email'
                placeholder='Email address'
                className='w-full leading-loose p-3'
              />
              {props.errors.email && props.touched.email && (
                <div className='text-rose-500' id='errorEmail'>
                  {props.errors.email}
                </div>
              )}
              <textarea
                onChange={props.handleChange}
                value={props.values.message}
                name='message'
                id='message'
                rows={4}
                placeholder='Your message'
                className='w-full leading-loose p-3'
              />
              {props.errors.message && props.touched.message && (
                <div className='text-rose-500' id='errorMessage'>
                  {props.errors.message}
                </div>
              )}
              <button
                type='submit'
                className='bg-[#3535DE] px-[25px] py-[15px] text-white rounded-lg lg:w-fit'
              >
                Get a Quote
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default ContactForm
