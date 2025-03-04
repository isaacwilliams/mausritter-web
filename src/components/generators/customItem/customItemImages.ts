import torchImage from './images/item-torch.png';
import lanternImage from './images/item-lantern.png';
import electricLanternImage from './images/item-electric-lantern.png';
import pipPurseImage from './images/item-pips.png';
import quiverImage from './images/item-quiver.png';
import rationsImage from './images/item-rations.png';
import stonesImage from './images/item-stones.png';
import branchImage from './images/item-improvised.png';
import daggerImage from './images/item-light-1.png';
import needleImage from './images/item-light-2.png';
import axeImage from './images/item-medium-1.png';
import swordImage from './images/item-medium-2.png';
import maceImage from './images/item-medium-3.png';
import warhammerImage from './images/item-heavy-1.png';
import spearImage from './images/item-heavy-2.png';
import hookarmImage from './images/item-heavy-3.png';
import bowImage from './images/item-heavy-ranged.png';
import slingImage from './images/item-light-ranged.png';
import heavyArmourImage from './images/item-heavy-armour.png';
import lightArmourImage from './images/item-light-armour.png';
import spell1Image from './images/item-spell-1.png';
import spell2Image from './images/item-spell-2.png';
import spell3Image from './images/item-spell-3.png';
import spell4Image from './images/item-spell-4.png';
import spell5Image from './images/item-spell-5.png';
import spellBlankImage from './images/item-spell-blank.png';

const CUSTOM_ITEM_IMAGES = [
    { name: 'None', special: 'none' },
    { name: 'Custom...', special: 'upload' },
    { special: 'divider' },
    { name: 'Torch', url: torchImage },
    { name: 'Lantern', url: lanternImage },
    {
        name: 'Electric lantern',
        url: electricLanternImage,
    },
    { name: 'Pip purse', url: pipPurseImage },
    { name: 'Quiver', url: quiverImage },
    { name: 'Rations', url: rationsImage },
    { name: 'Stones', url: stonesImage },
    { special: 'divider' },
    { name: 'Branch', url: branchImage },
    { name: 'Dagger', url: daggerImage },
    { name: 'Needle', url: needleImage },
    { name: 'Axe', url: axeImage },
    { name: 'Sword', url: swordImage },
    { name: 'Mace', url: maceImage },
    { name: 'Warhammer', url: warhammerImage },
    { name: 'Spear', url: spearImage },
    { name: 'Hookarm', url: hookarmImage },
    { name: 'Bow', url: bowImage },
    { name: 'Sling', url: slingImage },
    { special: 'divider' },
    {
        name: 'Heavy armour',
        url: heavyArmourImage,
    },
    {
        name: 'Light armour',
        url: lightArmourImage,
    },
    { special: 'divider' },
    { name: 'Spell 1', url: spell1Image },
    { name: 'Spell 2', url: spell2Image },
    { name: 'Spell 3', url: spell3Image },
    { name: 'Spell 4', url: spell4Image },
    { name: 'Spell 5', url: spell5Image },
    {
        name: 'Spell (blank)',
        url: spellBlankImage,
    },
];

export default CUSTOM_ITEM_IMAGES;
