export default {
  widgets: [
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
                  buildHookId: '605a4c802e4a510095334346',
                  title: 'Sanity Studio',
                  name: 'sanity-page-builder-template-studio',
                  apiId: '85fb25e9-05cc-42fb-8df9-74007785cd2c'
                },
                {
                  buildHookId: '605a4c80022a2a00c33ea54b',
                  title: 'Blog Website',
                  name: 'sanity-page-builder-template',
                  apiId: 'd0a4c6bf-021f-4418-9f34-ce6007b6bde4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JohnGrattan/sanity-page-builder-template',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-page-builder-template.netlify.app', category: 'apps'}
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
