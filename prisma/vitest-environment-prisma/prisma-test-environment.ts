import { Environment } from 'vitest/environments'

export default <Environment>(<unknown>{
  name: 'prisma',
  transformMode: 'web',
  async setup() {
    console.log('Setup')

    return {
      async teardown() {
        console.log('Teardown')
      },
    }
  },
})
