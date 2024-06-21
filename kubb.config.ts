import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTs } from '@kubb/swagger-ts'

export default defineConfig(() => [
  {
    root: '.',
    input: {
      path: './swagger/core-api-swagger.json'
    },
    output: {
      path: 'kubb-generated'
    },
    plugins: [
      pluginOas({
        output: false,
        validate: true
      }),
      pluginTs({
        output: {
          path: 'models.ts'
        }
      })
    ]
  }
])
