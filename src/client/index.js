import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/nameChecker';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

import './images/aside.png';
import './images/Logo.png';

console.log(checkForName);

export {
  checkForName,
  handleSubmit
}