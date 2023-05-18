import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsSection = () => {
  return (
    <div className="bg-gray-100 p-4  w-full mx-auto mt-3">
      <Tabs className="">
        <TabList  className="flex mb-4 items-center justify-center ">
          <Tab
            className="text-gray-600 py-2 px-4 bg-gray-200 rounded-l cursor-pointer text-center"
            selectedClassName="bg-indigo-600 text-white"
          >
            Tab 1
          </Tab>
          <Tab
            className="text-gray-600 py-2 px-4 bg-gray-200 cursor-pointer"
            selectedClassName="bg-indigo-600 text-white"
          >
            Tab 2
          </Tab>
          <Tab
            className="text-gray-600 py-2 px-4 bg-gray-200 rounded-r cursor-pointer"
            selectedClassName="bg-indigo-600 text-white"
          >
            Tab 3
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Content 1</h2>
          <p>This is the content for Tab 1.</p>
        </TabPanel>

        <TabPanel>
          <h2>Content 2</h2>
          <p>This is the content for Tab 2.</p>
        </TabPanel>

        <TabPanel>
          <h2>Content 3</h2>
          <p>This is the content for Tab 3.</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsSection;
