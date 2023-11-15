import { required, helpers, email } from '@vuelidate/validators';

import { INVALID_EMAIL, REQUIRED_FIELD } from '../utils/messages';

const ModelFormRules = {
  email: {
    required: helpers.withMessage(REQUIRED_FIELD, required),
    email: helpers.withMessage(INVALID_EMAIL, email),
  },
  message: {
    required: helpers.withMessage(REQUIRED_FIELD, required),
  },
  phone: {
    required: helpers.withMessage(REQUIRED_FIELD, required),
  },
  modelId: {
    required: helpers.withMessage(REQUIRED_FIELD, required),
  },
};
export default ModelFormRules;
