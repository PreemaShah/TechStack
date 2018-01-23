import React,{Component} from 'react';
import {CardItem} from './Common';
import {Text} from 'react-native';
class ListItem extends Component
{
    render(){
        <CardItem>
            <Text>{this.props.library.title}</Text>
        </CardItem>
    }

}
export default ListItem;