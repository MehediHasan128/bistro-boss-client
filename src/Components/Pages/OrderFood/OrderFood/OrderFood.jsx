import Cover from "../../Shared/Cover/Cover";
import orderCover from "../../../../assets/assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OrderFood = () => {

  <Helmet>
    <title>Bistro Boss | Order Food</title>
  </Helmet>

    const categories = ['Salad', 'Pizza', 'Soup', 'Desserts', 'Drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = useMenu();

    const dessertItems = menus.filter(item => item.category === 'dessert');
    const pizzaItems = menus.filter(item => item.category === 'pizza');
    const saladItems = menus.filter(item => item.category === 'salad');
    const soupItems = menus.filter(item => item.category === 'soup');
    const drinksItems = menus.filter(item => item.category === 'drinks');

  return (
    <div>
      <Cover
        img={orderCover}
        title={"Our Shop"}
        subTitle={"Would you like to try a Dish"}
      />
      <div className="container mx-auto my-20">
        <div className="w-fit mx-auto">
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>
                    <h1 className="text-lg lg:text-xl font-semibold">Salad</h1>
                </Tab>
                <Tab>
                    <h1 className="text-lg lg:text-xl font-semibold">Pizza</h1>
                </Tab>
                <Tab>
                    <h1 className="text-lg lg:text-xl font-semibold">Soup</h1>
                </Tab>
                <Tab>
                    <h1 className="text-lg lg:text-xl font-semibold">Desserts</h1>
                </Tab>
                <Tab>
                    <h1 className="text-lg lg:text-xl font-semibold">Drinks</h1>
                </Tab>
            </TabList>
            <TabPanel>
                <OrderTabs items={saladItems} />
            </TabPanel>
            <TabPanel>
            <OrderTabs items={pizzaItems} />
            </TabPanel>
            <TabPanel>
            <OrderTabs items={soupItems} />
            </TabPanel>
            <TabPanel>
            <OrderTabs items={dessertItems} />
            </TabPanel>
            <TabPanel>
            <OrderTabs items={drinksItems} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OrderFood;
