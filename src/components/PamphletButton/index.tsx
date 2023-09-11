import valid_btn from './images/valid.svg';
import invalid_btn from './images/invalid.svg';

type Props = {
    invalid: boolean,
    link: string,
};

const PamphletButton = ({ invalid, link }: Props) => {
    return (
        <a href={link}>
            <img src={invalid ? invalid_btn.src : valid_btn.src}></img>
        </a>
    );
};

export default PamphletButton;