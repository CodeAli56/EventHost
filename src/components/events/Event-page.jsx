import Image from "next/image"
import Link from "next/link"

const Events = ({data}) => {
  return (
    <div className='events_page'>
        {data?.map(ev => 
        <Link key={ev.id} href={`/events/${ev.id}`} passHref={true}>
        <a className="card">
        <Image src={ev.image} alt="event Image" width={500} height={500}/>
        <h2>{ev.title}</h2>
      </a></Link>)}
    </div>
  )
}

export default Events