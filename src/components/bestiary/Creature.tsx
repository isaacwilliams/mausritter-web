import React from 'react';

import { CreatureData } from './bestiaryTypes';

const Creature = ({ creature }: { creature: CreatureData }): any => {
    const {
        name,
        description,
        warband_scale,
        hp,
        str,
        dex,
        wil,
        armour,
        attack_1,
        attack_2,
        attack_join,
        critical_damage,
        special,
        wants,
        variant_title,
        variant_1,
        variant_2,
        variant_3,
        variant_4,
        variant_5,
        variant_6,
    } = creature.properties;

    const variants = [
        variant_1,
        variant_2,
        variant_3,
        variant_4,
        variant_5,
        variant_6,
    ].filter(Boolean);

    return (
        <div>
            <h2>{name}</h2>

            {description && <p>{description}</p>}

            {warband_scale && <p>Warband Scale</p>}

            <div className="stat-block">
                {hp}hp, STR {str}, DEX {dex}, WIL {wil}
                {armour && `, Armour ${armour}`}
            </div>

            <div className="attacks">
                Attacks: {attack_1} {attack_join} {attack_2}
            </div>

            {critical_damage && critical_damage.length && (
                <div className="critical-damage">
                    Critical damage: {critical_damage}
                </div>
            )}

            <div className="special">{special}</div>

            <div className="wants">
                <strong>Wants</strong> {wants}
            </div>

            <h3>{variant_title}</h3>

            <ol>
                {variants.map((variant, index) => (
                    <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: variant }}
                    />
                ))}
            </ol>
        </div>
    );
};

export default Creature;
