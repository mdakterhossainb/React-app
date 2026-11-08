function Singledata({ name, city, country, image }) {
  return (
    <div>
      <h1> name : {name} </h1>
      <h1> city : {city} </h1>
      <h1> country : {country} </h1>
      <img src={image} alt="this is fake image" />
    </div>
  );
}
export default Singledata;
