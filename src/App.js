import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/Topbar'
import Dashboard from './scenes/dashboard'
import NavMenu from './scenes/global/NavMenu'

import Team from './scenes/team'
import Contacts from './scenes/contacts'
/*import Invoices from './scenes/global/invoices'
import Bar from './scenes/global/bar'
import Form from './scenes/global/form'
import Line from './scenes/global/line'
import Pie from './scenes/global/pie'
import Faq from './scenes/global/faq'
import Geography from './scenes/global/geography'
import Calendar from './scenes/global/calendar' */

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          
          <div className="app">
            <NavMenu />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {<Route path="/team" element={<Team />} />}
                {<Route path="/contacts" element={<Contacts />} />}
                {/* <Route path="/invoices" element={<Invoices />} /> */}
                {/* <Route path="/form" element={<Form />} /> */}
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/faq" element={<Faq />} /> */}
                {/* <Route path="/geography" element={<Geography />} /> */}
                {/* <Route path="/calendar" element={<Calendar />} /> */}
              </Routes>
            </main>
          </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
