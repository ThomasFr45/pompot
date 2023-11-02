const Glyph = (infos) => {
  console.log(infos);
  return (
    <div className="glyphBody">
      <div className="glyphInfos">
        <img src={infos.img} alt="" />
        <p>{infos.char}</p>
        </div>
      <div className="glyphCompos">{infos.compo}</div>
    </div>
  );
};

export default Glyph;