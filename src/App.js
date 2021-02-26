import { useState, useEffect } from 'react'
import deleteIcon from './img/delete.svg'

function App() {
  const [formula, setFormula] = useState('0')
  const [result, setResult] = useState(0)

  const handleConcatNumber = (num) => {
    if (formula === '0') setFormula(num)
    else setFormula((prev) => prev + num)
  }
  const handleResult = () => {
    try {
      setResult(eval(formula))
    } catch (e) {
      if (e instanceof SyntaxError) {
        const error = document.querySelector('.error')
        error.classList.toggle('show')
        setTimeout(() => {
          error.classList.toggle('show')
        }, 2000)
      }
    }
  }
  const handleDeleteLastChar = () => {
    if (formula === '0') return
    setFormula((prev) => {
      return prev.slice(0, -1)
    })
  }

  const handleClear = () => {
    setResult(0)
    setFormula('0')
  }

  const handleKeyboard = (key) => {
    document.querySelectorAll('.btn').forEach((btn) => {
      if (key === btn.id) {
        btn.click()
        btn.classList.toggle('active')
        setTimeout(() => {
          btn.classList.toggle('active')
        }, 200)
      }
    })
  }
  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyboard(e.key))
    return () => {
      window.removeEventListener('keydown', (e) => handleKeyboard(e.key))
    }
  }, [])

  return (
    <div className="App">
      <h1>My calculator</h1>
      <div id="calculator">
        <div id="screen">
          <div className="error">Please write a correct expression</div>
          <p id="formula">{formula}</p>
          <p id="result">{result}</p>
        </div>
        <div id="keyboard">
          <div id="c" className="btn fn" onClick={handleClear}>
            {''}C{' '}
          </div>
          <div
            id="("
            className="btn fn"
            onClick={() => handleConcatNumber('(')}
          >
            (
          </div>
          <div
            id=")"
            className="btn fn"
            onClick={() => handleConcatNumber(')')}
          >
            )
          </div>
          <div
            id="/"
            className="btn fn"
            onClick={() => handleConcatNumber('/')}
          >
            /
          </div>
          <div id="7" className="btn" onClick={() => handleConcatNumber('7')}>
            7
          </div>
          <div id="8" className="btn" onClick={() => handleConcatNumber('8')}>
            8
          </div>
          <div id="9" className="btn" onClick={() => handleConcatNumber('9')}>
            9
          </div>
          <div
            id="*"
            className="btn fn"
            onClick={() => handleConcatNumber('*')}
          >
            *
          </div>
          <div id="4" className="btn" onClick={() => handleConcatNumber('4')}>
            4
          </div>
          <div id="5" className="btn" onClick={() => handleConcatNumber('5')}>
            5
          </div>
          <div id="6" className="btn" onClick={() => handleConcatNumber('6')}>
            6
          </div>
          <div
            id="-"
            className="btn fn"
            onClick={() => handleConcatNumber('-')}
          >
            -
          </div>
          <div id="1" className="btn" onClick={() => handleConcatNumber('1')}>
            1
          </div>
          <div id="2" className="btn" onClick={() => handleConcatNumber('2')}>
            2
          </div>
          <div id="3" className="btn" onClick={() => handleConcatNumber('3')}>
            3
          </div>
          <div
            id="+"
            className="btn fn"
            onClick={() => handleConcatNumber('+')}
          >
            +
          </div>
          <div id="0" className="btn" onClick={() => handleConcatNumber('0')}>
            0
          </div>
          <div id="." className="btn" onClick={() => handleConcatNumber('.')}>
            .
          </div>
          <div id="Backspace" className="btn fn" onClick={handleDeleteLastChar}>
            {<img src={deleteIcon} alt="delete icon" />}
          </div>
          <div id="Enter" className="btn fn" onClick={handleResult}>
            =
          </div>
        </div>
      </div>
      <footer>Designed and coded with ♥ by Ginner Zapata</footer>
    </div>
  )
}

export default App
