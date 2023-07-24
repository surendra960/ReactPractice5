import React,{useState,useMemo} from 'react'

function UseMemoHook() {
    const [count,setCount] = useState(0);
    const [item,setItem] = useState(10);

    const multiCountMemo = useMemo(function multiCount(){
        console.warn("multicount");
        return count*5
    },[count])
  return (
    <div className='box marginTop'>
        <h2>Count : {count}</h2>
        <h2>Item : {item}</h2>
        <h2>{multiCountMemo}</h2>
        <button className='btn ' onClick={()=>setCount(count+1)}>Update Count</button>
        <button  className='btn leftM' onClick={()=>setItem(item*2)}>Update Item</button>
    </div>
  )
}

export default UseMemoHook