import { Link } from "react-router-dom";
function Countries({ data, isPending, isError }) {
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
  if (isError) {
    return <h1 className="error">Page not found :(</h1>;
  }
  return (
    <>
      <div className="parent">
        {data &&
          data.data.map((child) => {
            return (
              <Link
                key={child._id}
                to={"/country?" + child.name.slug}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="card">
                <img src={child.flags.svg} />
                <h1>{child.name.common}</h1>
                <div className="card-text">
                  <p>
                    Population: <span>{child.population}</span>
                  </p>
                  <p>
                    Region: <span>{child.region}</span>
                  </p>
                  <p>
                    Capital: <span>{child.capital[0]}</span>
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default Countries;
