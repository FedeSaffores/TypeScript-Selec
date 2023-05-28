import TabsView from './components/Tabs/tabsView';
import React from 'react';
import './App.css';
import { TabItem } from './components/Tabs/Types/types';


function Content1(){
  return <div>Content 1</div>
}
function Content2(){
  return <div>Content 2</div>
}
function Content3(){
  return <div>Content 3</div>
}

const items:TabItem[]=[
  {
  id: crypto.randomUUID(),
  title:"Tab 1",
  content: Content1,
},
{
  id: crypto.randomUUID(),
  title:"Tab 2",
  content: Content2,
},
{
  id: crypto.randomUUID(),
  title:"Tab 3",
  content: Content3,
}
]

function App() {
  function handleChange(item: TabItem){
    console.log(item.title)
  }
  return (
    <div>
      <TabsView items={items} onChange={handleChange}/>
    </div>
  );
}

export default App;
