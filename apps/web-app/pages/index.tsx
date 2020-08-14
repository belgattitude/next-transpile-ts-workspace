import foo from '@optional-package-scope/foo'
import Bar from '@optional-package-scope/bar'

export default function Home() {
  return (
    <div>
      Imported modules from another workspace:
      <pre>{foo}</pre>
      <Bar />
    </div>
  )
}
