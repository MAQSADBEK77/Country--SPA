import "./country.css";
import { useFetch } from "../hook/useFetch";
import { Link } from "react-router-dom";
import { Fragment } from "react";
function Country() {
  const countryName = window.location.href.substring(
    window.location.href.indexOf("?") + 1
  );
  const { data: child, isPending } = useFetch(
    `https://countries-api-v7sn.onrender.com/countries/slug/${countryName}`
  );
  if (!isPending) {
    return (
      <>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
        <div className="backdrop"></div>
      </>
    );
  }
  return (
    <div className="container">
      <Link className="back" to="/" data-aos="flip-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
            fill="#111517"
          />
        </svg>
        Back
      </Link>
      <div className="country">
        <div className="contry-left" data-aos="fade-left">
          <img src={child.flags.svg} alt="" />
        </div>
        <div className="country-right" data-aos="fade-right">
          <div className="country-right-top">
            <div className="country-right-top-left">
              <h2>{child.name.common}</h2>
              <div className="card-text">
                <p>
                  Native Name: <span>{child.name.nativeName}</span>
                </p>
                <p>
                  Population: <span>{child.population}</span>
                </p>
                <p>
                  Region: <span>{child.region}</span>
                </p>
                <p>
                  Sub Region: <span>{child.subregion}</span>
                </p>
                <p>
                  Capital: <span>{child.capital[0]}</span>
                </p>
              </div>
            </div>
            <div className="country-right-top-right">
              <div className="card-text">
                <p>
                  Cios: <span>{child.cioc}</span>
                </p>
                <p>
                  Currencies: <span>{child.currencies[0]}</span>
                </p>
                <p>
                  Languages:{" "}
                  <span>
                    {child.languages.map((lealunge, index) => {
                      var delimiter =
                        index === child.languages.length - 1 ? "." : ", ";
                      return (
                        <Fragment key={lealunge.length}>
                          {lealunge + delimiter}
                        </Fragment>
                      );
                    })}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="country-right-bottom">
            <p>Border Countries: </p>{" "}
            {child.borders.map((border) => (
              <a href={"/country?" + border.slug}>{border.common}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
