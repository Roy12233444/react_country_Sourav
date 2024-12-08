import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
    const params = useParams();

    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState(null); // Change to a single country object

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(params.id);

            if (res.status === 200) {
                setCountry(res.data[0]);
            }

            console.log(Object.keys(res.data[0].name.nativeName));

        });
    }, [params.id]);

    if (isPending) return <Loader />;

    // Ensure country is defined before accessing its properties
    //   if (!country) return <p>Loading country details...</p>;

    return (
      <section className="card country-detail-card container">
        <div className="container-card1 bg-white-box">
          {country && (
            <div className="country-image grid grid-two-cols">
              <img
                src={country.flags.svg} // Access svg safely
                alt={country.flags.alt} // Access alt safely
                className="flag"
              />
              <div className="country-content1">
                <p className="country-name"> {country.name.official} </p>
              </div>

              <div className="infoContainer">
                <p>
                  <span className="card-description1">Native Names:</span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>

                <p>
                  <span className="card-description1"> Population: </span>
                  {country.population.toLocaleString()}
                </p>

                <p>
                  <span className="card-description1">Region:</span>
                  {country.region}
                </p>

                <p>
                  <span className="card-description1">Sub Region:</span>
                  {country.subregion}
                </p>

                <p>
                  <span className="card-description1"> Capital:</span>
                  {country.capital}
                </p>

                <p>
                  <span className="card-description1">Top Level Domain:</span>
                  {country.tld[0]}
                </p>

                <p>
                  <span className="card-description1">Currencies:</span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>

                <p>
                  <span className="card-description1">Languages:</span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <NavLink to="/country">
            <button className="button">
              <div className="button-box">
                <span className="button-elem">
                  <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
                <span className="button-elem">
                  <svg viewBox="0 0 46 40">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
              </div>
            </button>
          </NavLink>
        </div>
      </section>
    );
};
