import React from 'react';

class Welcome extends React.Component {
  render() {
    const todoList = ['Learn React', 'Learn Redux']
    const isLogin = true
    return(
      <div>
        <h1>Welcome to React</h1>
        <ul>
          {
            todoList.map(item => 
              <li>{item}</li>
            )
          }
        </ul>
        { isLogin ? <p>已经登录</p> : <p>请登录</p>}
      </div>
    )
  }
}

export default Welcome
