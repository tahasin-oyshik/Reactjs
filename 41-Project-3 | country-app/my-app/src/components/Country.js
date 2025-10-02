import style from './country.module.css';

const Country = ({ country, id, onRemoveCountry }) => {
  const { flags, name, capital, area, population } = country;

  const handleRemoveCountry = (name) => {
    onRemoveCountry(name);
  };

  return (
    <article className={style.country}>
      <img src={flags.png} alt={name.common} className={style.flag} />
      <h3>Name: {name.common}</h3>
      <h3>Capital: {capital}</h3>
      <h3>Population: {population}</h3>
      <h3>Area: {area}</h3>
      <button
        className={style.btn}
        onClick={() => {
          handleRemoveCountry(name.common);
        }}
      >
        Remove Country
      </button>
    </article>
  );
};

export default Country;
