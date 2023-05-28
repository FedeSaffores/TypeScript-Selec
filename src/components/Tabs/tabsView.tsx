import React, {useState} from "react";
import { TabItem } from "./Types/types";
import "./tabsView.modules.css";
import classNames from "classnames";


interface TabsViewProps{
  items: TabItem[];
  onChange:(item: TabItem)=>void;
  
}

export default function TabsView({items, onChange}:TabsViewProps) {

  const [selected, setSelected]= useState<number|null>(items.length>0?0:null)

  function handleClick(index:number, item:TabItem){
    setSelected(index)
    onChange(item)
  }
  if(selected===null){
    return null;
    }
  return (
  <div>
    <div className="tabsContainer">
    {
    items.map((item, index)=>(
<div>
<TabView index={index} active={index===selected} item={item} onClick={handleClick} key={item.id}/>
</div>
    ))}
  </div>
  <div>
    <div className="contentContainer"> 
    {items.map((item,index)=>(
        <>
        {
          selected===index && <div><item.content key={item.id}/></div>
        }
        
        </>
      ))}
    </div>
    </div>
    </div>
)}

interface TabViewProps {
  index:number;
  active:boolean;
  item:TabItem;
  onClick:(index: number, item:TabItem)=>void;
}
function TabView({index,active, item, onClick}: TabViewProps){
  return active?(
    <div className={classNames("tab", "activeTab")}>{
      item.title
      }
    </div>
  ) :(
    <button className="tab" onClick={()=> onClick(index, item)}>{item.title}</button>
  );
}