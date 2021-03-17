import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/nameChecker';
import { clearUI } from './js/clearUI';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/result.scss';
import './styles/error.scss';

import './images/aside.png';
import logo from './images/Logo.png';
import './images/error.svg';

document.getElementById('logo').src = logo;

export {
  checkForName,
  handleSubmit,
  clearUI
}