import { createGlobalStyle } from 'styled-components';

// HS = Hue Saturation
// L = Lightness

export default createGlobalStyle`
    :root {
        // ========= COlORS ========= //
        // EMERALD
        --emerald-baseHS: 151 70%;
        --emerald-baseL: 45%;
        --emerald: var(--emerald-baseHS) var(--emerald-baseL); // hsl(151 70% 45%);
        --emerald-L20: var(--emerald-baseHS) 20%;
        // OCHRE
        --ochre: 30 72% 48%; // hsl(30 72% 48%);
        // GHOST WHITE
        --white: 240 100% 99%; // hsl(240 100% 99%);
        // GRAY WEB
        --gray: 188 6% 52%;  // hsl(188 6% 52%);
        // EERIE BLACK
        --black: 0 0% 12%;  // hsl(0 0% 12%);
    }
`;
