import {sayHello} from '@optional-package-scope/foo'
import {AsyncBar, Bar} from '@optional-package-scope/bar'

export default function Home() {
  return (
    <div>
      Imported and transpiled modules from another workspaces:
      <ul>
          <li>{`Foo says: ${sayHello('World')} from @optional-package-scope/foo`}</li>
          <li><Bar message={'Bar react component from @optional-package-scope/bar'}/></li>
          <li><AsyncBar apiUrl={'/api/hello'}/></li>
      </ul>
    </div>
  )
}
