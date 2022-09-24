
import './Login.css';

function Login() {
  return (
    <div className="login_body">
      <table className="login_table">
        <tr>
            <td>ID</td>
            <td><input className='input_box' type="text" required/></td>
        </tr>
        <tr>
            <td>PW</td>
            <td><input className='input_box' type="password" required/></td>
        </tr>
      </table>
      <button className='login_btn' onClick={function(){}}>LOGIN</button>
    </div>
  );
}

export default Login;
