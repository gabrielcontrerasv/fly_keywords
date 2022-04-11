/*import React, { Component } from 'react';
class Options extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
export default Options;
*/
import { FaBeer,FaBaby,FaBars,FaChartBar,FaRunning,FaTasks,FaUsers,FaSpellCheck} from 'react-icons/fa';
import React from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function Options() {
    return (
      <>
        <Navigation 
            // you can use your own router's api to get pathname
            style={{color: 'white'}}
            activeItemId="/administracion/members"
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: <span className='float-right'><FaBars />Menu</span>
                //elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: <span><FaSpellCheck/>Keywords</span>,
                itemId: '/dashboard',
                // you can use your own custom Icon component as well
                // icon is optional
                //elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: <span><FaTasks/>Administracion</span>,
                itemId: '/administracion',
                //elemBefore: () => <Icon name="users" />,
                subNav: [
                  {
                    title: <span><FaChartBar/> Resultados</span>,
                    itemId: '/administracion/Resultados',
                  },
                  {
                    title: <span><FaRunning/>Miembros</span>,
                    itemId: '/administracion/miembros',
                  },
                ],
              },
              {
                title: <span><FaUsers/>Escuadrones</span> ,
                itemId: '/tipo de escuadron',
              },
            ]}
          />
      </>
    );
}

export default Options