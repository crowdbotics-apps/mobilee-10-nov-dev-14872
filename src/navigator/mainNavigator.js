import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen014264Navigator from '../features/BlankScreen014264/navigator';
import BlankScreen114263Navigator from '../features/BlankScreen114263/navigator';
import CopyOfBlankScreen114262Navigator from '../features/CopyOfBlankScreen114262/navigator';
import BlankScreen014212Navigator from '../features/BlankScreen014212/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen014264: { screen: BlankScreen014264Navigator },
BlankScreen114263: { screen: BlankScreen114263Navigator },
CopyOfBlankScreen114262: { screen: CopyOfBlankScreen114262Navigator },
BlankScreen014212: { screen: BlankScreen014212Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
