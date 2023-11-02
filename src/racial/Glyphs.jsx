import Glyph from "./Glyph";
import glyphList from "./glyphList";


const Glyphs = () => {
  return (
    <div className="glyphsBody">
      <div className="glyphsSearch">
      </div>
      <div className="glyphsList">
        {glyphList.map(glyph => (
          <Glyph img={glyph.img} char={glyph.char} compo={glyph.compo}/>
        ))}
      </div>
    </div>
  );
};

export default Glyphs;