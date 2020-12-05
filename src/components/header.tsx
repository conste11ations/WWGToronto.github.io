import * as React from 'react';

import {
  Logo,
  NavBar,
} from '.';

interface State {
  menuOpen: boolean;
}

export class Header extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      menuOpen: false,
    }
  }

  public render() {
    return (
      <div className={'top-0 fixed w-100 z-5 bg-near-white'}>
        <div className={'dn dn-m di-l'}>
          <div className={'flex items-center bw1'}>
            <Logo />
            <NavBar menuDirection={'row'} />
          </div>
        </div>

        <div className={'di di-m dn-l'}>
          <div className={'flex flex-column bw1'}>
            <div className={'flex justify-between items-center bw1'}>
              <Logo />
              {this.state.menuOpen ?
                <div className={'list flex ma0 ph4'}>
                  <button onClick={this.toggleMenu} className={'gray bg-near-white link bn'}>
                    <i className='fa fa-times fa-2x' aria-hidden='true' />
                  </button>
                </div>
                :
                <div className={'list flex ma0 ph4'}>
                  <button onClick={this.toggleMenu} className={'gray bg-near-white link bn focus-bn'}>
                    <i className='fa fa-bars fa-2x' aria-hidden='true' />
                  </button>
                </div>
              }
            </div>
            {this.state.menuOpen &&
              <NavBar menuDirection={'column'} />
            }
          </div>
        </div>
      </div>
    );
  }

  private toggleMenu = () => this.setState((prevState) => ({
    menuOpen: !prevState.menuOpen,
  }));
}