import React ,{ useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'
import './login.css'
const Login = () => {
  let captchaValue = "";
  const fonts = ["cursive", "sans-serif", "serif", "monospace"];
  useEffect(() => {
    function initCaptcha() {
      const captchaRefreshButton = document.querySelector(".login-form .captcha .captcha-refresh");

      if (captchaRefreshButton) {
        captchaRefreshButton.addEventListener("click", function() {
          generateCaptcha();
          setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
      }
    }

    function generateCaptcha() {
      let value = btoa(Math.random() * 1000000000);
      value = value.substring(0, 5 + Math.random() * 5);
      captchaValue = value;
    }

    function setCaptcha() {
      let html = captchaValue
        .split("")
        .map((char) => {
          const rotate = -20 + Math.trunc(Math.random() * 30);
          const font = Math.trunc(Math.random() * fonts.length);
          return `<span
            style="transform:rotate(${rotate}deg);
                    font-family:${fonts[font]};
                    "
            >${char}</span>`;
        })
        .join("");
      document.querySelector(".login-form .captcha .preview").innerHTML = html;
    }

    initCaptcha();
  }, []); // Empty dependency array ensures the effect runs only once after initial render


  return (
    <div className='login-form'>
        <div className='heading'>
            <h1>Guardian watch</h1>
        </div>
        <div className='form-input'>
            <label For="vehicleno">Enter Vehicle no:</label>
            <input type='text' id='vehicleno' placeholder='Enter Vehicle no' />
        </div>
        <div className='captcha'>
            <label For="captcha-input">Enter Captcha</label>
            <div className='preview'></div>
            <div className='captacha-form'>
              <input type='text' id='captcha' placeholder='Enter captcha text' />
              <button className='captcha-refresh'>
                <FontAwesomeIcon icon={faRotate} />
              </button>
            </div>
            
        </div>
        
        <button className='login'>Submit</button>

    </div>
  )
}

export default Login;
