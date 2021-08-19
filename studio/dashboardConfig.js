export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '611e6b2845ddf108d5108610',
                  title: 'Sanity Studio',
                  name: 'lagerqu-portfolio-studio',
                  apiId: 'f4f1608b-e5df-46e3-aad3-331529e4e8c4'
                },
                {
                  buildHookId: '611e6b28d0a46e090279129a',
                  title: 'Portfolio Website',
                  name: 'lagerqu-portfolio',
                  apiId: '206b4194-7f03-40c8-8481-8993d7b9984c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Abbeeee/lagerqu-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://lagerqu-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
