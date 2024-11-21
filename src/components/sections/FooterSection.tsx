
import SubscribeForm from '../forms/SubscribeForm'
const FooterSection = () => {
  return (
    <footer className='bg-secondary p-14 flex flex-col md:flex-row gap-8  items-center'>
        <h1 className='text-2xl text-white text-center'>Subscribe to our news letter to get latest updates and news</h1>
      <SubscribeForm></SubscribeForm>
    </footer>
  )
}

export default FooterSection