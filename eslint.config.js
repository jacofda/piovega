import antfu from '@antfu/eslint-config'

export default antfu(
  {},
  {
    rules: {
      'vue/block-order': 'off',
      'vue/html-self-closing': 'off',
      'vue/valid-define-emits': 'off',
      'vue/operator-linebreak': 'off',
      'arrow-parens': 'off',
    },
  },
)
