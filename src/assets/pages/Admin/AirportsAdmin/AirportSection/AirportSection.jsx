import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../AirportSection/AirportSection.scss";
import { Requests } from "../../../Login/components/scripts/requests";

const req = new Requests();

async function addAirport(airport) {
  return req.api.post("/airports", airport).then((res) => res.data)
}

async function getAllAirports() {
  return req.api.get("/airports").then((res) => res.data)
}

async function deleteAirport(id) {
  return req.api.delete("/airports/" + id).then((res) => res.data)
}

function airportMapper(airport) {
  return {
    id: airport.idAirport,
    name: airport.name,
    city: airport.city,
    country: airport.country,
    code: airport.iataCode,
  }
}

function AirportSection() {
  const [airports, setAirports] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllAirports();
        console.log(result)
        setAirports(result.map(airportMapper));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
        newAirport.name &&
        newAirport.city &&
        newAirport.country &&
        newAirport.iataCode
    ) {
      const body = { ...newAirport };
      console.log(body);

      addAirport(body)
          .then((airport) => getAllAirports())
          .then((airports) => {
            setAirports(airports.map(airportMapper));
            setNewAirport({
              city: "",
              country: "",
              name: "",
              iataCode: "",
            });
          });
    } else {
      alert("Please fill out all fields");
    }
  };

  const handleDelete = (id) => {
    deleteAirport(id)
        .then(() => getAllAirports())
        .then((airports) => setAirports(airports));
  }

  const [newAirport, setNewAirport] = useState({
    city: "",
    country: "",
    name: "",
    iataCode: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAirport({ ...newAirport, [name]: value });
  };


  return (
    <section className="airport-section">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/AdminDashbord">Home</Link>
            </li>
            <li>
              <Link to="/UserAdmin">Users</Link>
            </li>
            <li>
              <Link to="/ReservationAdmin">Reservations</Link>
            </li>
            {/* <li>
              <Link to="/OffersAdmin">Offers</Link>
            </li> */}
            <li>
              <Link to="/DestAdmin">Destinations</Link>
            </li>
            <li>
              <Link to="/Airport">Airports</Link>
            </li>

            <li>
              <Link to="/login" className="btn-login">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="airport-grid">
        <div className="airport-info">
          <h2>Current Airports</h2>
          {airports.length > 0 ? (
              <ul>
                {airports.map((ap) => (
                    <div className="info-a">
                      <ul>
                        <li>
                          <p>Id Airport: {ap.id}</p>
                          <p>Name: {ap.name}</p>
                          <p>City: {ap.city}</p>
                          <p>Country: {ap.country}</p>
                          <p>Code: {ap.code}</p>
                          <button href="#" className="btnDelete" onClick={() => handleDelete(ap.id)}>
                            Delete Airport
                          </button>
                        </li>
                      </ul>
                    </div>
                ))}
              </ul>
          ) : (
              <p>No destinations available</p>
          )}
        </div>
        <div className="airport-form">
          <h2>Add new Airport</h2>
          <form action="" onSubmit={handleSubmit}>
            {/*<label htmlFor="">
              Id Airport: <input type="text" />
            </label>*/}

            <label htmlFor="">
              Name: <input type="text"
                           onChange={handleChange}
                           name="name"/>
            </label>

            <label htmlFor="">
              City: <input type="text"
                           onChange={handleChange}
                           name="city"/>
            </label>

            <label htmlFor="">
              Country: <input type="text"
                              onChange={handleChange}
                              name="country"/>
            </label>

            <label htmlFor="">
              Code: <input type="text"
                           onChange={handleChange}
                           name="iataCode"/>
            </label>

            <button type="submit" className="btn">
              Add Airport
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AirportSection;
