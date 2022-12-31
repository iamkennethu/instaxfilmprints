import NavBar from "../navbar/Navbar";
import { AspectRatio } from '@mantine/core';


function Location() {
  return (
      <>
        <NavBar/>
        <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.4790262581796!2d120.85842871744383!3d14.854469000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396530d706bd261%3A0x2b43869ba26bccfb!2sRusi!5e0!3m2!1sfil!2sph!4v1672506509915!5m2!1sfil!2sph"
        title="Google map"
        frameBorder="0"
      />
    </AspectRatio>
      </>

  )
}

export default Location;