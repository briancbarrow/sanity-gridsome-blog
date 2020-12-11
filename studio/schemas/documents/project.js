export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'codeLink',
      type: 'text',
      title: 'Code Link'
    },
    {
      name: 'demoLink',
      type: 'text',
      title: 'Demo Link'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Project image'
    },
    {
      name: 'technology',
      type: 'array',
      title: 'Technologies Used',
      description: 'Add technologies used in the project.',
      of: [{type: 'string'}],
    }
  ]
}
