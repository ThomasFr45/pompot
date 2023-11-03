import "./glyph.css";

const Glyph = (infos) => {
  return (
    <div className="glyphBody">
      <div className="glyphInfos">
        <img className="glyphImage" src={infos.img} alt="" />
        <p className="glyphChar">Perso : {infos.char}</p>
        </div>
      <div className="glyphCompos">
        <ul>
          <li className="glyphComposTitle">Composants :</li>
        {infos.compo.map(item => {
          return (<li>{item}</li>)
      })}
        </ul>
      </div>
    </div>
  );
};

export default Glyph;