import Image from 'next/image'
import Link from 'next/link'

const CatEvent = ({data,pageName}) => {
  return (
    <div className='cat_events'>
        <h1>{pageName.toUpperCase()} Events</h1>

        <div className='content'>
        {data.map(ev=> (
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref={true}>
            <a className='card'>
            <Image src={ev.image} alt="event Image" width={250} height={200}/>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
            </a></Link>
        ))}
        </div>
        
    </div>
  )
}

export default CatEvent