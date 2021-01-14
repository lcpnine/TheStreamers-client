const path = require('path');

module.exports = {
  i18n: {
    locales: ['en-US', 'ko-KR'],
    defaultLocale: 'en-US'
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
