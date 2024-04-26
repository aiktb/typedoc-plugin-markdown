export default {
  index: {
    title: 'Homepage',
    type: 'page',
    display: 'hidden',
    theme: {
      breadcrumb: false,
      sidebar: false,
      footer: false,
      layout: 'raw',
    },
  },
  docs: {
    type: 'page',
    title: 'Docs',
  },
  plugins: {
    title: 'Child Plugins',
    type: 'page',
  },
  'api-docs': {
    type: 'page',
    title: 'API',
  },
};
