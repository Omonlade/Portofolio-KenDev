interface TitleProps {
    title: string
}
const Title = ({title}: TitleProps) => {
  return (
    <h1 className='uppercase text-center text-3xl mb-5 font-bold'>
      {title}
    </h1>
  )
}

export default Title
