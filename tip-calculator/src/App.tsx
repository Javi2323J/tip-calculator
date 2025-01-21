import React from 'react'

import { menuItems } from './data/db'

import MenuItem from './components/MenuItem'

function App(): React.JSX.Element {
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Tips and Consume Calculator</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2>Menu</h2>

          {menuItems.map(item =>
            <MenuItem
              key={item.id}
            />
          )}
        </div>

        <div>
          <h2>Consume</h2>
        </div>
      </main>
    </>
  )
}

export default App