import Kanye from "../assets/img/kanye west.jpeg";

import { connect } from "react-redux";
import { getQuote } from "../redux/actions/quote";
import { useEffect, useState } from "react";

function KanyeWest(props) {
  const [dataQuote, setDataQuote] = useState([]);
  const [quoteMine, setQuoteMine] = useState("");
  const [dataQuoteMine, setDataQuoteMine] = useState([]);

  useEffect(() => {
    getQuoteKanye();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQuoteKanye = () => {
    props.getQuote().then((res) => {
      console.log(res);
      setDataQuote(res.action.payload.data.quote);
    });
  };

  const onChangeQuote = (event) => {
    event.preventDefault();
    setQuoteMine(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setDataQuoteMine(quoteMine);
  };

  const Favorite = [];

  return (
    <>
      <center>
        <img
          alt="kanye west"
          src={Kanye}
          style={{ width: "300px", margin: "auto", marginTop: "50px" }}
        />
        <h1 style={{ fontWeight: "bold" }}>Kanye-West Quote</h1>
        <h3 style={{ fontWeight: "bold" }}>{dataQuote}</h3>
        <button onClick={() => getQuoteKanye()}>Get Quote</button>
        <button>Add Favorite</button>
        <div>
          {Favorite.length === 0 ? <h1>&nbsp;</h1> : <h1>{Favorite}</h1>}
        </div>
        <hr style={{ width: "30%" }} />
        <h1>My Quotes</h1>
        <form inline>
          <input
            type="text"
            onChange={(event) => onChangeQuote(event)}
            name="quoteMine"
          />
          <button onClick={(event) => handleSubmit(event)}>submit</button>
          <p>{dataQuoteMine}</p>
        </form>
      </center>
    </>
  );
}

const mapStateToProps = (state) => ({
  quote: state.quote,
});

const mapDispatchToProps = { getQuote };

export default connect(mapStateToProps, mapDispatchToProps)(KanyeWest);
