import { Link } from 'react-router-dom';
import { 
    PERSONAL_SEWING_PAGE, CATALOGUE_PAGE, ABOUT_PAGE, DELIVERY_PAGE, CONTACTS_PAGE 
} from '../../config/links';
import { 
    PERSONAL_SEWING_TEXT, CATALOGUE_TEXT, ABOUT_TEXT, DELIVERY_TEXT, PHONE 
} from '../../config/texts';
import './Navigation.css';

function Navigation({ onMouseOver, onMouseOut }) {
  return (
        <nav className="navigation">
            <Link 
                className="navigation__link" 
                to={CATALOGUE_PAGE}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
            >
                {CATALOGUE_TEXT}
            </Link>
            <Link className="navigation__link" to={PERSONAL_SEWING_PAGE}>{PERSONAL_SEWING_TEXT}</Link>
            <Link className="navigation__link" to={ABOUT_PAGE}>{ABOUT_TEXT}</Link>
            <Link className="navigation__link" to={DELIVERY_PAGE}>{DELIVERY_TEXT}</Link>
            <Link className="navigation__link" to={CONTACTS_PAGE}>{PHONE}</Link>
        </nav>
  );
}

export default Navigation;