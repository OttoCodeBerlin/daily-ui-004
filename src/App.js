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
    }
  }

  onClick = (e, number) => {
    e.preventDefault()
    this.setState({ init: true })
    const newNumber = this.state.display + number
    this.setState((prevState) => ({ ...prevState, display: newNumber }))
  }

  clear = () => {
    this.setState({ init: false, display: '' })
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
                  <Button className="button button-black">/</Button>
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
                  <Button className="button button-black">*</Button>
                  <Button className="button button-black" onClick={this.clear}>C</Button>

                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '1')}>
                    1
                  </Button>
                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '2')}>
                    2
                  </Button>
                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '3')}>
                    3
                  </Button>
                  <Button className="button button-black">-</Button>
                  <Button className="button button-black">CE</Button>

                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '0')}>
                    0
                  </Button>
                  <Button className="button button-gray" onClick={(e) => this.onClick(e, '.')}>
                    .
                  </Button>
                  <Button className="button button-invisible"></Button>
                  <Button className="button button-black">+</Button>
                  <Button className="button button-black">=</Button>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
