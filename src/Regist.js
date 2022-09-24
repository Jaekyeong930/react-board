
import './Regist.css';

// 일단은 기본 이메일 형식으로 하고, 추후에 네이버 로그인이나 구글로그인 연동 해보기

function Regist() {
  return (
    <div className="regist_body">
      <table className="regist_table">
        <tr>
            <td>ID</td>
            <td><input className='input_box id_box' type="text" required/></td>
        </tr>
        <tr>
            <td>PW</td>
            <td><input className='input_box pw_box' type="password" required/></td>
        </tr>
        <tr>
            <td>PW 확인</td>
            <td><input className='input_box pw_box' type="password" required/></td>
        </tr>
      </table>
      <button className='regist_btn' onClick={function(){}}>LOGIN</button>
    </div>
  );
}

export default Regist;
