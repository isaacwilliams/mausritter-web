import Banner from './PromoToast';
import { styled } from 'styled-components';

import logo from './logo-small.png';

const LogoImage = styled.img`
    height: 2rem;
    margin-right: 0.5rem;
`;

const MausritterMonthBanner: React.FC = () => {
    return (
        <Banner
            className="mausritter-month-banner"
            href="https://www.backerkit.com/c/collections/mausritter-month"
        >
            <LogoImage src={logo} alt="Mausritter Month Logo" />
            <span>Launching 4th November 2025</span>
        </Banner>
    );
};

export default MausritterMonthBanner;
