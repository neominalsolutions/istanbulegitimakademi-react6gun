export const Map = () => {
  return (
    <>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385398.5897809314!2d28.73199448781479!3d41.00498228699285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1678122147218!5m2!1sen!2str"
        width="400"
        height="300"
        loading="lazy"
        allowFullScreen={true}
        style={{ border: 1 }}
      ></iframe>
    </>
  );
};

export default Map;
