import { AspectRatio } from '@mantine/core';


function Location() {
  return (
        <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197.2510664781885!2d120.86018896816279!3d14.823690145704546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339652f0394b7f45%3A0x19f8b8a80f99ad0!2s346%20P.%20Valenzuela%20St%2C%20Malolos%2C%20Bulacan!5e1!3m2!1sfil!2sph!4v1672518072521!5m2!1sfil!2sph"
        title="Store Location"
        frameBorder="0"
      />
    </AspectRatio>
  )
}

export default Location;