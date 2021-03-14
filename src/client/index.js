import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/nameChecker';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

import './images/aside.svg';
import logo from './images/Logo.svg';

document.getElementById('logo').src = logo;

console.log(checkForName);

export {
  checkForName,
  handleSubmit
}