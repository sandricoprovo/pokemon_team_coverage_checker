// TODO: Add option children prop to handle possible presence of icons.

export default interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    clickHandler?: () => void;
}
