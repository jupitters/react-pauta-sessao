import "./SessaoHeader.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const SessaoHeader = () => {
    return (
        <div className="text-3xl font-black underline">
            Olar
            <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCaretRight} /></a>
        </div>
    );
};

export default SessaoHeader;