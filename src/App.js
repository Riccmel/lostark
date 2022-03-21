import React from 'react'
import './App.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Header from "./Header"
import Submit from './Submit';




function App() {
  const [engraving1, setEngraving1] = React.useState("");
  const [engraving2, setEngraving2] = React.useState("");



  const items = [
    {
      id: 0,
      name: 'Adrenaline'
    },
    {
      id: 1,
      name: 'All-Out Attack'
    },
    {
      id: 2,
      name: 'Awakening'
    },
    {
      id: 3,
      name: 'Barricade'
    },
    {
      id: 4,
      name: 'Broken Bone'
    },
    {
      id: 5,
      name: 'Contender'
    },
    {
      id: 6,
      name: 'Crisis Evasion'
    },
    {
      id: 7,
      name: 'Crushing Fist'
    },
    {
      id: 8,
      name: 'Cursed Doll'
    },
    {
      id: 9,
      name: 'Disrispect'
    },
    {
      id: 10,
      name: 'Divine Protection'
    },
    {
      id: 11,
      name: 'Drops of Ether'
    },
    {
      id: 12,
      name: 'Emergency Rescue'
    },
    {
      id: 13,
      name: 'Enhanced Shield'
    },
    {
      id: 14,
      name: 'Ether Predator'
    },
    {
      id: 15,
      name: 'Expert'
    },
    {
      id: 16,
      name: 'Explosive Expert'
    },
    {
      id: 17,
      name: 'Fortitude'
    },
    {
      id: 18,
      name: 'Grudge'
    },
    {
      id: 19,
      name: 'Heavy Armor'
    },
    {
      id: 20,
      name: 'Hit Master'
    },
    {
      id: 21,
      name: 'Increase Mass'
    },
    {
      id: 22,
      name: 'Keen Blunt Weapon'
    },
    {
      id: 23,
      name: 'Lightning Fury'
    },
    {
      id: 24,
      name: 'MP effiency'
    },
    {
      id: 25,
      name: 'Magick Stream'
    },
    {
      id: 26,
      name: 'Master Brawler'
    },
    {
      id: 27,
      name: 'Master of Ambush'
    },
    {
      id: 28,
      name: 'Master of Escape'
    },
    {
      id: 29,
      name: 'Master\'s Tenacity'
    },
    {
      id: 30,
      name: 'Max MP increase'
    },
    {
      id: 31,
      name: 'Necromancy'
    },
    {
      id: 32,
      name: 'Precise Dagger'
    },
    {
      id: 33,
      name: 'Preemptive Strike'
    },
    {
      id: 34,
      name: 'Propulsion'
    },
    {
      id: 35,
      name: 'Raid Captain'
    },
    {
      id: 36,
      name: 'Shield Piercing'
    },
    {
      id: 37,
      name: 'Sight Focus'
    },
    {
      id: 38,
      name: 'Spirit Absorption'
    },
    {
      id: 39,
      name: 'Stabilised Status'
    },
    {
      id: 40,
      name: 'Strong Will'
    },
    {
      id: 41,
      name: 'Super Charge'
    },
    {
      id: 42,
      name: 'Vital Hit Point'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    
  }

  const handleOnHover = (result) => {
    // the item hovered
  }

  const handleOnSelect1 = (item) => {
    // the item selected
    setEngraving1(item.name);
  }

  const handleOnSelect2 = (item) => {
    // the item selected
    setEngraving2(item.name);
  }

  const handleOnFocus = () => {
    
  }

  console.log(engraving1);
  console.log(engraving2);
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <div style={{ width: 400 }} className="textbox1">
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect1}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
        <div style={{ width: 400 }} className="textbox2">
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect2}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
      </header>
      <Submit eng1={engraving1} eng2={engraving2}/>
    </div>
  )
}

export default App