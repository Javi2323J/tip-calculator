import React from 'react'
import { menuItems } from './data/db'
import useOrder from './hooks/useOrder'
import MenuItem from './components/MenuItem'

function App(): React.JSX.Element {
  const {
    addItem
  } = useOrder()
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Tips and Consume Calculator</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item =>
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            )}
          </div>
        </div>

        <div>
          <h2>Consume</h2>
        </div>
      </main>
    </>
  )
}

export default App