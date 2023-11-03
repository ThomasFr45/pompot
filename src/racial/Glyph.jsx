import "./glyph.css";

const Glyph = (infos) => {
  console.log(infos);
  return (
    <div className="glyphBody">
      <div className="glyphInfos">
        <img className="glyphImage" src={infos.img} alt="" />
        <p>Perso : {infos.char}</p>
        </div>
      <div className="glyphCompos">{infos.compo}</div>
    </div>
  );
};

export default Glyph;