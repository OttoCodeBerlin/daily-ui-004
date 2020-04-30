import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      init: false,
      display: '',
      last_operator: '',
      calc_ready: false,
      mem_number: '',
      error: false,
    }
  }

  onClick = (e, number) => {
    e.preventDefault()
    if (this.state.error) return
    if (this.state.calc_ready) {
      this.setState((prevState) => ({
        ...prevState,
        mem_number: prevState.display,
        display: number,
        calc_ready: false,
        init: true,
      }))
    } else {
      const newNumber = this.state.display + number
      this.setState((prevState) => ({ ...prevState, display: newNumber, init: true }))
    }
  }

  onOperate = (e, op) => {
    e.preventDefault()
    if (this.state.error) return
    this.setState({ last_operator: op, calc_ready: true })
  }

  clear = () => {
    this.setState({ init: false, display: '', calc_ready: false, error: false })
  }

  setError = () => {
    this.setState({ init: true, display: 'E E E E E E E E', calc_ready: true, last_operator: '', mem_number: '', error: true })
  }

  evaluate = () => {
    console.log(this.state)
    let result
    if (this.state.display === '0') {
      this.setError()
      return
    }
    switch (this.state.last_operator) {
      case '+':
        result = Number(this.state.mem_number) + Number(this.state.display)
        break
      case '-':
        result = Number(this.state.mem_number) - Number(this.state.display)
        break
      case '*':
        result = Number(this.state.mem_number) * Number(this.state.display)
        break
      case '/':
        result = Number(this.state.mem_number) / Number(this.state.display)
        break
      default:
    }
    if (result === undefined || result.toString().length > 8) {
      this.setError()
      return
    }
    this.setState({ display: result })
  }

  render() {
    return (
      <div>
        <h1>National PANAC 883 Vintage Calculator Simulator</h1>
        <Container className="outer-container">
          <Row className="display">
            <Col>
              <h2>{this.state.init ? this.state.display : 0}</h2>
            </Col>
          </Row>
          <Row className="switch">
            <Col>
              <h3>PANAC 883</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container className="keyboard">
                <Row style={{ margin: '8px 0 0 10px' }}>
                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '7')}>
                    7
                  </Button>
                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '8')}>
                    8
                  </Button>
                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '9')}>
                    9
                  </Button>
                  <Button className="button button-black" onClick={(e) => this.onOperate(e, '/')}>
                    /
                  </Button>
                  <Button className="button button-invisible"></Button>

                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '4')}>
                    4
                  </Button>
                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '5')}>
                    5
                  </Button>
                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '6')}>
                    6
                  </Button>
                  <Button className="button button-black" onClick={(e) => this.onOperate(e, '*')}>
                    *
                  </Button>
                  <Button className="button button-black" onClick={this.clear}>
                    C
                  </Button>

                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '1')}>
                    1
                  </Button>
                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '2')}>
                    2
                  </Button>
                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '3')}>
                    3
                  </Button>
                  <Button className="button button-black" onClick={(e) => this.onOperate(e, '-')}>
                    -
                  </Button>
                  <Button className="button button-black" onClick={this.clear}>
                    CE
                  </Button>

                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '0')}>
                    0
                  </Button>
                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '.')}>
                    .
                  </Button>
                  <Button className="button button-invisible"></Button>
                  <Button className="button button-black" onClick={(e) => this.onOperate(e, '+')}>
                    +
                  </Button>
                  <Button className="button button-black" onClick={this.evaluate}>
                    =
                  </Button>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
