import BossHeader from '../bossHeader';

const Crime = () => {
  let teamComp = {
    healer: "Adjudicator",
    debuffer: "Berserker",
    dps1: "Blade Master",
    dps2: "Executionner",
    dps3: "Annihilator",
  };
  return (
    <div>
      <BossHeader
        name="Crime"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://via.placeholder.com/200x250"}
      />
      <div className="ccBossConcent">
        <h3>{localStorage.getItem('language') === 'EN' ? "Boss mechanics :" : 'Méchanique du boss:'}</h3>
        <ul className="ccBossMecha">
        {localStorage.getItem("language") === "EN" ? <li>Crime uses self heal, that increases DMG Taken.</li> : <li>Crime se soignera de temps en temps, et s'appliquera par la même occasion un buff augmentant les dégats qu'il recevra pendant un court moment.</li>}
        {localStorage.getItem("language") === "EN" ? <li>He has a spell that deals massive damage around him, if he uses it, it is recommended to move back, to avoid dying. But it is also possible to prevent him by CCing him every time he raises his arms to cast, without any AOE on the ground.</li> : <li>Il possède un sort qui cause énormèment de dégats autours de lui, si il l'utilise, il est conseillé de reculer, afin de ne pas mourir. Mais il est aussi possible de l'en empêcher en le utilisant un stun/fear/kd à chaque fois qu'il lève les bras pour cast, sans qu'il n'y au d'AOE au sol.</li>}
        </ul>
      </div>
    </div>
  )
}

export default Crime;