import Glyph from "./Glyph";
import glyphTable from "./glyphTable";
import './glyphList.css';


const Glyphs = () => {
  return (
    <div className="glyphsBody">
      <div className="glyphsSearch">
      </div>
      <div className="glyphsList">
        {glyphTable.map(glyph => (
          <Glyph img={glyph.img} char={glyph.char} compo={glyph.compo}/>
        ))}
      </div>
    </div>
  );
};

export default Glyphs;