import postcssPrefixSelector from 'postcss-prefix-selector';

export default {
  plugins: [
    postcssPrefixSelector({
      prefix: '.react-circular-text',
      includeUniversal: true,
      transform: (prefix, selector, prefixedSelector, filePath, rule) => {
        if (filePath.match(/node_modules/)) {
          return selector; // Do not prefix styles imported from node_modules
        }

        const annotation = rule.prev();
        if (annotation?.type === 'comment' && annotation.text.trim() === 'no-prefix') {
          return selector; // Do not prefix style rules that are preceded by: /* no-prefix */
        }

        return prefixedSelector;
      },
    }),
  ],
};
