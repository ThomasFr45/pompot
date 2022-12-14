import "./havenOfOblivion.css";
import '../dungeonHeader.css';
import ccPic from "../img/hoo/hoo.png";
import { Link } from "react-router-dom";

const HavenOfOblivion = () => {
  return (
    <div className="ccDivContainer">
      <div className="dungeonDiv">
        <img src={ccPic} alt="ccPic1" className="dungeonPic" />
        {localStorage.getItem("language") === "EN" ? (
          <p>
            Players can enter Haven of Oblivion once they get to Lvl 115,
            however it is highly recommended that you get some decent gears
            before attempting it. The entrance of Haven of Oblivion are in
            Tranquil Hill X:442 Y:353, Gemsis Ridge X:425 Y:150 and Shiver Peak
            X:123 Y:98.
            <br /> Each Haven of Oblivion runs contains 3 random bosses. They
            are meant to be challenged by a party of five geared players.
          </p>
        ) : (
          <p>
            Vous pourrez entrer dans Haven of Oblivion dès le niveau 115, il est
            cependant recommandé d'avoir un bon stuff avant d'y aller. Les
            entrées du donjon se trouve à Tranquil Hill X:442 Y:353, Gemsis
            Ridge X:425 Y: 150 et Shiver Peak x:123 Y:90. <br /> A chaque entrée d'Haven of Oblivion, vous trouverez 3 bosses aléatoires. Ils ont été prévus pour des groupes de 5 joueurs avec un bon stuff.
          </p>
        )}
      </div>
      <div className="ccContent">
        <div>
          <p className="ccBossImgsTitle">
            {localStorage.getItem("language") === "EN"
              ? "Click for more infos"
              : "Cliquez pour voir le détail."}
          </p>
          <div className="bossImgs">
            <Link to="alice">
              <div className="alice">
                <p>Alice</p>
              </div>
            </Link>
            <Link to="beryl">
              <div className="beryl">
                <p>Beryl</p>
              </div>
            </Link>
            <Link to="cale">
              <div className="cale">
                <p>Cale</p>
              </div>
            </Link>
            <Link to="crime">
              <div className="crime">
                <p>Crime</p>
              </div>
            </Link>
            <Link to="dana">
              <div className="dana">
                <p>Dana</p>
              </div>
            </Link>
            <Link to="karen">
              <div className="karen">
                <p>Karen</p>
              </div>
            </Link>
            <Link to="hooLeo">
              <div className="hooLeo">
                <p>Leo</p>
              </div>
            </Link>
            <Link to="nerokas">
              <div className="nerokas">
                <p>Nerokas</p>
              </div>
            </Link>
            <Link to="phantom">
              <div className="phantom">
                <p>Phantom</p>
              </div>
            </Link>
            <Link to="phoenix">
              <div className="hooPhoenix">
                <p>Phoenix</p>
              </div>
            </Link>
            <Link to="punishment">
              <div className="punishment">
                <p>Punishment</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HavenOfOblivion;
