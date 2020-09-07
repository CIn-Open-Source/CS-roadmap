import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  Badge as toolBadge,
} from 'reactstrap';
import Badge from 'react-bootstrap/Badge';
import TopNavBar from '../components/TopNavBar';
import Divider from '../components/Divider.js';

import * as texts from '../constants/texts.js';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="App">
        <TopNavBar />
        <Container fluid>
          <section className="margin-bottom" id="the born of a newbie">
            <Divider value={{ text: 'O Básico' }} />
            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-basics"
                    style={{ background: '#d8f3dc' }}
                  >
                    <span>A base</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-basics">
                    <p>{texts.basics_header_text}</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">Matemática</Badge>
                          <CardBody>
                            <a href="https://google.com">
                              <Badge pill variant="success">
                                Matemática Discreta
                              </Badge>
                            </a>{' '}
                            <Badge pill variant="success">
                              Cálculo I
                            </Badge>{' '}
                            <a href="https://google.com">
                              <Badge pill variant="success">
                                Álgebra Vetorial
                              </Badge>
                            </a>
                            <p>{texts.basics_card_1}</p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Programação</Badge>
                          <CardBody>
                            <a href="https://google.com">
                              <Badge pill variant="success">
                                Introdução à Programação
                              </Badge>
                            </a>{' '}
                            <Badge pill variant="success">
                              Introdução à Computação
                            </Badge>
                            <p>{texts.basics_card_2}</p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>

            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-firstPL"
                    style={{ background: '#b7e4c7' }}
                  >
                    <span>Sua Primeira Linguagem</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-firstPL">
                    <p>{texts.yfpl_header_text}</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">Python</Badge>
                          <CardBody>{texts.yfpl_card_python}</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Java</Badge>
                          <CardBody>
                            <p>{texts.yfpl_card_java}</p>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col>
                        <Card>
                          <Badge variant="success">Javascript</Badge>
                          <CardBody>{texts.yfpl_card_javascript}</CardBody>
                        </Card>
                      </Col>

                      <Col>
                        <Card>
                          <Badge variant="success">C</Badge>
                          <CardBody>
                            <p>{texts.yfpl_card_c}</p>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col>
                        <Card>
                          <Badge variant="success">Outras</Badge>
                          <CardBody>{texts.yfpl_card_others}</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>

            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-algorithm"
                    style={{ background: '#A7DCBF' }}
                  >
                    <span>Algoritmos</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-algorithm">
                    <p>{texts.alg_header_text}</p>

                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">Ordernamento/Sort</Badge>
                          <CardBody>{texts.alg_card_sorts}</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Estruturas de Dados</Badge>
                          <CardBody>{texts.alg_card_data_structures}</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Caminhos</Badge>
                          <CardBody>{texts.alg_card_path}</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Gulosos/Greedy</Badge>
                          <CardBody>{texts.alg_card_greedy}</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Outros</Badge>
                          <CardBody>{texts.alg_card_others}</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
          </section>

          <section id="into the advanced stuff">
            <Divider value={{ text: 'Midway' }} />

            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-infras"
                    style={{ background: '#95d5b2' }}
                  >
                    <span>Infras</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-infras">
                    <p>{texts.infras_header_text}</p>

                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">Software</Badge>
                          <CardBody>
                            <Badge variant="success">Infra de Sw</Badge>{' '}
                            <Badge variant="success">Compiladores</Badge>
                            <p>{texts.infras_card_sw}</p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Hardware</Badge>
                          <CardBody>
                            <Badge variant="success">Infra de Hw</Badge>{' '}
                            <Badge variant="success">Física</Badge>{' '}
                            <Badge variant="success">Sistemas Digitais</Badge>
                            <p>{texts.infras_card_hw}</p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Comunicação</Badge>
                          <CardBody>
                            <Badge variant="success">Infra de Com.</Badge>{' '}
                            <Badge variant="primary">Redes</Badge>
                            <p>{texts.infras_card_com}</p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-data"
                    style={{ background: '#74c69d' }}
                  >
                    <span>Dados</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-data">
                    <p>{texts.data_header_text}</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">Bancos de Dados</Badge>
                          <CardBody>
                            <Badge variant="success">GDI</Badge>
                            <p>{texts.data_card_BD}</p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Ciência de Dados</Badge>
                          <CardBody>
                            <Badge variant="success">
                              Sistemas Inteligentes
                            </Badge>
                            <p>{texts.data_card_DS}</p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Algoritmos</Badge>
                          <CardBody>
                            <Badge variant="primary">Ciência de Dados</Badge>{' '}
                            <Badge variant="primary">
                              Aprendizagem de Máquina
                            </Badge>{' '}
                            <Badge variant="success">
                              Sistemas Inteligentes
                            </Badge>
                            <p>{texts.data_card_alg}</p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-morepl"
                    style={{ background: '#52b788' }}
                  >
                    <span>More Programming Languages</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-morepl">
                    <p>{texts.mpl_header_text}</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">Funcional</Badge>
                          <CardBody>
                            <Badge variant="success">PLC</Badge>
                            <p>{texts.mpl_card_func}</p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Orientação a Objetos</Badge>
                          <CardBody>
                            <Badge variant="success">
                              Introdução a Programação
                            </Badge>
                            <p>{texts.mpl_card_oo}</p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Imperativo</Badge>
                          <CardBody>{texts.mpl_card_imp}</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>

            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-teoria"
                    style={{ background: '#40916c' }}
                  >
                    <span>Teoria da Computação</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-teoria">
                    <p>{texts.teoria_header_text}</p>

                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">Informática Teórica</Badge>
                          <CardBody>
                            <Badge variant="success">Informática Teórica</Badge>{' '}
                            <Badge variant="success">Compiladores</Badge>
                            <p>{texts.teoria_card_teorica}</p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">
                            Análise Assintótica de Algoritmos
                          </Badge>
                          <CardBody>
                            <Badge variant="success">Informática Teórica</Badge>{' '}
                            <Badge variant="success">Algoritmos</Badge>{' '}
                            <Badge variant="success">Lógica</Badge>
                            <p>{texts.teoria_card_analise}</p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
          </section>

          <section id="Grandes sistemas">
            <Divider value={{ text: 'Grandes Sistemas' }} />

            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-ess"
                    style={{ background: '#2d6a4f' }}
                  >
                    <span>Engenharia de Software</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-ess">
                    <p>{texts.ess_header_text}</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">
                            Construção de Software
                          </Badge>
                          <CardBody>
                            <Badge variant="success">ESS</Badge>
                            <p>{texts.ess_card_const}</p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Testes</Badge>
                          <CardBody>
                            <Badge variant="success">ESS</Badge>{' '}
                            <Badge variant="primary">Testes</Badge>
                            <p>{texts.ess_card_test}</p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Código Legado</Badge>
                          <CardBody>{texts.ess_card_legacy}</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-areas"
                    style={{ background: '#1b4332' }}
                  >
                    <span>Diferentes Áreas</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-areas">
                    <Row>
                      <Col>
                        <Card>
                          <CardBody>
                            <p>{texts.area_card_text}</p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
          </section>

          <section id="graphic">
            <Divider value={{ text: 'Processamento Gráfico' }} />

            <Row>
              <Col>
                <FadeInSection>
                  <p>{texts.graphics_header_text}</p>

                  <div
                    className="box"
                    id="toggler-graphics"
                    style={{ background: '#2d6a4f' }}
                  >
                    <span>Jogos</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-graphics">
                    <p>{texts.graphics_hader_games_text}</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">Jogos 2d</Badge>
                          <CardBody>{texts.graphics_card_2dgames}</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Jogos 3d</Badge>
                          <CardBody>{texts.graphics_card_3dgames}</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-areas"
                    style={{ background: '#1b4332' }}
                  >
                    <span>RA/RV</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-areas">
                    <p>{texts.graphics_header_RARV_text}</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">Realidade Aumentada</Badge>
                          <CardBody>
                            <p>{texts.graphics_card_RA}</p>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">Realidade Virtual</Badge>
                          <CardBody>
                            <p>{texts.graphics_card_RV}</p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
          </section>

          <section id="design">
            <Divider value={{ text: 'Design' }} />

            <Row>
              <Col>
                <p>{texts.design_header_text}</p>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-design"
                    style={{ background: '#2d6a4f' }}
                  >
                    <span>Interface</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-design">
                    <p>{texts.design_header_uxui_text}</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">UX</Badge>
                          <CardBody>{texts.design_card_ux}</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">UI</Badge>
                          <CardBody>{texts.design_card_ui}</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">
                            Universal Principles of Design
                          </Badge>
                          <CardBody>
                            {texts.design_card_universal_principles}
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-agile"
                    style={{ background: '#1b4332' }}
                  >
                    <span>Design Thinking</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-agile">
                    <Row>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
          </section>

          <section id="redes">
            <Divider value={{ text: 'Redes de Computadores' }} />

            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-ess"
                    style={{ background: '#2d6a4f' }}
                  >
                    <span>PlaceHolder</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-ess">
                    <p>PlaceHolder</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-areas"
                    style={{ background: '#1b4332' }}
                  >
                    <span>PlaceHolder</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-areas">
                    <Row>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
          </section>

          <section id="soft skills">
            <Divider value={{ text: 'Soft Skills' }} />

            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-ess"
                    style={{ background: '#2d6a4f' }}
                  >
                    <span>PlaceHolder</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-ess">
                    <p>PlaceHolder</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-areas"
                    style={{ background: '#1b4332' }}
                  >
                    <span>PlaceHolder</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-areas">
                    <Row>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
          </section>

          <section id="IA">
            <Divider value={{ text: 'Inteligência Artificial' }} />

            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-ess"
                    style={{ background: '#2d6a4f' }}
                  >
                    <span>PlaceHolder</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-ess">
                    <p>PlaceHolder</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-areas"
                    style={{ background: '#1b4332' }}
                  >
                    <span>PlaceHolder</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-areas">
                    <Row>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
          </section>

          <section id="teoria-avancada">
            <Divider value={{ text: 'Teoria Avançada' }} />

            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-ess"
                    style={{ background: '#2d6a4f' }}
                  >
                    <span>PlaceHolder</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-ess">
                    <p>PlaceHolder</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-areas"
                    style={{ background: '#1b4332' }}
                  >
                    <span>PlaceHolder</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-areas">
                    <Row>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
          </section>

          <section id="seguranca">
            <Divider value={{ text: 'Segurança' }} />

            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-ess"
                    style={{ background: '#2d6a4f' }}
                  >
                    <span>PlaceHolder</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-ess">
                    <p>PlaceHolder</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-areas"
                    style={{ background: '#1b4332' }}
                  >
                    <span>PlaceHolder</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-areas">
                    <Row>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
          </section>

          <section id="dados">
            <Divider value={{ text: 'Dados' }} />

            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-ess"
                    style={{ background: '#2d6a4f' }}
                  >
                    <span>PlaceHolder</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-ess">
                    <p>PlaceHolder</p>
                    <Row>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <Badge variant="success">PlaceHolder</Badge>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
            <Row>
              <Col>
                <FadeInSection>
                  <div
                    className="box"
                    id="toggler-areas"
                    style={{ background: '#1b4332' }}
                  >
                    <span>PlaceHolder</span>
                  </div>
                  <UncontrolledCollapse toggler="#toggler-areas">
                    <Row>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                      <Col>
                        <Card>
                          <CardBody>PlaceHolder</CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </UncontrolledCollapse>
                </FadeInSection>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
}
export default Home;
