import { Container } from './components/container.js'
import * as TrapComponents from './components/trap/trap-modules.js'
import * as HalComponents from './components/hal/hal-modules.js'
import * as Slaapkamer1Components from './components/slp1/slp1-modules.js'
import * as KeukenComponents from './components/keuken/keuken-modules.js'

const routes = [
  {
      path: '',
      component: Container,
      children: [
        {
          path: '',
          component: TrapComponents.Trap,
          name: 'Trap'
        },
        {
          path: 'zoomed',
          component: TrapComponents.TrapZoomed,
          name: 'TrapZoomed'
        }
      ]
  },
  {
    path: '/hal',
    component: Container,
    children: [
      {
        path: '',
        component: HalComponents.Hal,
        name: 'Hal'
      },
      {
        path: 'borden',
        component: HalComponents.Borden,
        name: 'Borden'
      },
      {
        path: 'barometer',
        component: HalComponents.Barometer,
        name: 'Barometer'
      },
      {
        path: 'potjes',
        component: HalComponents.Potjes,
        name: 'Potjes'
      },
      {
        path: 'schilderij1',
        component: HalComponents.Schilderij1,
        name: 'Schilderij1'
      },
      {
        path: 'schilderij2',
        component: HalComponents.Schilderij2,
        name: 'Schilderij2'
      }
    ]
  },
  {
    path: '/slaapkamer1',
      component: Container,
      children: [
        {
          path: '',
          component: Slaapkamer1Components.Slaapkamer1,
          name: 'Slaapkamer1'
        }
      ]
  },
  {
      path: '/keuken',
      component: Container,
      children: [
          {
              path: '',
              component: KeukenComponents.KeukenOverview,
              name: "Keuken"
          },
          {
              path: 'oven',
              component: KeukenComponents.Oven,
              name: "Oven"
            },
            {
              path: 'keys',
              component: KeukenComponents.Keys,
              name: "Keys"
            },
            {
              path: 'hoekkast',
              component: KeukenComponents.Hoekkast,
              name: "Hoekkast"
            },
            {
              path: 'potjes',
              component: KeukenComponents.Potjes,
              name: "Potjes"
            },
            {
              path: 'vuur',
              component: KeukenComponents.Vuur,
              name: "Vuur"
            },
            {
              path: 'kast',
              component: KeukenComponents.Kast,
              name: "Kast",
            },
            {
              path: 'kast-open',
              component: KeukenComponents.KastOpen,
              name: "KastOpen",
            },
            {
              path: 'kruiden',
              component: KeukenComponents.Kruiden,
              name: "Kruiden"
            },
            {
              path: 'pannen',
              component: KeukenComponents.Pannen,
              name: "Pannen"
            },
            {
              path: 'pannen-weg',
              component: KeukenComponents.PannenWeg,
              name: "PannenWeg"
            }
          ]
    }
];

export { routes }