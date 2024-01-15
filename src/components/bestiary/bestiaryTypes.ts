export type CreatureData = {
    id: string;
    properties: {
        name: string;
        description?: string;

        warband_scale: boolean;
        hp: number;
        str: number;
        dex: number;
        wil: number;
        armour?: number;
        attack_1?: string;
        attack_2?: string;
        attack_join?: string;
        critical_damage?: string;
        special: string;
        wants: string;

        variant_title: string;
        variant_1: string;
        variant_2: string;
        variant_3: string;
        variant_4: string;
        variant_5: string;
        variant_6: string;

        status: string;
    };
};
