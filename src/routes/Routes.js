import React, { useState  } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListCreation from '../components/ListCreation';
import AddList from '../components/AddList';
import dummyData  from "../dummy.json"
const RoutesComponent  = () => {
    const [listData, setListData] = useState(dummyData);
    const [checkedId, setCheckedId] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListCreation lists={listData} checkedId={checkedId} setCheckedId={setCheckedId} />} />
        <Route path="/addlist" element={<AddList listone={listData[checkedId[0]]} listtwo ={listData[checkedId[1]]} addlist={setListData} checkedId ={checkedId} listData={listData} setCheckedId={setCheckedId}/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent ;
