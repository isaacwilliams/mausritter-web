import { clamp } from 'lodash/fp';

export const initialState = {
    name: 'New item',
    resolution: 300,

    usage: 3,

    damage: '',

    mechanicDetail: '',
    clearDetail: '',
    classDetail: '',
    image: '',

    star: false,

    backgroundColor: '#ffffff',
    foregroundColor: '#000000',
    width: 1,
    height: 1,

    divider: true,
    border: true,
};

const clampWidth = clamp(1, 5);
const clampHeight = clamp(1, 2);
const clampUsage = clamp(0, 9);

const stateReducer = (state, action) => {
    console.log('action', action);

    switch (action.type) {
        case 'set-name':
            return {
                ...state,
                name: action.name,
            };
        case 'set-damage':
            return {
                ...state,
                damage: action.damage,
            };
        case 'set-mechanic-detail':
            return {
                ...state,
                mechanicDetail: action.mechanicDetail,
            };
        case 'set-clear-detail':
            return {
                ...state,
                clearDetail: action.clearDetail,
            };
        case 'set-class-detail':
            return {
                ...state,
                classDetail: action.classDetail,
            };
        case 'set-image':
            return {
                ...state,
                image: action.image,
            };
        case 'set-width':
            return {
                ...state,
                width: clampWidth(action.width),
            };
        case 'set-height':
            return {
                ...state,
                height: clampHeight(action.height),
            };
        case 'set-usage':
            return {
                ...state,
                usage: clampUsage(action.usage),
            };
        case 'set-background-color':
            return {
                ...state,
                backgroundColor: action.backgroundColor,
            }
        case 'set-foreground-color':
            return {
                ...state,
                foregroundColor: action.foregroundColor,
            };
        case 'set-star':
            return {
                ...state,
                star: action.star,
            };
        case 'set-divider':
            return {
                ...state,
                divider: action.divider,
            };
        case 'set-border':
            return {
                ...state,
                border: action.border,
            };
        case 'set-resolution':
            return {
                ...state,
                resolution: action.resolution,
            };
        case 'set-template':
            return {
                ...state,
                ...action.template,
            };
        default:
            return state;
    }
};

export default stateReducer;
