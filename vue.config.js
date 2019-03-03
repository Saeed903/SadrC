module.exports = {
  chainWebpack: config => {
    config.module
      .rule('graphql')
      .test(/\.gql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end()
  },
  pluginOptions: {
    i18n: {
      locale: 'fa',
      fallbackLocale: 'fa',
      localeDir: 'locales',
      enableInSFC: true
    },
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  }
}