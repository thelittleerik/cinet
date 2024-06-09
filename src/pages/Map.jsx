function Map() {
  return (
    <>
      <div className="d-flex justify-content-center flex-column gap-3 w-100 h-100">
        <p className="title fw-bolder w-auto text-center my-5">Kino Finden</p>
        <img
          className="object-fit-cover border-radius-5 w-100 h-100"
          src="/public/map.jpg"
          alt="Google Maps"
        />
      </div>
    </>
  );
}
export default Map;
