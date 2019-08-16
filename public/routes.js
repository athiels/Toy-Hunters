import { Container } from './components/container.js'
import * as TrapComponents from './components/trap/trap-modules.js'
import * as HalComponents from './components/hal/hal-modules.js'
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