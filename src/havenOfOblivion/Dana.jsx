import BossHeader from "../bossHeader";

const Dana = () => {
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
        name="Dana"
        solo={false}
        dmg="N/A"
        comp={teamComp}
        img={"https://i.imgur.com/kI0pQ4u.png"}
      />
      <div className="ccBossConcent">
        <h3>
          {localStorage.getItem("language") === "EN"
            ? "Boss mechanics :"
            : "Méchanique du boss:"}
        </h3>
        <ul className="ccBossMecha">
          {localStorage.getItem("language") === "EN" ? (
            <li>
              Dana casts a flame 'debuff', this 'debuff' can be used to remove
              her Ice Coffin Root, it is generally optimal to have the team
              standing in close proximity so whoever has the flame debuff can
              remove the Root.
            </li>
          ) : (
            <li>
              Dana appliquera un debuff qui ressemble a une flame, ce debuff
              permettre de retirer the debuff 'Ice Coffin Root', il est donc
              conseillé de rester proche les un des autres de manière à ce que
              celui qui reçoit le debuff, puisse retirer le 'Ice Coffin Root'.
            </li>
          )}
          {localStorage.getItem("language") === "EN" ? (
            <li>
              However, it is easier to simply CC Chain her after 75% HP, so she
              doesn't cast the skill at all.
            </li>
          ) : (
            <li>
              Cependant, il est plus simple d'enchainer les CC à partir de 75%
              HP afin de l'empêcher d'utiliser son 'Ice Coffin Root'.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dana;
