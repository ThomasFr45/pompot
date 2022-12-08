import "./ccBossHeader.css";

const CcBossHeader = (props) => {
  return (
    <div className="ccBossHeader">
      <div className="ccBossProfil">
        <img
          src={props.img}
          alt="Libra"
          title="Libra"
          className="ccBossProfilPic"
        />
        <div className="ccBossProfilInfo">
          <p>Nom : {props.name}</p>
          <p>Solo : {props.solo ? "Oui" : "Non"}</p>
          <p>Dégâts : {props.dmg}</p>
        </div>
      </div>
      <div className="ccBossComp">
        <h3>Composition de groupe conseillée :</h3>
        <ul>
          <li>{props.comp.debuffer}</li>
          <li>{props.comp.dps1}</li>
          <li>{props.comp.dps2}</li>
          <li>{props.comp.dps3}</li>
          <li>{props.comp.healer}</li>
        </ul>
      </div>
    </div>
  );
};

export default CcBossHeader;
