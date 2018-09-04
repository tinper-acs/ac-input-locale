
import DemoGroup from './index'
ReactDOM.render(<DemoGroup/>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./index', () => {
    const NextApp = require('./index').default // eslint-disable-line
    ReactDOM.render(<NextApp/>, document.getElementById('root'));
  })
}
