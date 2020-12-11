export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd3f0506e0e2e674f0909c5',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-wejd4xm4',
                  apiId: '9920ef4d-27c2-4dec-94aa-e0eaa857d351'
                },
                {
                  buildHookId: '5fd3f050be7263760d41dd23',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-x3yhpej7',
                  apiId: '4fffec8f-c3c4-482e-830a-851b2e31af60'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/briancbarrow/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-x3yhpej7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
