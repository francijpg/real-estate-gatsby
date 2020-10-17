import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const Header = () => {

    return ( 

        <header
            css={css`
                background-color: #0D283B;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 120rem;
                    margin: 0 auto;
                    text-align: center;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Link to="/">
                    <h1>HEADER</h1>
                </Link>

            </div>
        </header>
     );
}
 
export default Header;