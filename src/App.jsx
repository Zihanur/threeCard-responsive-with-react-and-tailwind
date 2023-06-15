import "./App.css";

function App() {
  return (
    <>
      <div className="container m-4 md:m-8 lg:m-12 p-8 md:p-16 lg:p-20 shadow-xl">
        <div className="cards md:flex m-2 md:m-3">
          <div className="single-card1 ">
            <div className="card-body text-white">
              <img
                className="card-logo1"
                style={{ height: "45px", width: "70px" }}
                src="/src/assets/icon-sedans.svg"
                alt=""
              />
              <h1 className="font-semibold text-4xl uppercase my-8">Sedans</h1>
              <p className="text-base text-white">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip
              </p>
              <div className="w-50">
                <p className="btn text-orange-300 bg-white rounded-3xl">
                  Learn more
                </p>
              </div>
            </div>
          </div>
          <div className="single-card2 ">
            <div className="card-body text-white">
              <img
                className="card-logo2"
                style={{ height: "45px", width: "70px" }}
                src="/src/assets/icon-suvs.svg"
                alt=""
              />
              <h1 className="font-semibold text-4xl uppercase my-8">Sedans</h1>
              <p className="text-base text-white">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip
              </p>
              <div className="w-50">
                <p className="btn text-cyan-500 bg-white rounded-3xl">
                  Learn more
                </p>
              </div>
            </div>
          </div>
          <div className="single-card3 ">
            <div className="card-body text-white">
              <img
                className="card-logo3"
                style={{ height: "45px", width: "70px" }}
                src="/src/assets/icon-luxury.svg"
                alt=""
              />
              <h1 className="font-semibold text-4xl uppercase my-8">Sedans</h1>
              <p className="text-base text-white">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip
              </p>
              <div className="w-50">
                <p
                  style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
                  className="btn text-teal-700 rounded-3xl"
                >
                  Learn more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
