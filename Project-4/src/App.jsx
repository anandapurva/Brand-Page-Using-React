import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
  
    // useref hook
    const passwordRef = useRef(null);
  
    const PasswordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numAllowed) str += "0123456789";
      if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
  
      for (let i = 0; i < length; i++) {
        const charIndex = Math.floor(Math.random() * str.length) + 1;
        pass += str.charAt(charIndex);
  
        setPassword(pass);
      }
    }, [length, numAllowed, charAllowed, setPassword]);
    //   setPassword is used as dependency because, i aso want to store previous password in cache as we all know useCallback hook used to memorize the function . without this, it also works fine.
  
    const copypassToClipboard = useCallback(() => {
      passwordRef.current?.select(); // this will select the password (give blue background when we select somehing)
      passwordRef.current?.setSelectionRange(0, 101); // it will set the range or no. of char to be selected
      window.navigator.clipboard.writeText(password); // this will copy the the password in clipboard
    }, [password]);
  
    useEffect(() => {
      PasswordGenerator();
    }, [length, numAllowed, charAllowed, PasswordGenerator]);
  
    return (
      <div className="w-full max-w-lg my-4 mx-auto px-4 py-8 text-orange-500 rounded-lg shadow-md bg-gray-700">
        {/* use class outer_div which is vanila css written for above div (in app.css file). Here i use Tailwind CSS */}
        <h1 className="text-white text-center">Password Generator</h1>
  
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-md"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
  
          <button
            onClick={copypassToClipboard}
            className="outline-none px-3 py-0.5 bg-blue-500 text-white shrink-0"
          >
            Copy
          </button>
        </div>
  
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(event) => {
                setLength(event.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
  
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>
        </div>
      </div>
    );
  
}

export default App
