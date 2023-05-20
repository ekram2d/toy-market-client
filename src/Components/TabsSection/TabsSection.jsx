import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopByCatagory from '../ShopByCatagory/ShopByCatagory';

const TabsSection = () => {

  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [sate, setState] = useState("Sports Car")
  useEffect(() => {
    fetch("http://localhost:5000/datas")
      .then(res => res.json())
      .then(data => {
        
        let data1 = data?.filter(ds => ds.subCategory == "Sports Car")
        let data2 = data?.filter(ds => ds.subCategory == "Mini Fire Truck")
        let data3 = data?.filter(ds => ds.subCategory == "Mini Police Car")
        setData1(data1)
        setData2(data2)
        setData3(data3)
      })


  }, [])

  // console.log(data1,data2,data3);

 
  // console.log(data1, data2, data3)

  return (
    <div className="bg-gray-100 p-4  w-full mx-auto mt-3">
      <h3 className='text-center font-bold m-3 text-2xl'>Toy Cars</h3>
      <Tabs className="">
        <TabList className="lg:flex mb-4 items-center justify-center ">
          <Tab
            className="text-gray-600 py-2 px-4 bg-gray-200 rounded-l cursor-pointer text-center"
            selectedClassName="bg-indigo-600 text-white"
          >
            Sports Car
          </Tab>
          <Tab
            className="text-gray-600 py-2 px-4 bg-gray-200 cursor-pointer text-center"
            selectedClassName="bg-indigo-600 text-white"
          >
            Mini Fire Truck

          </Tab>
          <Tab
            className="text-gray-600 py-2 px-4 bg-gray-200 rounded-r cursor-pointer text-center"
            selectedClassName="bg-indigo-600 text-white"
          >
            Mini Police Car
          </Tab>
        </TabList>

        <TabPanel>
         


          <div className='lg:grid lg:grid-cols-2 gap-3'>
           

            {/* {
                  data1=data.filter(ds=> ds.name==" Sports Car")
                  
                }
                {
                  setData(data1)
                } */}
            {
              data1?.map(ds => <ShopByCatagory key={ds.number} ds={ds}></ShopByCatagory>)
            }


          </div>


        </TabPanel>

        <TabPanel>
          
          <div className='lg:grid lg:grid-cols-2 gap-3'>

            {/* {
          data1=data.filter(ds=> ds.name==" Sports Car")
          
        }
        {
          setData(data1)
        } */}
            {
              data2?.map(ds => <ShopByCatagory key={ds.number} ds={ds}></ShopByCatagory>)
            }


          </div>
        </TabPanel>

        <TabPanel>
         
          <div className='lg:grid lg:grid-cols-2 gap-3'>

            {/* {
          data1=data.filter(ds=> ds.name==" Sports Car")
          
        }
        {
          setData(data1)
        } */}
            {
              data3?.map(ds=> <ShopByCatagory key={ds.number} ds={ds}></ShopByCatagory>)
            }


          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsSection;
