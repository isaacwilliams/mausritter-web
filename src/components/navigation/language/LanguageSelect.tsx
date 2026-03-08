import React from 'react';
import { useLanguage } from '../../../i18n/languageContext';
import { styled } from 'styled-components';
import { Head } from 'vike-react/Head';

import globeIcon from './globe.svg';

const LANGUAGE_OPTIONS = [
    { value: 'en', label: '🇬🇧 English' },
    { value: 'it', label: '🇮🇹 Italiano' },
    { value: 'de', label: '🇩🇪 Deutsch' },
    { value: 'ru', label: '🇷🇺 Русский' },
];

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HiddenSelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 1;
`;

// prettier-ignore
const LanguageButton = styled.button`
    position: relative;

    background: url("${globeIcon}") no-repeat;
    background-size: 1.2rem;
    border: none;
    cursor: pointer;
    font-size: 0;

    width: 1.2rem;
    height: 1.2rem;

    opacity: 0.5;
`;

const LanguageSelect = () => {
    const selectRef = React.useRef<HTMLSelectElement>(null);
    const { language, setLanguage } = useLanguage();

    return (
        <Container>
            <Head>
                <html lang={language} />
            </Head>

            <LanguageButton
                onClick={() => {
                    selectRef.current?.focus();
                }}
            >
                Language
            </LanguageButton>
            <HiddenSelect
                ref={selectRef}
                value={language}
                onChange={(event) => {
                    setLanguage(event.target.value);
                }}
            >
                {LANGUAGE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </HiddenSelect>
        </Container>
    );
};

export default LanguageSelect;
