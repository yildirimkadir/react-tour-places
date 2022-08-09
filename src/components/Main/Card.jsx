const Card = ({ data }) => {
  console.log(data[0]);
  return (
    <div className="card-container">
      {data.map((item, index) => {
        const { id, title, image, desc } = item;
        return (
          <div key={id} className="cards">
            <div className="title">
              <h1>{title}</h1>
            </div>
            <img src={image} alt="places" />
            <div className="card-desc">
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
