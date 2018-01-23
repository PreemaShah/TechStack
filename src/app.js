import React from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './Components/Common';
import LibraryList from './Components/LibraryList';
const App =()=>{

    return(
        <Provider store={createStore(reducers)}>
         <View>
             <LibraryList/>
             <Header headerText='Tech-Stack'/>
         </View>
        </Provider>
    );
};

export  default App;