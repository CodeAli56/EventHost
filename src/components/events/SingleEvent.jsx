import Image from "next/image";
import { useRouter } from "next/router";
import { useRef,useState } from "react";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message , setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailValue.match(validRegex)){
      setMessage("Please enter a correct email address");
    }
    try {
      const response = await fetch("/api/email_registration" ,
      {
        method: "POST",
        headers:{
          "Content-Type": "Application/json"
        },
        body: JSON.stringify({email:emailValue , eventId})
      }
      )
      if(!response.ok) throw new Error(`Error: ${response.status}`)

      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value="";
      

    } catch (e) {
      console.log("Error",e);
    }
  };

  return (
    <div className="single_event">
      <Image src={data.image} alt="event Image" width={600} height={400} />

      <div className="content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <form className="register" onSubmit={handleSubmit}>
          <label>Get yourself registered for this event</label>
          <input
            ref={inputEmail}
            id="email"
            placeholder="Email"
          ></input>
          <button type="submit">Submit</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SingleEvent;
