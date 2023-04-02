import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div>
      <div className="topNav">
        <Image className="logo" src={"/images/eventPfp.jpg"} width={50} height={50} alt="logo" />
        <nav>
          <ul>
            <li>
              <Link href="/" passHref={true}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/events" passHref={true}>
                <a>Events</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us" passHref={true}>
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p>Event Host</p>
      </div>
    </header>
  );
}

export default Header;
