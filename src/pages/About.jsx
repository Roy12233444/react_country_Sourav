import countryFacts from "../api/countryData.json";

export const  About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className="gradient-cards">


        {
          countryFacts.map((country) => {
            const {id, countryName, countryCode, capital, population, interestingFact} = country
            return (
              <div className="cards" key={id}>
                <div className="container-cards bg-blue-box">
                  <p className="card-title">{name.common}</p>
                  <p className="card-titles">{countryName}</p>
                  <p>
                    <span className="card-descriptions">Capital:</span>
                    {capital}
                  </p>
                  <p>
                    <span className="card-descriptions">CountryCode:</span>
                    {countryCode}
                  </p>
                  <p>
                    <span className="card-descriptions">Population:</span>
                    {population}
                  </p>
                  <p>
                    <span className="card-descriptions">Interesting Fact:</span>
                    {interestingFact}
                  </p>
                </div>
              </div>
            );
          })
        }
       
      </div>
    </section>
  );
};
