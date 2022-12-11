import BossHeader from '../bossHeader';

const Karen = () => {
  let teamComp = {
    healer: "Adjudicator",
    debuffer: "Berserker",
    dps1: "Blade Master",
    dps2: "Executionner",
    dps3: "Darkness Blade",
  };
  return (
    <div>
      <BossHeader
        name="Karen"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/i3amF5Z.png"}
      />
    </div>
  )
}

export default Karen;