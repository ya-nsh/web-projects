import { createGlobalStyle } from 'styled-components';

const AllStyles = createGlobalStyle`

    :root {
    --accent-pink: #f44e77;
    --border-colour: #cab6f1;
    --purple-primary: #554dde;
    --lavender-secondary: #6a6d9e;
    --neutral-light: #f2f6ff;
    --dark-primary: #16194f;
    }

    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        text-decoration: none;
    }

    body{
        background-color: var(--neutral-light);
        font-size: 1.1rem;
    }`;

export default AllStyles;
