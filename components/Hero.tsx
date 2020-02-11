import React from 'react';

export interface HeroProps {

}

const Hero: React.SFC<HeroProps> = () => {
    return (
        <div>
            <h1>Orijinator</h1>
            <style jsx>
                {`
                    h1 {
                        font-size: 60px;
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 900;
                        text-align: center;
                        text-transform: uppercase;
                        padding: 1rem;
                        border: 4px solid #000;
                    }
                `}
            </style>
        </div>
    );
}

export default Hero;