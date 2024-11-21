import Button from "../Buttons/Button"

const JionSection = () => {
  return (
    <section className="flex flex-col items-center justify-center  gap-6 w-[300px] mx-auto" >
        <h1 className="text-center text-secondary font-bold text-xl">Jion our team to be a part <br />of our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facilis placeat vitae. Nobis, consequuntur!</p>

          <Button className="max-w-[160px]">Jion Now</Button>
    </section>
  )
}

export default JionSection