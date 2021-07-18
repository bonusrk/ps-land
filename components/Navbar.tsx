import React, { useState } from 'react';
import clsx from 'clsx';
import Container from './Grid/Container';
import Row from './Grid/Row';
import Col from './Grid/Col';

const Navbar: React.FC = (props): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const classList = clsx(
    'hidden-navbar',
    { visible },
  );
  const navbarClassList = clsx(
    'navbar',
    { visible },
  );

  const games = [
    {
      name: 'Daily Themed Crossword',
      href: '/crossword',
    },
    {
      name: 'Word Trip',
      href: '/word-trip',
    },
    {
      name: 'Crossword Jam',
      href: '/crossword-jam',
    },
    {
      name: 'Word Wars',
      href: '/word-wars',
    },
    {
      name: 'Solitaire',
      href: '/solitaire',
    },
  ];

  return (
    <nav>
      <Container>
        <Row>
          <Col>
            <div
              className="relative"
              onMouseLeave={() => setVisible(false)}
            >
              <div className={navbarClassList}>
                <img
                  height="40px"
                  width="210px"
                  src="/assets/logo.png"
                  alt="logo"
                />
                <div
                  className="nav__games ml-10 cursor-pointer"
                  onMouseEnter={() => setVisible(true)}
                >
                  Games
                </div>
              </div>
              <div
                className={classList}
                onMouseLeave={() => setVisible(false)}
              >
                <div className="w-full h-full flex items-center pl-10">
                  <ul className="flex">
                    {games.map((g, index) => (
                      <li
                        className="mr-10"
                        key={index}
                      >
                        <a href={g.href}>{g.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar;
